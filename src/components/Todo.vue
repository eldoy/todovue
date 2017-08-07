<template>
  <div id="app">
     <div className="todo">
       <h1>TODO list</h1>
       <input type="text" v-model="add">
       <button v-on:click="handleAdd">Add</button>
       <TodoList :todos="todos" :todo="this" />
     </div>
  </div>
</template>

<script>
import TodoList from './TodoList'
import Util from '../lib/util'

export default {
  name: 'todo',
  components: {
    TodoList
  },
  data: function() {
    return {
      add: '',
      todos: [
        {id: Util.fakeId(), desc: 'Hello world', date: new Date(), completed: false}
      ]
    }
  },
  methods: {
    handleAdd: function(){
      this.todos.unshift({
        id: Util.fakeId(), desc: this.add, date: new Date(), completed: false
      });
      this.add = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
