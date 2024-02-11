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
   <div class="d-flex justify-content-between">
   <div>
   <h1>Welcome,${loggedUser.userName}</h1>
   <p>Books from everyone's shelves</p>
   </div>
   <div class="d-flex 	flex-column">
  	<a href="/logout">logout</a>
  	<a href="/books/new"> + Add a to my shelf</a>
   </div>
   </div>
		
	
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<a></a><th>Title</th>
					<th>Author Name</th>
					<th>Posted By</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allBooks }" var="oneBook">
					<tr>
						<td>${oneBook.id}</td>
						 <td><a href="/books/${oneBook.id}">${oneBook.title}</a></td>
						<td>${oneBook.author}</td>
						<td>${oneBook.poster.userName}</td>
						
						
					</tr>
				</c:forEach>
			</tbody>
		</table>
		</div>
</body>
</html>

