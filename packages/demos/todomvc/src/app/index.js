import { Module } from 'cerebral'
import * as sequences from './sequences'
import { id } from './providers'
import { router, storage } from './modules'

export default Module({
  state: {
    newTodoTitle: '',
    todos: {},
    filter: 'all',
    editingUid: null,
  },
  signals: {
    rootRouted: sequences.redirectToAll,
    newTodoTitleChanged: sequences.changeNewTodoTitle,
    newTodoSubmitted: sequences.submitNewTodo,
    todoNewTitleChanged: sequences.changeTodoTitle,
    todoNewTitleSubmitted: sequences.submitTodoTitle,
    removeTodoClicked: sequences.removeTodo,
    todoDoubleClicked: sequences.editTodo,
    toggleAllChanged: sequences.toggleAllChecked,
    toggleTodoCompletedChanged: sequences.toggleTodoCompleted,
    todoNewTitleAborted: sequences.abortEdit,
    clearCompletedClicked: sequences.clearCompletedTodos,
    filterClicked: sequences.changeFilter,
  },
  providers: {
    id,
  },
  modules: {
    router,
    storage,
  },
})
