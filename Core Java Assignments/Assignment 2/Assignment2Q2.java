package Assigment2;

import java.util.ArrayList;

class Manager extends Assignment2Q2 {
	@Override
	public int getSalary(int salary) {
		int incentive = 5000;
		int total = incentive + salary;
		return total;
	}
}

class Labour extends Assignment2Q2 {
	@Override
	public int getSalary(int salary) {
		int overtime = 500;
		int total = overtime + salary;
		return total;
	}
}

public class Assignment2Q2 {
	int salary = 10000;
	int totSal;

	public int getSalary(int salary) {
		return this.salary;
	}

	public int totalEmployeeSalary(ArrayList<Integer> employeeSalaries) {

		for (Integer i : employeeSalaries) {
			totSal += i;
		}
		return totSal;
	}

	public static void main(String[] args) {
	}
}