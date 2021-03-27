package org.q6;

import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class Test 
{
    public static void main( String[] args ) throws SQLException
    {
    	AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
    	context.scan("com.mavin.SpringAssignment6");
		context.refresh();
		DBConnection dbConnection = context.getBean(DBConnection.class);
         Connection con = dbConnection.getConnection();
        System.out.println(con.getMetaData().getDatabaseProductName());
		System.out.println(con.getMetaData().getDatabaseProductVersion());
	
		context.close();

        
    }
}
