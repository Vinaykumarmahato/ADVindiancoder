# अध्याय 14 (EP 43): Array Declaration & Initialization — 3 तरीके और Memory Deep Dive

जावा की दुनिया में आपका फिर से स्वागत है! पिछले वीडियो (EP 42) में हम लोगों ने समझा कि **एरे का जन्म क्यों हुआ**, मेमोरी (Stack & Heap) में क्या होता है, और एरे के 5 Syntaxes का overview लिया।

अब इस वीडियो में हम **Deep Dive** करेंगे — **Declaration** और **Initialization** का मतलब क्या है, **3 तरीके** से एरे कैसे Declare करते हैं, **Interview Traps** कौन-कौन से हैं, और `new` keyword बिहाइंड द सीन क्या करता है।

---

## 1. Declaration और Initialization का मतलब क्या है?

### 🔹 Declaration (घोषणा)
Declaration का मतलब है कि हम **Compiler को बताते हैं** कि:
- हमारे पास एक **एरे आने वाला है** (आया नहीं, आने वाला है!)
- उसका **नाम** क्या है
- उसमें किस **तरह का डेटा** आएगा (int, String, double, etc.)

```java
int[] arr;      // Declaration — सिर्फ नाम दिया
String[] names; // Declaration — String type का array
```

> [!IMPORTANT]
> **Declaration करने से मेमोरी नहीं मिलती!**  
> Stack Area में सिर्फ variable का नाम आता है (null)। Heap Area बिल्कुल खाली रहता है।

### 🔹 Initialization (प्रारंभीकरण)
Initialization का मतलब है कि हम **actual memory allocate** कर रहे हैं — `new` keyword की मदद से Heap Area में space बनता है।

```java
int a;           // Declaration (normal variable)
a = 20;          // Initialization

String name;     // Declaration
name = "Vinu";   // Initialization
```

> [!NOTE]
> **Normal variable** में Declaration और Initialization सीधा-सा है।  
> लेकिन जब **Array** की बात आती है — तो गेम ही बदल जाता है! क्योंकि Array एक **Object** है जो Heap में store होता है।

---

## 2. Array Declaration के 3 तरीके

### ✅ तरीका 1: Brackets with Type (Preferred)
```java
int[] num;       // ✅ सबसे ज्यादा use होने वाला तरीका
String[] names;  // ✅ Type के साथ bracket
```

### ✅ तरीका 2: Brackets with Variable Name
```java
int num[];       // ✅ Valid है, लेकिन Way 1 ज्यादा preferred है
String names[];  // ✅ C-style syntax
```

### ⚠️ तरीका 3: Multiple Declaration (Interview Trap!)

यह **Interviewer का favorite** question है! बच्चे यहाँ फंस जाते हैं:

```java
// Case 1: दोनों Array हैं ✅
int[] a, b;
// a = int[] (Array) ✅
// b = int[] (Array) ✅

// Case 2: सिर्फ पहला Array है! ⚠️
int a[], b;
// a = int[] (Array) ✅
// b = int (Normal variable!) ⚠️ — यह Array नहीं है!

// Case 3: तीन variables, mixed types ⚠️
int[] a, b[], c;
// a = int[] (1D Array) ✅
// b = int[][] (2D Array!) ⚠️
// c = int[] (1D Array) ✅
```

> [!WARNING]
> **Interview Trap:** `int a[], b;` में `b` Array **नहीं** है!  
> `b` एक normal `int` variable है। केवल `a` ही Array है।

---

## 3. Initialization — new Keyword की पूरी कहानी

### 🔹 new Keyword का मतलब
जब हम `new` keyword लिखते हैं, तो हम Java से बोल रहे हैं:
> "अरे मेरे Java भैया, आप **Heap Area** में एक **Object बना दो**!"

```java
int[] arr = new int[5];
```

**Memory में क्या होता है?**

```
Stack Area          Heap Area
┌─────────┐        ┌────────────────────────────────┐
│ arr      │───────▶│ [0] [0] [0] [0] [0]            │
│ (0x0101H)│        │  0   1   2   3   4  (indices)  │
└─────────┘        │ Address: 0x0101H                │
                    └────────────────────────────────┘
```

