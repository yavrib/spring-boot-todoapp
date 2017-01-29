class TodoList {
  constructor($http,API_URL,$state) {
    this.API_URL = API_URL
    this.$http = $http
    this.API_PREFIX = "/todolistitems"
  }

  getAllTodoListItems(){
    let url = this.API_URL + this.API_PREFIX
    let config = {
      "Content-Type":"application/json"
    }
    return this.$http.get(url, config)
  }

  createTodoListItem(todoListItem){
    let url = this.API_URL + this.API_PREFIX
    let config = {
      "Content-Type":"application/json"
    }
    return this.$http.post(url, todoListItem, config)
  }

  getTodoListItem(id){
    let url = this.API_URL + this.API_PREFIX + "/" + id
    return this.$http.get(url)
  }

  updateTodoListItem(todoListItem){
    let url = this.API_URL + this.API_PREFIX + "/" + todoListItem.id
    let config = {
      "Content-Type":"application/json"
    }
    return this.$http.put(url, todoListItem, config)
  }

  deleteTodoListItem(id){
    let url = this.API_URL + this.API_PREFIX + "/" + id
    let config = {
      "Content-Type":"application/json"
    }
    return this.$http.delete(url, config)
  }

  updateStatusOfTodoListItem(id, status){
    let url = this.API_URL + this.API_PREFIX + "/" + id + "/" + status
    let config = {
      "Content-Type":"application/json"
    }
    return this.$http.put(url, config)
  }
}

TodoList.$inject = ['$http', 'API_URL','$state'];

export default TodoList;
