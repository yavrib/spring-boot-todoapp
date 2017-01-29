package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.model.ToDoListItem;

public interface ToDoListItemRepository extends JpaRepository<ToDoListItem, Long> {
	
}
