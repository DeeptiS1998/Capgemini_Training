package org.q9;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test
{
    public static void main( String[] args )
    {

        ApplicationContext cap = new ClassPathXmlApplicationContext("q9.xml"); 
             
			Hello hw= (Hello)cap.getBean("helloworld");
             System.out.println(hw.hashCode());
             
         ((ConfigurableApplicationContext) cap).close();
 
    }
}