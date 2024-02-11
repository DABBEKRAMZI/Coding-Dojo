package com.example.bookApi.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.example.bookApi.models.Book;
import com.example.bookApi.services.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {

private final BookService bookService ;
	
    public BookController(BookService bookService){
        this.bookService = bookService;
    }
    
    @GetMapping("")
	public List<Book> getAllBook(){
		
		List<Book> bookList = bookService.allBooks();
		
		return bookList;
	}
	
	@PostMapping("")
	public Book create(@RequestParam(value = "title") String title, 
			@RequestParam(value = "description") String description,
			@RequestParam(value = "language") String language, 
			@RequestParam(value = "numOfPages") Integer numOfPages) {
		
		Book newBook = new Book(title, description, language, numOfPages );
		
		return bookService.createBook(newBook);
	}
	
	@GetMapping("/{id}")
	public Book findOneBookById(@PathVariable("id") Long id) {
		return bookService.findBook(id);
	}
	
	@PutMapping("/{id}")
    public Book update(
    		@PathVariable("id") Long id, 
    		@RequestParam(value="title") String title, 
    		@RequestParam(value="description") String desc, 
    		@RequestParam(value="language") String lang,
    		@RequestParam(value="numOfPages") Integer numOfPages) {
        Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
        return book;
    }
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		bookService.deleteBook(id);	
	}
	
	
}
