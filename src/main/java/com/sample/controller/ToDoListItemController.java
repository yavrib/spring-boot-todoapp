package com.sample.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sample.model.ToDoListItem;
import com.sample.repository.ToDoListItemRepository;

@RestController
@RequestMapping("/api/v1")
public class ToDoListItemController {
	@Autowired
	private ToDoListItemRepository toDoListItemRepository;
	
	//Get all list items
	@RequestMapping(value = "todolistitems", method = RequestMethod.GET)
	public List<ToDoListItem> list() {
		return toDoListItemRepository.findAll();
	}
	
	//Create a list item
	@RequestMapping(value = "todolistitems", method = RequestMethod.POST)
	public ToDoListItem create(@RequestBody ToDoListItem toDoListItem) {
		return toDoListItemRepository.saveAndFlush(toDoListItem);
	}
	
	//Get a list item
	@RequestMapping(value = "todolistitems/{id}", method = RequestMethod.GET)
	public ToDoListItem get(@PathVariable Long id) {
		return toDoListItemRepository.findOne(id);
	}
	
	//Update a list item
	@RequestMapping(value = "todolistitems/{id}", method = RequestMethod.PUT) 
	public ToDoListItem update(@PathVariable Long id, @RequestBody ToDoListItem toDoListItem) {
		ToDoListItem existingToDoListItem = toDoListItemRepository.findOne(id);
		BeanUtils.copyProperties(toDoListItem, existingToDoListItem);
		return toDoListItemRepository.saveAndFlush(existingToDoListItem);
	}
	
	//Delete a list item
	@RequestMapping(value = "todolistitems/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		ToDoListItem existingToDoListItem = toDoListItemRepository.findOne(id);
		toDoListItemRepository.delete(existingToDoListItem);
	}
	
	//Update item status
	@RequestMapping(value = "todolistitems/{id}/{status}", method = RequestMethod.PUT)
	public ToDoListItem updateStatus(@PathVariable Long id, @PathVariable Boolean status){
		ToDoListItem existingToDoListItem = toDoListItemRepository.findOne(id);
		existingToDoListItem.setStatus(status);
		return toDoListItemRepository.saveAndFlush(existingToDoListItem);
	}
}
