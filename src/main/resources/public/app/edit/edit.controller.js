class EditController {
  constructor($state, TodoList, $stateParams) {
    this.TodoList = TodoList;
    this.todoListItem = {
      "id":"",
      "title":"",
      "description":"",
      "status":false,
      "date":""
    }
    this.$state = $state;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    let id = this.$stateParams.id
    this.getTodoListItem(id)
  }
  getTodoListItem(id){
    this.TodoList.getTodoListItem(id).then((response)=>{
        this.todoListItem = response.data;
    })
  }
  updateTodoListItem(todoListItem){
    this.TodoList.updateTodoListItem(todoListItem).then((response)=>{
        this.$state.go("home")
    })
  }
}

export default EditController;
