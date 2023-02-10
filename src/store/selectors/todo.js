const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store,)?.taskList || [];

export const todoByIdSelector = (store) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
}

export const todosSelector = (store) => store.todo.taskList || [];