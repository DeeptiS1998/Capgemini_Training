package Assignment4;

public class Assignment4Q1 {
	
	MyFunc Add = (a, b) -> a + b;
	MyFunc Sub = (a, b) -> a - b;
	MyFunc Mul = (a, b) -> a * b;
	MyFunc Div = (a, b) -> a / b;
	
	public double addition(int num1, int num2) {
		return Add.cal(13, 5);
	}

	public double subtraction(int num1, int num2) {
		return Sub.cal(13, 5);
	}

	public double multiplication(int num1, int num2) {
		return Mul.cal(13, 5);
	}

	public double division(double num1, double num2) {
		return Div.cal(13, 5);
	}

	public static void main(String[] args) {

	}
}

interface MyFunc {
	double cal(double x, double y);
}