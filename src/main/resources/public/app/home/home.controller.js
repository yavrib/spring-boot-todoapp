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
      this.TodoList.getAllTodoListItems().then((response)=>{
       this.todoList = response.data
      })
    })
  }
  updateStatusOfTodoListItem(todoListItem){
    todoListItem.status = !todoListItem.status;
    this.TodoList.updateStatusOfTodoListItem(todoListItem.id, todoListItem.status).then((response)=>{
    	this.TodoList.getAllTodoListItems().then((response)=>{
    	  this.todoList = response.data
    	})
    })
  }
  openModal(){
    this.showModal = true;
  }
  closeModal(){
    this.showModal = false;
  }
  createTodoListItem(todoListItem){
    todoListItem.date = Date.now();
    todoListItem.status = false;
    this.TodoList.createTodoListItem(todoListItem).then((response)=>{
      this.TodoList.getAllTodoListItems().then((response)=>{
    	  this.todoList = response.data
          this.closeModal()
      })
    })
  }
}

export default HomeController;
