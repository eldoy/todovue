<template>
  <li v-if="mode == 'default'">
    <input type="checkbox" v-bind:checked="item.completed" v-on:change="handleCompleted" />
    <span v-bind:class="{completed: item.completed}">{{ item.desc }}</span>
    <span class="item-date">{{ item.date | date }}</span>
    <button v-on:click="handleEdit">Edit</button>
    <button v-on:click="handleDelete">Delete</button>
  </li>

  <li v-else-if="mode == 'edit'">
    <input type="text" v-model="item.desc" />
    <button v-on:click="handleSave">Save</button>
  </li>

  <li v-else="mode == 'delete'">
    Delete {{ item.desc }}?
    <button v-on:click="handleConfirm">Yes</button>
    <button v-on:click="handleCancel">No</button>
  </li>
</template>

<script>

export default {
  name: 'TodoItem',
  props: ['item', 'todo'],
  data: function() {
    return {
      mode: 'default'
    }
  },
  methods: {
    handleEdit: function() {
      this.mode = 'edit';
    },
    handleSave: function() {
      this.mode = 'default';
    },
    handleDelete: function() {
      this.mode = 'delete';
    },
    handleConfirm: function(event) {
      let index = this.todo.todos.indexOf(this.item);
      Vue.delete(this.todo.todos, index);
    },
    handleCancel: function() {
      this.mode = 'default';
    },
    handleCompleted: function() {
      this.item.completed = !this.item.completed;
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
