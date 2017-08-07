<template>
  <ul class="todo-list">
    <TodoItem v-for="item in todos" :item="item" :key="item.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: ['todos', 'todo']
}
</script>

<style scoped>

</style>
