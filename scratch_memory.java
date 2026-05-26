/**
 * Phase 14: Arrays — Memory Deep Dive (EP 43)
 * Demo: Stack & Heap behavior during Declaration vs Initialization
 *       + NullPointerException + new keyword + Default values
 */
public class ArrayMemoryDeepDive {
    public static void main(String[] args) {

        System.out.println("=== EP 43: Array Memory Deep Dive (Stack & Heap) ===\n");

        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 1: DECLARATION ONLY → Stack में नाम, Heap खाली         ║
        // ║                                                               ║
        // ║  Stack Area:  arr → null (कोई address नहीं)                   ║
        // ║  Heap Area:   [ खाली — कोई memory allocate नहीं हुई ]         ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("--- STEP 1: Declaration Only ---");
        int[] arr;
        // arr अभी null है — Stack में सिर्फ नाम है, Heap में कुछ नहीं
        // System.out.println(arr[0]); // ❌ COMPILE ERROR: variable arr might not have been initialized
        System.out.println("int[] arr; → Stack: arr=null, Heap: EMPTY");
        System.out.println("Cannot access arr[0] → Compile Error!\n");


        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 2: INITIALIZATION → new keyword से Heap में Object      ║
        // ║                                                               ║
        // ║  Stack Area:  arr → 0x0101H (Heap address)                   ║
        // ║  Heap Area:   [0x0101H] → [0][0][0][0][0] (5 spaces, all 0)  ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("--- STEP 2: Initialization with new keyword ---");
        arr = new int[5];
        // अब क्या हुआ?
        // 1. new keyword ने Heap Area में 5 int spaces वाला Object बनाया
        // 2. उस Object का एक unique address मिला (जैसे 0x0101H)
        // 3. यह address Stack में arr variable को assign हो गया
        // 4. सभी 5 positions पर default value (0) भर दिया गया

        System.out.println("arr = new int[5];");
        System.out.println("Stack: arr → [Heap Address]");
        System.out.println("Heap:  [" + arr[0] + "][" + arr[1] + "][" + arr[2] + "][" + arr[3] + "][" + arr[4] + "]");
        System.out.println("All default values = 0\n");


        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 3: VALUE ASSIGNMENT → Heap के अंदर value बदलना         ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("--- STEP 3: Assigning Values ---");
        arr[0] = 85;
        arr[1] = 90;
        arr[2] = 75;
        System.out.println("After: arr[0]=85, arr[1]=90, arr[2]=75");
        System.out.println("Heap:  [" + arr[0] + "][" + arr[1] + "][" + arr[2] + "][" + arr[3] + "][" + arr[4] + "]");
        System.out.println("Index:  0    1    2    3    4\n");


        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 4: STRING ARRAY → Memory Layout                        ║
        // ║                                                               ║
        // ║  Stack: name → [Heap Address]                                ║
        // ║  Heap:  [0x0202H] → [null][null][null][null][null]           ║
        // ║  (String default = null, NOT empty string!)                   ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("--- STEP 4: String Array Memory ---");
        String[] name = new String[5];
        System.out.println("String[] name = new String[5];");
        System.out.println("Default at index 0: " + name[0]); // null
        System.out.println("Default at index 1: " + name[1]); // null

        name[0] = "Vinu";
        name[1] = "Shah";
        name[2] = "Arjun";
        System.out.println("After assignment:");
        System.out.println("  name[0] = " + name[0]); // Vinu
        System.out.println("  name[1] = " + name[1]); // Shah
        System.out.println("  name[2] = " + name[2]); // Arjun
        System.out.println("  name[3] = " + name[3]); // null (not assigned)
        System.out.println("  name[4] = " + name[4]); // null (not assigned)


        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 5: TWO new KEYWORDS = TWO SEPARATE OBJECTS in Heap     ║
        // ║                                                               ║
        // ║  Stack: marks → [0x0101H]                                    ║
        // ║         names → [0x0202H]                                    ║
        // ║  Heap:  [0x0101H] → [0][0][0][0][0]                         ║
        // ║         [0x0202H] → [null][null][null][null][null]            ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("\n--- STEP 5: Multiple new = Multiple Heap Objects ---");
        int[] marks = new int[5];     // Object 1 in Heap
        String[] students = new String[5]; // Object 2 in Heap (separate!)
        System.out.println("int[] marks = new int[5];      → Heap Object 1");
        System.out.println("String[] students = new String[5]; → Heap Object 2");
        System.out.println("Each 'new' creates a SEPARATE object in Heap!\n");


        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 6: NullPointerException DEMO                            ║
        // ║  null assign करके access करने पर Runtime Exception!           ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("--- STEP 6: NullPointerException ---");
        System.out.println("If: int[] test = null;");
        System.out.println("Then: test[0] → ❌ NullPointerException at RUNTIME!");
        System.out.println("Why? Because test has NO Heap address — it points to nothing.");
        System.out.println("Tip: Always initialize your array before accessing elements!\n");

        // Uncomment below to see actual NullPointerException:
        // int[] test = null;
        // System.out.println(test[0]); // throws java.lang.NullPointerException


        // ╔═══════════════════════════════════════════════════════════════╗
        // ║  STEP 7: DEFAULT VALUES TABLE                                 ║
        // ╚═══════════════════════════════════════════════════════════════╝

        System.out.println("--- STEP 7: Default Values Table ---");
        System.out.println("┌─────────────────┬──────────────────┐");
        System.out.println("│ Data Type       │ Default Value    │");
        System.out.println("├─────────────────┼──────────────────┤");

        int[] di = new int[1];
        double[] dd = new double[1];
        boolean[] db = new boolean[1];
        String[] ds = new String[1];
        char[] dc = new char[1];
        float[] df = new float[1];
        long[] dl = new long[1];

        System.out.println("│ int             │ " + di[0] + "                │");
        System.out.println("│ double          │ " + dd[0] + "              │");
        System.out.println("│ boolean         │ " + db[0] + "            │");
        System.out.println("│ String (Object) │ " + ds[0] + "             │");
        System.out.println("│ char            │ '\\u0000' (empty)  │");
        System.out.println("│ float           │ " + df[0] + "              │");
        System.out.println("│ long            │ " + dl[0] + "                │");
        System.out.println("└─────────────────┴──────────────────┘");
    }
}
