/**
 * Phase 14: Arrays — Declaration & Initialization (EP 43)
 * Demo: 3 Ways to Declare Arrays + Initialization Methods + Interview Traps
 */
public class ArrayDeclarationDemo {
    public static void main(String[] args) {

        System.out.println("=== EP 43: Array Declaration & Initialization ===\n");

        // ╔═══════════════════════════════════════════════╗
        // ║  PART 1: DECLARATION (सिर्फ नाम देना)          ║
        // ║  Stack में नाम आता है, Heap में कुछ नहीं होता   ║
        // ╚═══════════════════════════════════════════════╝

        // --- WAY 1: Brackets with Type (PREFERRED ✅) ---
        int[] marks;         // int type ka array declare kiya
        String[] names;      // String type ka array declare kiya
        double[] prices;     // double type ka array declare kiya
        boolean[] flags;     // boolean type ka array declare kiya
        System.out.println("Way 1: int[] marks; → Brackets with Type (Preferred)");

        // --- WAY 2: Brackets with Variable Name ---
        int nums[];          // Same as int[] nums — valid but less preferred
        String cities[];
        System.out.println("Way 2: int nums[]; → Brackets with Variable Name");

        // --- WAY 3: Multiple Declaration (INTERVIEW TRAP! ⚠️) ---
        int[] a, b;          // ✅ DONO array hain — a bhi array, b bhi array
        int c[], d;          // ⚠️ SIRF c array hai, d ek normal int variable hai!
        int[] e, f[], g;     // ⚠️ e = 1D array, f = 2D array (int[][]), g = 1D array

        System.out.println("\nWay 3: INTERVIEW TRAP!");
        System.out.println("  int[] a, b;   → Both a AND b are arrays ✅");
        System.out.println("  int c[], d;   → Only c is array, d is normal int ⚠️");
        System.out.println("  int[] e, f[], g; → e=1D, f=2D, g=1D ⚠️");


        // ╔═══════════════════════════════════════════════╗
        // ║  PART 2: INITIALIZATION (मेमोरी देना)           ║
        // ║  new keyword → Heap में Object बनाता है         ║
        // ╚═══════════════════════════════════════════════╝

        System.out.println("\n=== Initialization Methods ===\n");

        // --- METHOD A: Declaration + Initialization Together ---
        int[] arr1 = new int[5];  // Heap mein 5 spaces, sab 0 (default)
        System.out.println("Method A: int[] arr1 = new int[5];");
        System.out.println("  Length: " + arr1.length);
        System.out.println("  Default value at index 0: " + arr1[0]); // 0

        // --- METHOD B: Separate Declaration, then Initialization ---
        int[] arr2;
        arr2 = new int[3];       // Ab Heap mein memory mili
        arr2[0] = 99;
        System.out.println("\nMethod B: First declare, then initialize");
        System.out.println("  arr2[0] after assignment: " + arr2[0]); // 99

        // --- METHOD C: Declaration + Initialization with Size (10 elements) ---
        int[] arr3 = new int[10];
        System.out.println("\nMethod C: int[] arr3 = new int[10];");
        System.out.println("  Length: " + arr3.length);


        // ╔═══════════════════════════════════════════════╗
        // ║  PART 3: DIRECT VALUE ASSIGNMENT               ║
        // ║  Curly braces {} se directly values dena       ║
        // ╚═══════════════════════════════════════════════╝

        System.out.println("\n=== Direct Value Assignment ===\n");

        // --- Using Curly Braces {} ---
        int[] numbers = {1, 10, 20, 30, 40};
        System.out.println("int[] numbers = {1, 10, 20, 30, 40};");
        System.out.println("  numbers[0]: " + numbers[0]); // 1
        System.out.println("  numbers[2]: " + numbers[2]); // 20
        System.out.println("  numbers[4]: " + numbers[4]); // 40

        // --- Using new + Curly Braces (size mat likho [] mein!) ---
        int[] data = new int[]{90, 75, 88};
        System.out.println("\nint[] data = new int[]{90, 75, 88};");
        System.out.println("  data[1]: " + data[1]); // 75

        // --- String Array ---
        String[] students = {"Vinu", "Shah", "Priya"};
        System.out.println("\nString[] students = {\"Vinu\", \"Shah\", \"Priya\"};");
        System.out.println("  students[0]: " + students[0]); // Vinu
        System.out.println("  students[2]: " + students[2]); // Priya

        // --- String Array with new keyword ---
        String[] teachers = new String[]{"Vinay", "Kumar"};
        System.out.println("\nString[] teachers = new String[]{\"Vinay\", \"Kumar\"};");
        System.out.println("  teachers[0]: " + teachers[0]); // Vinay


        // ╔═══════════════════════════════════════════════╗
        // ║  PART 4: DEFAULT VALUES for Different Types    ║
        // ╚═══════════════════════════════════════════════╝

        System.out.println("\n=== Default Values for Different Data Types ===\n");

        int[] intArr = new int[2];
        double[] dblArr = new double[2];
        boolean[] boolArr = new boolean[2];
        String[] strArr = new String[2];

        System.out.println("int[] default:     " + intArr[0]);   // 0
        System.out.println("double[] default:  " + dblArr[0]);   // 0.0
        System.out.println("boolean[] default: " + boolArr[0]);  // false
        System.out.println("String[] default:  " + strArr[0]);   // null
    }
}
