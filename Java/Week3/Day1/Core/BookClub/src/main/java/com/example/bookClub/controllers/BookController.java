package com.example.bookClub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.bookClub.models.Book;
import com.example.bookClub.models.User;
import com.example.bookClub.services.BookService;
import com.example.bookClub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class BookController {

	@Autowired
	BookService bookServ;
	@Autowired
	UserService userServ;

	@GetMapping("")
	public String home(Model model, HttpSession s) {

		// Guard route
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		User loggedUser = userServ.findUserById(userId);
		List<Book> allBooks = bookServ.allBooks();
		model.addAttribute("allBooks", allBooks);
		model.addAttribute("loggedUser", loggedUser);

		return "home.jsp";
	}

	@GetMapping("/new")
	public String newbook(@ModelAttribute Book book, HttpSession s) {
		// Guard route
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		return "newbook.jsp";

	}
	@PostMapping("/new")
	public String createnewbook(@Valid @ModelAttribute Book book,BindingResult result,HttpSession s ) {
		
		if (result.hasErrors())return "newbook.jsp";
		Long userId = (Long) s.getAttribute("user_id");
		User user=userServ.findUserById(userId);
		book.setPoster(user);
		bookServ.createBook(book);
		return "redirect:/books";
	}
	
	@GetMapping("/{id}")
	public String showone(@PathVariable("id") Long id, Model model,HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		model.addAttribute("userId",userId);
		Book book=bookServ.findBookById(id);
		model.addAttribute("book",book);
		return "showone.jsp";
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable("id") Long id, Model model,HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		bookServ.deleteBook(id);
		return "redirect:/books";
	}
	
	@GetMapping("/{id}/edit")
	public String edit(@PathVariable("id") Long id ,Model model) {
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book",selectedBook);
		return "edit.jsp";
	}
	

	@PutMapping("/{id}")
	public String edittt(@Valid @ModelAttribute Book book,BindingResult result,@PathVariable("id") Long id, Model model,HttpSession s) {
		if (result.hasErrors())return"edit.jsp";
		Long userId = (Long) s.getAttribute("user_id");
		User user=userServ.findUserById(userId);
		book.setPoster(user);
		bookServ.updateBook(book);
		return "redirect:/books";
	}
}
