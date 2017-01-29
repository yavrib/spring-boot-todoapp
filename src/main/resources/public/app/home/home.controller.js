class HomeController {
  constructor($state, TodoList) {
    this.todoList = [];
    this.TodoList = TodoList;
    this.todoListItem = {
      "id":"",
      "title":"",
      "description":"",
      "status":false,
      "date":""
    }
    this.$state = $state;
  }

  $onInit() {
    this.TodoList.getAllTodoListItems().then((response)=>{
      this.todoList = response.data
    })
  }
  goToEdit(id){
    this.$state.go("edit",{'id':id})
  }
  goToAdd(){
    this.$state.go("add")
  }
  deleteTodoListItem(id){
    this.TodoList.deleteTodoListItem(id).then((response)=>{
      console.log(response.data)
    })
  }
  updateStatusOfTodoListItem(todoListItem){
    todoListItem.status = !todoListItem.status;
    this.TodoList.updateStatusOfTodoListItem(todoListItem.id, todoListItem.status)
  }
}

export default HomeController;
