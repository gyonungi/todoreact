const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store,)?.taskList || [];

export const todoByIdSelector = (store, id,value,completed) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.taskList;

  return {
    ...todoItem,
    id,
    value,
    completed,
  };
}

export const todosSelector = (store) =>
  todoIdsSelector(store).map((id,value) => todoByIdSelector(store, id,value));