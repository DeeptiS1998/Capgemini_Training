<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  

		<h1>Add New Employee</h1>
       <form:form method="post" action="save">  
      	<table >  
         <tr>  
          <td>Employee Name : </td> 
          <td><form:input path="name"  /></td>
         </tr>  
         <tr>  
          <td>Employee Department :</td>  
          <td><form:input path="department" /></td>
         </tr> 
         <tr>  
          <td>Employee Designation :</td>  
          <td><form:input path="designation" /></td>
         </tr> 
           <tr>  
          <td>Employee Salary :</td>  
          <td><form:input path="salary" /></td>
         </tr> 
         <tr>  
          <td> </td>  
          <td><input type="submit" value="Save" /></td>  
         </tr>  
        </table>  
       </form:form>  