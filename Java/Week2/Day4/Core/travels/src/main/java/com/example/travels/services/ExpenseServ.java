package com.example.travels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.travels.models.Expense;
import com.example.travels.repositories.ExpenseRepo;
@Service
public class ExpenseServ {
	
	@Autowired
	ExpenseRepo expenseRepo;

	// CREATE ONE EXPENSE
	public Expense create(Expense expense) {

		return expenseRepo.save(expense);

	}

	// GET ALL EXPENSES

	public List<Expense> allExpences() {
		return expenseRepo.findAll();
	}

	// READ ONE
	public Expense findExpenseById(Long id) {
		Optional<Expense> expense = expenseRepo.findById(id);
		if (expense.isPresent()) {
			return expense.get();
		} else {
			return null;
		}
	}

	// UPDATE
	public Expense updateExpense(Expense expense) {
		return expenseRepo.save(expense);
	}

	// DELETE
	public void deleteExpense(Long id) {
		expenseRepo.deleteById(id);
	}
	

}
