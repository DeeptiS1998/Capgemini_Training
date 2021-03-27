package org.sc.cg;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	 public static void main( String[] args )
	    {
	        @SuppressWarnings("resource")
			ApplicationContext context = new ClassPathXmlApplicationContext("q4.xml");
	        Controller b = (Controller)context.getBean("controller");
	        b.deposit(458516,20000);
	        b.withdraw(45383, 500);
	        b.getBalance(85244);
	    }
}