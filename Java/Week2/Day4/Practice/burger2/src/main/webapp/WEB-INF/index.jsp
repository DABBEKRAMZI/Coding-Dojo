<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tacos</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">
		<h1>Book Store</h1>
		<!-- 		Display all Books -->
		${allBooks  }
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Restaurant Name</th>
					<th>Rating</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allBurgers }" var="oneBurge">
					<tr>
						<td>${oneBurge.id}</td>
						<td>${oneBurge.name}</td>
						<td>${oneBurge.restaurant}</td>
						<td>${oneBurge.rating}</td>
						<td><a href="/burgers/edit/${oneBurge.id }">Edit</a>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<hr>
		<!-- 		Create a Book Form -->
		<h1>Add New Burger</h1>
		<form:form action="/create" method="post" modelAttribute="burger">
			<form:errors path="*" />
			<p>
				<form:label path="name">Name</form:label>

				<form:input path="name" />
			</p>
			<p>
				<form:label path="restaurant">Restaurant Name</form:label>

				<form:input path="restaurant" />
			</p>

			<p>
				<form:label path="rating">Rating</form:label>

				<form:input type="number" path="rating" />
			</p>

			<p>
				<form:label path="notes">Notes</form:label>
				<form:textarea path="notes" />
			</p>
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>

