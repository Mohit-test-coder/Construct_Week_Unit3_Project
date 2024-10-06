package Project_Construct_Week;

public class AutoboxingUnboxing {

    public static void main(String[] args) {
        // Autoboxing: Automatic conversion of primitive types to their wrapper class objects.
        // Unboxing: Automatic conversion of wrapper class objects back to primitive types.

        // Example of Autoboxing with an int value
        int primitiveInt = 10;  // Declare a primitive int
        Integer autoboxedInteger = primitiveInt;  // Autoboxing: primitive int is automatically converted to Integer
        System.out.println("Autoboxing Example:");
        System.out.println("Primitive int: " + primitiveInt);  // Output the primitive int
        System.out.println("Autoboxed Integer: " + autoboxedInteger);  // Output the autoboxed Integer

        // Example of Unboxing with an Integer object
        Integer autoboxedIntValue = 20;  // Declare an Integer object
        int unboxedInt = autoboxedIntValue;  // Unboxing: Integer object is automatically converted back to int
        System.out.println("\nUnboxing Example:");
        System.out.println("Autoboxed Integer: " + autoboxedIntValue);  // Output the autoboxed Integer
        System.out.println("Unboxed int: " + unboxedInt);  // Output the unboxed primitive int

        // Example of Autoboxing with a double value
        double primitiveDouble = 15.5;  // Declare a primitive double
        Double autoboxedDouble = primitiveDouble;  // Autoboxing: primitive double is automatically converted to Double
        System.out.println("\nAutoboxing Example with double:");
        System.out.println("Primitive double: " + primitiveDouble);  // Output the primitive double
        System.out.println("Autoboxed Double: " + autoboxedDouble);  // Output the autoboxed Double object

        // Example of Unboxing with a Double object
        Double autoboxedDoubleValue = 25.75;  // Declare a Double object
        double unboxedDouble = autoboxedDoubleValue;  // Unboxing: Double object is automatically converted back to double
        System.out.println("\nUnboxing Example:");
        System.out.println("Autoboxed Double: " + autoboxedDoubleValue);  // Output the autoboxed Double object
        System.out.println("Unboxed double: " + unboxedDouble);  // Output the unboxed primitive double
    }

}
