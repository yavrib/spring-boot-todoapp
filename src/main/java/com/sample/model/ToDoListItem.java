package com.sample.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TODOLIST")
public class ToDoListItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	String title;
	String description;
	Boolean status;
	String date;
	
	public ToDoListItem() {}
	
	public ToDoListItem(Long id, String title, String description, Boolean status, String date) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.date = date;
	}
	
	public void setId(Long id){
		this.id = id;
	}
	public Long getId(){
		return id;
	}
	public void setTitle(String title){
		this.title = title;
	}
	public String getTitle(){
		return title;
	}
	public void setDescription(String description){
		this.description = description;
	}
	public String getDescription(){
		return description;
	}
	public void setStatus(Boolean status){
		this.status = status;
	}
	public Boolean getStatus(){
		return status;
	}
	public void setDate(String date){
		this.date = date;
	}
	public String getDate(){
		return date;
	}
	
}
