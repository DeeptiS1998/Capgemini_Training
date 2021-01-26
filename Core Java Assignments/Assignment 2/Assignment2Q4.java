package Assigment2;

// • If any class has any abstract method, you must declare the entire abstract class.

//abstract class
 abstract class AbstractClass {
	
	//abstract method
	public abstract int checkAdd();

	//non-abstract method
	public int CheckAdd2() {
		return 0;
	}
}

//• Abstract class can't be private.


//• Abstract class cannot be final.

 
//• Without having any abstract method, you can declare a class abstract.
abstract class AbstractClassWithoutAnyMethod {

}

//• We must either override all the abstract methods in the subclass when we extend an abstract class or declare the subclass as abstract.
class NonAbstractClass extends AbstractClass {

	public int checkAdd() {
		return 0;
	}

	public int CheckAdd2() {
		return 1;
	}

}

public class Assignment2Q4 {
	public static void main(String[] arg) {
		
		//• Abstract class cannot be instantiated.
		//AbstractClass myAbs = new AbstractClass();
	}
	
	
}