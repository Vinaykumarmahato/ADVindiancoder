export default async function handler(req, res) {
  const { username } = req.query;
  
  if (!username) {
    return res.redirect(302, '/');
  }

  const backendUrl = process.env.VITE_API_URL || 'https://adv-full-stack-backend.onrender.com';
  
  let userData = {
    username,
    avatar: 'https://www.advindiancoder.com/assets/og-image.png',
    bio: `${username}'s developer portfolio and coding profile on ADV Indian Coder.`,
    streak: 0,
    codingHours: 0,
    totalCompiles: 0
  };

  try {
    const response = await fetch(`${backendUrl}/api/public/profile/${encodeURIComponent(username)}`);
    if (response.ok) {
      const data = await response.json();
      userData = {
        username: data.username || username,
        avatar: data.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=ef4444&color=fff`,
        bio: data.bio && data.bio.trim().length > 0 ? data.bio.trim() : `Developer portfolio, skills, and coding journey on ADV Indian Coder.`,
        streak: data.streak || 0,
        codingHours: data.codingHours || 0,
        totalCompiles: data.totalCompiles || 0
      };
    }
  } catch (e) {
    console.error('Error fetching profile for OG:', e);
  }

  const title = `${userData.username} - Overview | ADV Indian Coder`;
  let descParts = [];
  if (userData.bio) descParts.push(userData.bio);
  if (userData.streak > 0) descParts.push(`🔥 ${userData.streak} Day Streak`);
  if (userData.codingHours > 0) descParts.push(`💻 ${userData.codingHours}h Coding`);
  if (userData.totalCompiles > 0) descParts.push(`🚀 ${userData.totalCompiles} Compiles`);
  const description = descParts.join(' | ') || `${userData.username}'s developer profile on ADV Indian Coder`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="description" content="${description}" />
  
  <!-- Open Graph / WhatsApp / Facebook / LinkedIn Preview -->
  <meta property="og:type" content="profile" />
  <meta property="og:site_name" content="ADV Indian Coder" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${userData.avatar}" />
  <meta property="og:image:secure_url" content="${userData.avatar}" />
  <meta property="og:image:width" content="600" />
  <meta property="og:image:height" content="600" />
  <meta property="og:url" content="https://www.advindiancoder.com/u/${encodeURIComponent(userData.username)}" />

  <!-- Twitter / X Preview -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@advindiancoder" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${userData.avatar}" />

  <!-- Instant Browser Redirect for human users -->
  <meta http-equiv="refresh" content="0;url=/u/${encodeURIComponent(userData.username)}" />
  <script>window.location.replace("/u/${encodeURIComponent(userData.username)}");</script>
</head>
<body style="font-family: system-ui, sans-serif; background: #0c1222; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
  <div style="text-align: center;">
    <img src="${userData.avatar}" alt="${userData.username}" style="width: 96px; height: 96px; border-radius: 50%; border: 3px solid #ef4444; margin-bottom: 16px; object-fit: cover;" />
    <h2>${userData.username}</h2>
    <p style="color: #94a3b8;">${description}</p>
    <p style="color: #64748b; font-size: 13px;">Redirecting to profile...</p>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  return res.status(200).send(html);
}
