package org.q8;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test
{
    public static void main( String[] args )
    {

        ApplicationContext cap = new ClassPathXmlApplicationContext("q8.xml"); 
             
			@SuppressWarnings("unused")
			Hello hw= (Hello)cap.getBean("helloworld");
             
         ((ConfigurableApplicationContext) cap).close();
 
    }
}