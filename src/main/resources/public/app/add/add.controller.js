class AddController {
  constructor($state, TodoList) {
    this.TodoList = TodoList;
    this.todoListItem = {
      "id":"",
      "title":"",
      "description":"",
      "status":false,
      "date":""
    }
  }

  $onInit() {

  }
  createTodoListItem(todoListItem){
    todoListItem.date = Date.now();
    todoListItem.status = false;
    this.TodoList.createTodoListItem(todoListItem).then((response)=>{
      this.$state.go("home");
    })
  }
}

export default AddController;
