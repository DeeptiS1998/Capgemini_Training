package org.sc.q3;

import java.util.Scanner;

import org.springframework.stereotype.Component;

@Component
public class BankAccountServiceImpl implements BankAccountService 
{
	double withdrawAmount;
	double depositAmount;
	int initialBalance= 200000;
	public double withdraw(long accountId, double withdrawAmount) {
		
		System.out.println("The amount that is withdrawn is: "+withdrawAmount);
		return 0;
	}
	
	public double deposit(long accountId, double depositAmount) {
		
		System.out.println("The amount that is deposited is: "+depositAmount);
		return 0;
	}
	
	public double getBalance(long accountId) 
	{
		System.out.println("Enter: 1.Deposit \n 2.Withdrawl");
		Scanner sc= new Scanner(System.in);
		int choice = sc.nextInt();
		if(choice==1) {
			System.out.println("The amount in "+accountId+" after depositing "+depositAmount+" is: "+(initialBalance+depositAmount ) );}
		else
			System.out.println("The amount in "+accountId+" after with drwaing "+withdrawAmount+" is: "+(initialBalance-withdrawAmount ) );
		sc.close();
		return 0;
		
	}
	
	public boolean fundTransfer(long fromAccount, long toAccount, double amont) {
		return false;
	}
	

}