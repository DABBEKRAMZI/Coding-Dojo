<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Demo JSP</title>
          <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        
    </head>
<body>
<div class="p-6">
    <h1 class="text-red-400">Fruit Store</h1>
    <table > 
    <thead>
    <tr>
    <th>Name</th>
    <th>Price</th>
    </tr>
    
     </thead>
     <tbody>
     <c:forEach items="${ListFruits }" var="Fruit">
				<tr>
					
					<td>${Fruit.name}</td>
					<td>${Fruit.price}</td>
					
				</tr>
			</c:forEach>
     </tbody>
    </table>
    </div>
</body>
</html>

</html>