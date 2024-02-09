package com.example.travels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.travels.models.Expense;

@Repository
public interface ExpenseRepo extends CrudRepository<Expense, Long> {
	
	List<Expense> findAll();

}
