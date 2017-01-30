package com.sample;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sample.controller.ToDoListItemController;
import com.sample.model.ToDoListItem;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TodoApplicationServicesTest {
	@Autowired
	private ToDoListItemController todoListItemController;
	
	private ToDoListItem todoListItem = new ToDoListItem((long) 1, "Test title", "Test description", true, "2017/01/01 10:00");
	private ToDoListItem response = new ToDoListItem();
	private List<ToDoListItem> responses = new ArrayList<ToDoListItem>();

	@Test
	public void addItem() {
		try {
			response = todoListItemController.create(todoListItem);
			Assert.assertNotNull(response);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Test failed due to " + e.getCause().toString());
		}
	}
	
	@Test
	public void GetItems() {
		try {
			responses = todoListItemController.list();
			Assert.assertNotNull(responses);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Test failed due to " + e.getCause().toString());
		}
	}
	
	@Test
	public void GetItem() {
		Long id = (long) 1;
		try {
			response = todoListItemController.get(id);
			Assert.assertNotNull(response);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Test failed due to " + e.getCause().toString());
		}
	}
	
	@Test
	public void updateItem() {
		Long id = (long) 1;
		todoListItem = todoListItemController.get(id);
		todoListItem.setDescription("Description updated");
		try {
			response = todoListItemController.update(todoListItem.getId(), todoListItem);
			Assert.assertNotNull(response);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Test failed due to " + e.getCause().toString());
		}
	}
	
	@Test
	public void updateStatusOfItem() {
		try {
			Long id = (long) 1;
			todoListItem = todoListItemController.get(id);
			response = todoListItemController.updateStatus(todoListItem.getId(), false);
			Assert.assertNotNull(response);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Test failed due to " + e.getCause().toString());
		}
	}
	
	@Test
	public void deleteItem() {
		try {
			Long id = (long) 1;
			todoListItem = todoListItemController.get(id);
			todoListItemController.delete(todoListItem.getId());
			response = todoListItemController.get(todoListItem.getId());
			Assert.assertNull(response);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Test failed due to " + e.getCause().toString());
		}
	}
}
