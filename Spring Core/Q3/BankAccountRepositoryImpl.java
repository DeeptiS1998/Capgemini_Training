package org.sc.q3;

import org.springframework.stereotype.Component;

@Component
public class BankAccountRepositoryImpl implements BankAccountRepository{
	 double initialBalance=100000;

		public double getBalance(long accountId) {
			System.out.println("Account balance is: "+initialBalance);
			return 0;
		}

		public double updateBalance(long accountId, double newBalance) {
			
			System.out.println("Account balance is: "+newBalance);
			return 0;
		}
}
