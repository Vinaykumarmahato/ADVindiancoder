/**
 * Phase 14: Introduction to Arrays & Memory Architecture
 * Demo: Understanding Stack and Heap Memory behavior with normal variables vs Arrays.
 */
public class ArrayMemoryDemo {
    public static void main(String[] args) {
        System.out.println("=== 1. Separate Variables (No Array Connection) ===");
        
        // Stack holds references name1 and name2
        // Heap holds actual String objects "Vinu" and "Shah" separately with no connection between them.
        String name1 = "Vinu";
        String name2 = "Shah";

        System.out.println("Variable name1: " + name1);
        System.out.println("Variable name2: " + name2);
        System.out.println("Note: name1 and name2 are stored in separate rooms in Heap memory.");
        System.out.println("They do not know about each other and cannot communicate.");
        
        System.out.println("\n=== 2. Storing with Array (Structured Memory) ===");

        // Stack holds reference variable 'studentList' (stores heap memory address like 0x7a)
        // Heap allocates contiguous space for 3 String references
        String[] studentList = new String[3];

        // By default, since String is an object, indices are initialized to 'null'
        System.out.println("Default value at index 0 before assignment: " + studentList[0]);
        System.out.println("Default value at index 1 before assignment: " + studentList[1]);

        // Populating the Array elements using index numbers (0-based indexing)
        studentList[0] = "Vinu";
        studentList[1] = "Shah";
        studentList[2] = "Arjun";

        // Accessing elements
        System.out.println("\nAccessing values via Array Index:");
        System.out.println("Student at index 0: " + studentList[0]);
        System.out.println("Student at index 1: " + studentList[1]);
        System.out.println("Student at index 2: " + studentList[2]);

        System.out.println("\nMemory Insight:");
        System.out.println("- 'studentList' is a reference variable stored on the Stack.");
        System.out.println("- The whole Array object resides on the Heap at a single memory address.");
        System.out.println("- All elements are stored contiguously, allowing instant access via indexing!");
    }
}
