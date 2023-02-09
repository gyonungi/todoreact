const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.taskList || [];

export const todoByIdSelector = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.taskList;

  return {
    ...todoItem,
    id,
  };
}

export const todosSelector = (store) =>
  todoIdsSelector(store).map((id) => todoByIdSelector(store, id));