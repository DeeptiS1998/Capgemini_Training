<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  

		<h1>Edit Employee</h1>
       <form:form method="POST" action="/SpringMVCCRUDSimple/editsave">  
      	<table >  
      	<tr>
      	<td>Employee ID :</td>  
         <td><form:input type="text" path="id" readonly="readonly"/></td>
         </tr> 
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
          <td>Employee Salary:</td>  
          <td><form:input path="salary" /></td>
         </tr> 
         <tr>  
          <td> </td>  
          <td><input type="submit" value="Edit Save" /></td>  
         </tr>  
        </table>  
       </form:form>  