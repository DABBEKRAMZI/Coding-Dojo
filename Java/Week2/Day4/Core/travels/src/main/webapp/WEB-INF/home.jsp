<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tacos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
   <div class="container">
		<h1>Save Travels</h1>
		<!-- 		Display all Books -->
	
		<table class="table">
			<thead>
				<tr>
					
					<th>Expense</th>
					<th>Vendor</th>
					<th>Amount</th>
					
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allExpenses }" var="oneexpense">
					<tr>
						<td><a href="/expenses/${ oneexpense.id}">${oneexpense.name}</a></td>
						<td>${oneexpense.vendor}</td>
						<td>${oneexpense.amount}</td>
						
						<td class="d-flex gap-3"><a href="/expenses/edit/${oneexpense.id }" class="btn btn-info">Edit</a>
							<form action="/expenses/${oneexpense.id}" method="post">
								<input type="hidden" name="_method" value="Delete"> <input
									type="submit" value="Delete" class="btn btn-danger">
							</form></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<hr>
		<!-- 		Create a Book Form -->
		<form:form action="/expenses/create" method="post"
			modelAttribute="expense">
			
			<p>
				<form:label path="name">Expense Name</form:label> <br>
				<form:errors path="name" class="text-danger"/>
				<form:input path="name" />
			</p>
			<p>
				<form:label path="vendor">Vendor</form:label> <br>
				<form:errors path="vendor" class="text-danger"/>
				<form:input path="vendor" />
			</p>

			<p>
				<form:label path="amount">Amount</form:label> <br>
				<form:errors path="amount" class="text-danger"/>
				<form:input type="number" path="amount" />
			</p>
			
			<p>
				<form:label path="description">Description</form:label><br>
				<form:errors path="description" class="text-danger"/>
				<form:textarea path="description"/>
				
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>