1. `new int[5]` → Heap में 5 int spaces वाला Object बना
2. उस Object का address (जैसे `0x0101H`) मिला
3. Stack में `arr` variable में वह address store हो गया
4. सभी 5 positions पर **default value `0`** भर दी गई

### 🔹 String Array Initialization
```java
String[] name = new String[5];
```

```
Stack Area          Heap Area
┌─────────┐        ┌──────────────────────────────────────┐
│ name     │───────▶│ [null] [null] [null] [null] [null]   │
│ (0x0202H)│        │   0      1      2      3      4     │
└─────────┘        │ Address: 0x0202H                     │
                    └──────────────────────────────────────┘
```

> String का default value `null` होता है (empty string `""` नहीं!)

---

## 4. Declaration + Initialization के तरीके

### Method A: एक साथ (Declaration + Initialization)
```java
int[] arr = new int[10];
// Declaration भी हो गया, Initialization भी हो गया — एक ही line में
```

### Method B: अलग-अलग (First Declare, Then Initialize)
```java
int[] arr;          // Step 1: Declaration
arr = new int[5];   // Step 2: Initialization
```

### Method C: Direct Value Assignment (Curly Braces)
```java
int[] arr = {1, 10, 20, 30, 40};
// Size automatically calculate हो जाता है (5 elements = size 5)
```

### Method D: new Keyword + Direct Values
```java
int[] arr = new int[]{90, 75, 88};
// ⚠️ ध्यान रखें: [] के अंदर size मत लिखो! (new int[3]{...} ❌ गलत!)
```

### Method E: String Array Direct Values
```java
String[] names = {"Vinu", "Shah", "Priya"};
// या
String[] names = new String[]{"Vinu", "Shah", "Priya"};
```

---

## 5. NullPointerException — बिना Initialize किए Access करना

```java
int[] arr;
// System.out.println(arr[0]); // ❌ Compile Error: variable might not have been initialized
```

```java
int[] arr = null;
System.out.println(arr[0]); // ❌ Runtime: NullPointerException!
```

> [!CAUTION]
> **NullPointerException** तब आता है जब variable **null** है (कोई Heap address नहीं है) और आप उसे access करने की कोशिश करते हैं। हमेशा पहले initialize करें, फिर access करें!

---

## 6. Two `new` Keywords = Two Separate Objects

```java
int[] marks = new int[5];          // Object 1 in Heap
String[] name = new String[5];    // Object 2 in Heap (completely separate!)
```

```
Stack Area           Heap Area
┌──────────┐        ┌──────────────────────────┐
│ marks    │───────▶│ [0][0][0][0][0]           │ Object 1
│ (0x0101H)│        │ Address: 0x0101H          │
└──────────┘        └──────────────────────────┘
┌──────────┐        ┌──────────────────────────────────┐
│ name     │───────▶│ [null][null][null][null][null]    │ Object 2
│ (0x0202H)│        │ Address: 0x0202H                 │
└──────────┘        └──────────────────────────────────┘
```

> जब-जब `new` keyword use करोगे, **तब-तब** एक **नया Object** बनेगा Heap में!

---

## 7. Default Values Table (डिफ़ॉल्ट मान)

जब हम सिर्फ size देकर array बनाते हैं (`new int[5]`), तो Java सभी positions को **default value** से भर देता है:

| डेटा टाइप (Data Type) | डिफॉल्ट वैल्यू (Default Value) |
| :--- | :--- |
| `int` | `0` |
| `double` | `0.0` |
| `float` | `0.0f` |
| `long` | `0L` |
| `boolean` | `false` |
| `char` | `'\u0000'` (empty character) |
| `String` (या कोई Object) | `null` |

---

## 💡 आने वाले वीडियो में हम क्या पढ़ेंगे?
* एरे के elements को **Loop** (For Loop, For-Each Loop) के ज़रिए कैसे access करते हैं?
* एरे को **Traverse** (घूमना) करने के तरीके
* Array का size runtime पर कैसे पता करते हैं (`.length` property)
* **ArrayIndexOutOfBoundsException** — क्या होता है जब गलत index access करें?

---
**अगर आपको यह concept बिल्कुल आसान लगा, तो comment box में अपना feedback जरूर शेयर करें और channel को subscribe करना न भूलें! #ZeroToPro**
