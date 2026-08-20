import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Globe, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Server, Database, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface DjangoTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const DjangoCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: DjangoTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'django-mvt-architecture',
            title: '1. [Beginner] Architecture & Setup (MVT Pattern)',
            definition: 'Django is a batteries-included Python web framework operating under the Model-View-Template (MVT) architecture.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Django uses the Model-View-Template (MVT) architecture, where the Model handles data, the View processes business logic, and the Template manages the user interface.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Think of MVT like a restaurant: The Model is the pantry (ingredients), the View is the chef (logic), and the Template is the plated meal served to the customer.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph TD
                                A[User Request] --> B[URL Dispatcher]
                                B --> C[View]
                                C --> D[Model]
                                D --> E[(Database)]
                                C --> F[Template]
                                F --> G[HTTP Response]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`django-admin startproject myproject\ncd myproject\npython manage.py runserver`} lang="bash" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Instagram and Spotify started with Django's MVT to rapidly prototype and scale their initial platforms.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Rapid development out-of-the-box</li>
                                <li>Clean, logical separation of concerns</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Can be monolithic for microservices</li>
                                <li>Steeper curve than simpler frameworks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-models-orm',
            title: '2. [Beginner] Models & Database Layer (Django ORM)',
            definition: 'Django ORM maps Python class definitions to database tables. Schema alterations are applied via makemigrations and migrate commands.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">The Object-Relational Mapper (ORM) allows you to interact with your database, like writing SQL, using Python objects and methods.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Think of ORM like a translator bridging the gap between a Spanish speaker (Python) and a French speaker (SQL database).</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Python Model Class] -->|makemigrations| B[Migration File]
                                B -->|migrate| C[(SQL Database Table)]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`class Product(models.Model):\n    title = models.CharField(max_length=200)\n    price = models.DecimalField(max_digits=10, decimal_places=2)`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">E-commerce platforms use ORM to define complex catalogs, managing products and categories without writing raw SQL.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Database agnostic (easily swap DB engines)</li>
                                <li>Protects against SQL injection</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Complex queries can be harder to write than raw SQL</li>
                                <li>Slight performance overhead compared to raw SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-views-urls',
            title: '3. [Beginner] Views & URL Routing (FBVs vs CBVs)',
            definition: 'Views process HTTP requests and return HTTP responses. URL routing maps specific browser URLs to corresponding view functions or classes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Views act as the main logic center handling an incoming request and returning a response, mapped via URL patterns.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">URLs are the postal addresses, and Views are the mailrooms that process incoming letters based on their destination address.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[GET /products/1/] --> B[urls.py match]
                                B --> C[product_detail View]
                                C --> D[Fetch Product 1]
                                D --> E[Return HTML/JSON]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`urlpatterns = [\n    path('products/<int:id>/', views.product_detail, name='product-detail'),\n]`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Blogs use dynamic URL parameters like /post/2026/08/ to automatically filter content based on the path.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Clean, readable URL design</li>
                                <li>Supports powerful Class-Based Views for reusability</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>CBVs can become deeply nested and hard to debug</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-templates-dtl',
            title: '4. [Beginner] Templates & DTL (Django Template Language)',
            definition: 'DTL renders HTML dynamically using tags and variables to inject backend Python data into the frontend.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">The Django Template Language provides logic like loops and conditionals inside HTML files to build dynamic pages.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Think of a template like a fill-in-the-blanks form letter. The context data provides the specific names and details to fill the blanks.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph TD
                                A[base.html] -->|extends| B[home.html]
                                A -->|extends| C[about.html]
                                D[Context Data] --> B
                                D --> C
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`{% for product in products %}\n  <h2>{{ product.title|upper }}</h2>\n{% endfor %}`} lang="html" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">News websites use templates to loop over articles and render the homepage dynamically without manual HTML updates.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Secure against Cross-Site Scripting (XSS)</li>
                                <li>Template inheritance avoids code duplication</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Limited logic capabilities compared to React/Vue</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'django-forms-csrf',
            title: '5. [Intermediate] Forms & ModelForms ({% csrf_token %})',
            definition: 'Forms manage HTML input generation, server-side validation, and security integrations like CSRF tokens.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">ModelForms automatically generate robust, validating HTML forms directly from your Database Models, saving boilerplate.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Like a strict bouncer at a club, forms inspect incoming data and reject anyone lacking proper ID (CSRF Token) or format.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[POST Request] --> B{Valid CSRF?}
                                B -->|No| C[403 Forbidden]
                                B -->|Yes| D{is_valid()?}
                                D -->|No| E[Return Form with Errors]
                                D -->|Yes| F[Save to Database]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`class ProductForm(forms.ModelForm):\n    class Meta:\n        model = Product\n        fields = ['title', 'price']`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Registration forms use ModelForms to instantly validate passwords, unique emails, and securely hash data on save.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Drastically reduces boilerplate code</li>
                                <li>Built-in robust security protections</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Complex nested forms are difficult to manage natively</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-admin-interface',
            title: '6. [Intermediate] Admin Interface Customization (ModelAdmin)',
            definition: 'The built-in Django Admin portal provides instant CRUD data management and powerful dashboard configuration.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Django automatically builds a production-ready administrative backend to read, update, and delete database records.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Think of the Admin interface as a ready-made control room for your app operators, removing the need for developers to build one manually.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph TD
                                A[Developer Registers Model] --> B[Django Generates UI]
                                B --> C[Admin Views Data]
                                B --> D[Admin Edits Data]
                                C --> E[(Database)]
                                D --> E
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`@admin.register(Product)\nclass ProductAdmin(admin.ModelAdmin):\n    list_display = ('title', 'price', 'is_available')\n    search_fields = ('title',)`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Content management systems (CMS) use customized Admin dashboards to let editors publish and manage articles seamlessly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Saves weeks of development time</li>
                                <li>Highly customizable permissions and views</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Heavy UI customization can be tricky</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-authentication-authorization',
            title: '7. [Intermediate] Authentication & Authorization (@login_required)',
            definition: 'Django includes a robust User authentication system to manage logins, sessions, and permissions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Authentication verifies WHO the user is, while authorization checks WHAT the user is allowed to do.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Showing your ID at a secure building entrance is Authentication. Your keycard only opening specific doors is Authorization.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[User Request] --> B{Is logged in?}
                                B -->|No| C[Redirect to Login]
                                B -->|Yes| D{Has Permission?}
                                D -->|No| E[403 Forbidden]
                                D -->|Yes| F[Execute View]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`@login_required\ndef dashboard(request):\n    return render(request, 'dashboard.html')`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Gated SaaS applications restrict premium features to paying customers by checking user group authorizations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Secure password hashing by default</li>
                                <li>Granular object-level permissions available</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Customizing the default User model later is extremely difficult</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-static-media-uploads',
            title: '8. [Intermediate] Static Files & Media Uploads (ImageField)',
            definition: 'Manage application assets (CSS/JS) and user-uploaded media securely.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Static files are developer-provided assets (CSS, JS, Logos), while Media files are dynamic user uploads (Avatars, Documents).</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Static files are the paint on the walls of an apartment. Media files are the personal furniture the tenant brings in later.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Client Uploads File] --> B[Django View]
                                B --> C{File Type?}
                                C -->|Static| D[Web Server / CDN]
                                C -->|Media| E[S3 Bucket / Media Root]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`class UserProfile(models.Model):\n    avatar = models.ImageField(upload_to='avatars/')`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Social networks store profile picture paths in the database while saving the actual images to AWS S3 buckets.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Clean separation of user vs developer assets</li>
                                <li>Easy cloud storage integration</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Development server serving differs greatly from production</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== ADVANCED TIER ====================
        {
            id: 'django-advanced-orm-queries',
            title: '9. [Advanced] Advanced ORM & Queries (select_related, Q objects)',
            definition: 'Optimize database performance and execute complex queries natively using Advanced ORM capabilities.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Advanced ORM uses tools like <code className="text-cyan-600 font-mono">select_related</code> to avoid N+1 queries, and <code className="text-cyan-600 font-mono">Q objects</code> for complex logical groupings.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Instead of making 100 trips to the grocery store for 100 items (N+1 issue), you take a list and bring back everything in 1 trip (select_related).</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Bad Query] -->|100 queries| B[(Database)]
                                C[select_related] -->|1 JOIN query| B
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`Product.objects.filter(Q(title__icontains='Python') | Q(price__lt=1000)).select_related('category')`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Heavy data-driven apps use F expressions to atomically increment page views directly in SQL, avoiding race conditions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Massive performance improvements</li>
                                <li>Complex logic without raw SQL risk</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Memory bloat if retrieving too many relations unnecessarily</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-rest-framework-drf',
            title: '10. [Advanced] Django REST Framework (DRF) & Serializers',
            definition: 'DRF is a powerful toolkit for building Web APIs, converting Django models into JSON format.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Serializers convert complex Python objects into JSON for transmission, and parse incoming JSON back into validated objects.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Like a translator instantly converting an English document into standard morse code (JSON) so a distant receiver can read it.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Python Object] -->|Serializer| B[JSON Data]
                                B -->|Deserializer + Validate| A
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`class ProductSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Product\n        fields = '__all__'`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Headless Django backends serve mobile apps and React/Vue frontends purely via JSON APIs generated by DRF.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Automatic browsable API generation</li>
                                <li>ViewSets map CRUD logic automatically</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Steep learning curve for custom serializer logic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-drf-auth-permissions',
            title: '11. [Advanced] DRF Authentication & JWT Tokens (SimpleJWT)',
            definition: 'Secure APIs using token-based authentication like JSON Web Tokens (JWT).',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Tokens are passed in HTTP Headers to prove identity immutably, ideal for stateless APIs interacting with SPAs.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Like an unforgeable digital wristband at a concert. You show it at every checkpoint instead of your full ID.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph TD
                                A[Login Credentials] -->|POST /token| B[Server validates]
                                B -->|Return JWT| C[Client stores Token]
                                C -->|Auth: Bearer JWT| D[Access Protected API]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`class SecretDataView(APIView):\n    permission_classes = [IsAuthenticated]\n    def get(self, request):\n        return Response({"user": request.user.username})`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">React frontends keep a short-lived access JWT in memory and silently refresh it using a secure HttpOnly cookie.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Stateless and highly scalable</li>
                                <li>Decouples auth from backend session databases</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Revoking tokens before expiry can be complex</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-middleware-signals',
            title: '12. [Advanced] Custom Middleware & Signals (post_save)',
            definition: 'Middleware intercepts request/response flows. Signals decouple application events triggering callbacks automatically.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Middleware applies global logic to all requests. Signals allow disparate parts of the app to react to events without tight coupling.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Middleware is the security checkpoint every passenger must pass. Signals are like a smoke detector triggering the sprinklers without manual intervention.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph TD
                                A[User Saves Model] --> B[Database Commit]
                                B --> C[post_save Signal]
                                C --> D[Callback: Create Profile]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`@receiver(post_save, sender=User)\ndef create_profile(sender, instance, created, **kwargs):\n    if created:\n        UserProfile.objects.create(user=instance)`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Automatically creating Stripe Customer objects in the background whenever a new Django User model is saved.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Clean, decoupled architectural design</li>
                                <li>Global interventions are easy (CORS, Auth)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Signals can create hidden "magic" flows that are hard to trace</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'django-performance-caching',
            title: '13. [Professional] Performance Optimization & Redis Caching',
            definition: 'Reduce database load by caching views and querysets using Redis.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Caching stores expensive calculated results in ultra-fast RAM (Redis/Memcached) so subsequent requests skip the database.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Like keeping your most used recipes pinned to the fridge door (Cache) rather than searching through heavy books (Database) every time.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Request] --> B{In Cache?}
                                B -->|Yes| C[Return Instant Response]
                                B -->|No| D[Query DB, Compute]
                                D --> E[Store in Cache]
                                E --> C
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`@cache_page(60 * 15)\ndef high_traffic_catalog(request):\n    return render(request, 'catalog.html')`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">News sites cache their homepage for 5 minutes during traffic spikes to withstand millions of hits without server crashes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Drastic reduction in response times</li>
                                <li>Saves massive DB compute costs</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Cache invalidation is famously hard to manage perfectly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-async-celery',
            title: '14. [Professional] Asynchronous Django & Celery Tasks',
            definition: 'Offload long-running processes to background workers to keep web requests lightning fast.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Celery allows you to push heavy tasks (emails, PDF generation) into a queue for background execution.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Like dropping a film roll off at a pharmacy. You don't stand there for an hour; you get a ticket (task ID) and come back later.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Django View] -->|task.delay| B[Redis Queue Broker]
                                B --> C[Celery Worker 1]
                                B --> D[Celery Worker 2]
                                A -->|Instant 200 OK| E[Client]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`@shared_task\ndef send_welcome_email(user_id):\n    # Heavy lifting\n    return True\n\n# In view:\nsend_welcome_email.delay(user.id)`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Video platforms process uploaded videos asynchronously to generate different resolutions without making the user wait.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Prevents HTTP timeouts for slow tasks</li>
                                <li>Scale workers independently of web servers</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Adds massive operational complexity (Requires Redis/RabbitMQ + Worker processes)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-testing-testcase',
            title: '15. [Professional] Testing Django Applications (TestCase & Client)',
            definition: 'Ensure robustness using unit and integration tests with Django TestCase.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Testing automates the verification of your code behavior, simulating client requests and database interactions safely.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Like crash-testing a car in a controlled facility with dummies before letting real customers drive it on the highway.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph TD
                                A[Run Tests] --> B[Create Dummy Database]
                                B --> C[Execute Test Methods]
                                C --> D[Assert Truths]
                                D --> E[Destroy Dummy Database]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`class ProductTests(TestCase):\n    def test_creation(self):\n        prod = Product.objects.create(title="T")\n        self.assertEqual(prod.title, "T")`} lang="python" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">CI/CD pipelines run full test suites via GitHub Actions, blocking deployments if any test fails.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Prevents regression bugs on future updates</li>
                                <li>Acts as executable documentation</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Can double the development time for features initially</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'django-production-gunicorn-nginx',
            title: '16. [Professional] Production Deployment & Security (Gunicorn & Nginx)',
            definition: 'Deploy reliable, scalable architectures using Gunicorn WSGI and Nginx reverse proxies.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" /> Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Gunicorn translates HTTP traffic for Python, while Nginx safely fronts the internet, serving static files and securing traffic.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" /> Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Nginx is the receptionist filtering spam and handing out brochures (static files). Gunicorn is the office manager executing real requests.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" /> Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`
                            graph LR
                                A[Internet/Client] -->|HTTPS| B[Nginx]
                                B -->|Static files| C[Static Dir]
                                B -->|Reverse Proxy| D[Gunicorn]
                                D --> E[Django App]
                        `} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center">
                            <Code className="w-5 h-5 mr-2" /> Sample Code
                        </h3>
                        <CodeBlock code={`gunicorn --workers 3 --bind 127.0.0.1:8000 myproject.wsgi:application`} lang="bash" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" /> Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">Every major Python backend deployment uses a robust WSGI server like Gunicorn or uWSGI to prevent single-thread blocking.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" /> Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Handles thousands of concurrent connections efficiently</li>
                                <li>DDoS protection and SSL termination at Nginx layer</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" /> Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Complex infrastructure setup required compared to PaaS like Heroku</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Django Masterclass Course"
            description="Master Django from MVT Architecture, ORM Models, and DTL Templates to DRF REST APIs, Celery Tasks, Redis Caching, and Gunicorn Deployment."
            topics={topics}
            icon={Globe}
            colorClass="emerald"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default DjangoCoursePage;
