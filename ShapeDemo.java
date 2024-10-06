package Project_Construct_Week;

// Shape Interface
// This interface defines two abstract methods: area() and perimeter().
// Any class implementing this interface must provide implementations for these methods.
interface Shape {
    double area();    // Method to calculate the area of the shape
    double perimeter();  // Method to calculate the perimeter of the shape
}

// Circle Class implementing Shape Interface
// This class represents a Circle and provides implementations for the area and perimeter methods.
class Circle implements Shape {
    private double radius;  // Radius of the circle

    // Constructor to initialize the radius of the circle
    public Circle(double radius) {
        this.radius = radius;
    }

    // Implement area() method
    // Area of a circle is given by the formula π * r^2
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }

    // Implement perimeter() method
    // Perimeter (or circumference) of a circle is 2 * π * r
    @Override
    public double perimeter() {
        return 2 * Math.PI * radius;
    }

    // Method to display details of the circle, including radius, area, and perimeter
    public void display() {
        System.out.println("Circle:");
        System.out.println("Radius: " + radius);  // Display radius
        System.out.println("Area: " + area());    // Call area() and display the result
        System.out.println("Perimeter: " + perimeter());  // Call perimeter() and display the result
    }
}

// Rectangle Class implementing Shape Interface
// This class represents a Rectangle and provides implementations for the area and perimeter methods.
class Rectangle implements Shape {
    private double width;  // Width of the rectangle
    private double height; // Height of the rectangle

    // Constructor to initialize width and height of the rectangle
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    // Implement area() method
    // Area of a rectangle is width * height
    @Override
    public double area() {
        return width * height;
    }

    // Implement perimeter() method
    // Perimeter of a rectangle is 2 * (width + height)
    @Override
    public double perimeter() {
        return 2 * (width + height);
    }

    // Method to display details of the rectangle, including width, height, area, and perimeter
    public void display() {
        System.out.println("\nRectangle:");
        System.out.println("Width: " + width + ", Height: " + height);  // Display width and height
        System.out.println("Area: " + area());  // Call area() and display the result
        System.out.println("Perimeter: " + perimeter());  // Call perimeter() and display the result
    }
}

// Square Class implementing Shape Interface
// This class represents a Square and provides implementations for the area and perimeter methods.
class Square implements Shape {
    private double side;  // Side length of the square

    // Constructor to initialize the side of the square
    public Square(double side) {
        this.side = side;
    }

    // Implement area() method
    // Area of a square is side * side
    @Override
    public double area() {
        return side * side;
    }

    // Implement perimeter() method
    // Perimeter of a square is 4 * side
    @Override
    public double perimeter() {
        return 4 * side;
    }

    // Method to display details of the square, including side length, area, and perimeter
    public void display() {
        System.out.println("\nSquare:");
        System.out.println("Side: " + side);  // Display side length
        System.out.println("Area: " + area());  // Call area() and display the result
        System.out.println("Perimeter: " + perimeter());  // Call perimeter() and display the result
    }
}

// Triangle Class implementing Shape Interface
// This class represents a Triangle and provides implementations for the area and perimeter methods.
class Triangle implements Shape {
    private double a, b, c;  // Sides of the triangle

    // Constructor to initialize the three sides of the triangle
    public Triangle(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Implement area() method using Heron's formula
    // Heron's formula: sqrt(s * (s - a) * (s - b) * (s - c)), where s is the semi-perimeter
    @Override
    public double area() {
        double s = (a + b + c) / 2;  // Semi-perimeter
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    // Implement perimeter() method
    // Perimeter of a triangle is the sum of its sides: a + b + c
    @Override
    public double perimeter() {
        return a + b + c;
    }

    // Method to display details of the triangle, including the sides, area, and perimeter
    public void display() {
        System.out.println("\nTriangle:");
        System.out.println("Sides: " + a + ", " + b + ", " + c);  // Display the sides of the triangle
        System.out.println("Area: " + area());  // Call area() and display the result
        System.out.println("Perimeter: " + perimeter());  // Call perimeter() and display the result
    }
}

// Main Class
// This class contains the main method where we create objects of different shapes and display their details.
public class ShapeDemo {
    public static void main(String[] args) {
        // Creating Circle object
        Circle circle = new Circle(5.0);  // Circle with radius 5.0
        circle.display();  // Call the display method to show circle details

        // Creating Rectangle object
        Rectangle rectangle = new Rectangle(4.0, 6.0);  // Rectangle with width 4.0 and height 6.0
        rectangle.display();  // Call the display method to show rectangle details

        // Creating Square object
        Square square = new Square(4.0);  // Square with side 4.0
        square.display();  // Call the display method to show square details

        // Creating Triangle object
        Triangle triangle = new Triangle(3.0, 4.0, 5.0);  // Triangle with sides 3.0, 4.0, 5.0
        triangle.display();  // Call the display method to show triangle details
    }
}
