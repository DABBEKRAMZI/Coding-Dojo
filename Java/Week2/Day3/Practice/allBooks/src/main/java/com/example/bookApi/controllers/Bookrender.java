package com.example.bookApi.controllers;



import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.bookApi.models.Book;
import com.example.bookApi.services.BookService;

@Controller
public class Bookrender {

	private final BookService bookService;

	public Bookrender(BookService bookService) {
		this.bookService = bookService;
	}
	
	@GetMapping("/books/{id}")
	public String book(@PathVariable("id") Long bookId ,Model model) {
		
		Book searchbook =bookService.findBook(bookId);
		model.addAttribute("searchbook",searchbook);
		
		return "index.jsp";	
	}
	
	@GetMapping("/books")
	public String allbooks(Model model) {
		List<Book> allBooks = bookService.allBooks();
		model.addAttribute("allBooks",allBooks);
		return "allbooks.jsp";
	}
	
	
	
	

}
