/**
 * Phase 14: Introduction to Arrays & Memory Architecture
 * Demo: Demonstrating all 5 methods/syntaxes of Array declaration and initialization in Java.
 */
public class ArraySyntaxDemo {
    public static void main(String[] args) {
        System.out.println("=== 5 Syntaxes of Arrays in Java ===");

        // --- METHOD 1: Only Declaration ---
        // Variable is declared, but no memory is allocated yet.
        int[] marks1; 
        // System.out.println(marks1); // Error: marks1 might not have been initialized
        System.out.println("Method 1: Only Declaration compiles successfully (int[] marks1).");


        // --- METHOD 2: Declaration + Size ---
        // Memory is allocated in Heap for 5 integers. Default value '0' is filled.
        int[] marks2 = new int[5];
        System.out.println("\nMethod 2: Declaration + Size (new int[5])");
        System.out.println("Length of marks2 array: " + marks2.length);
        System.out.println("Default value at index 0: " + marks2[0]);
        marks2[0] = 85;
        System.out.println("Updated value at index 0: " + marks2[0]);


        // --- METHOD 3: Declaration + Direct Value ---
        // Curly braces are used to specify values. Size is calculated automatically.
        int[] marks3 = {80, 40, 50, 95, 70};
        System.out.println("\nMethod 3: Declaration + Direct Value ({80, 40, 50, ...})");
        System.out.println("Length of marks3 array: " + marks3.length);
        System.out.println("Value at index 0: " + marks3[0]);
        System.out.println("Value at index 3: " + marks3[3]);


        // --- METHOD 4: Declaration + new Keyword + Direct Value ---
        // Uses 'new' keyword and curly braces. Size MUST NOT be specified in brackets [].
        int[] marks4 = new int[]{90, 75, 88};
        System.out.println("\nMethod 4: Declaration + new + Direct Value (new int[]{90, 75, 88})");
        System.out.println("Length of marks4 array: " + marks4.length);
        System.out.println("Value at index 1: " + marks4[1]);


        // --- METHOD 5: First Declaration, Later Initialization ---
        // Declare first, then assign memory.
        int[] marks5;
        marks5 = new int[3]; // Allocates memory
        marks5[0] = 99;
        System.out.println("\nMethod 5: First Declare, Later Initialize");
        System.out.println("Length of marks5 array: " + marks5.length);
        System.out.println("Value at index 0: " + marks5[0]);


        // --- DEFAULT VALUES DEMO ---
        System.out.println("\n=== Default Values for Different Data Types in Arrays ===");
        
        double[] doubleArray = new double[2];
        boolean[] booleanArray = new boolean[2];
        String[] stringArray = new String[2];

        System.out.println("Default value for double array: " + doubleArray[0]);      // Should be 0.0
        System.out.println("Default value for boolean array: " + booleanArray[0]);    // Should be false
        System.out.println("Default value for String array: " + stringArray[0]);      // Should be null
    }
}
