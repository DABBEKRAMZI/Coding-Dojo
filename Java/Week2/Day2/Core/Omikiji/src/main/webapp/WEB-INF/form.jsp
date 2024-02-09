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
        <title>Demo JSP</title>
          <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        
    </head>
<body>
<div class="flex flex-col justify-center m-auto" >
    <h1>Send an Omikuji! </h1>
    <form action="/submit" method="post" class="flex flex-col p-3 mb-3 w-1/3 border-2 border-solid border-black-400">
     <label>Pick any number from 5 to 25</label>
     <input type="number" name="years" class="mb-3"/>
     <label>Enter the name of any city</label>
     <input type="text" name="city" class="mb-3"/>
     <label>Enter the name of any real person</label>
     <input type="text" name="person" class="mb-3"/>
     <label>Enter professional endeavor or hobby </label>
     <input type="text" name="profHobb" class="mb-3"/>
     <label>Enter any type of living thing:</label>
     <input type="text" name="type" class="mb-3"/>
     <label>Say something nice to someone:</label>
     <textarea rows="" cols="" name="description" class="mb-3"></textarea>
     <p>Send and show a friend </p>
     <button type="submit" class="bg-blue-300">send</button>
    </form>
    
    </div>
</body>
</html>

</html>