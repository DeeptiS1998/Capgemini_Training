package org.sc.q3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	 public static void main( String[] args )
	    {
	        @SuppressWarnings("resource")
	        ApplicationContext context = new ClassPathXmlApplicationContext("Q3.xml");
	        Controller b = (Controller)context.getBean("controller");
	        b.deposit(46595,10000);
	        b.withdraw(56686, 500);
	        b.getBalance(465232);
	    }
}
