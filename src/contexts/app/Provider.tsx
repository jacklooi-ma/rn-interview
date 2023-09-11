import { PropsWithChildren, ReactElement, useEffect, useMemo, useState } from "react";
import { AppContext } from "./Context";
import { useTheme } from "../../theme";
import { Todo, TodoState } from "../../lib/models";
import { localStorageService, LocalStorageService } from "../../lib/services/storage";
import { updateChilrenByKey } from "../../utils/tree";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { theme, activeTheme, changeTheme } = useTheme();
  const [todos, setTodos] = useState<Todo[]>([]);

  const addChildTodo = (parentKey: string, key: string, title: string | ReactElement) => {
    const child = [{ key, title, state: TodoState.InCompleted }];
    const newTodoList = updateChilrenByKey(todos, parentKey, child);
    setTodos(newTodoList);
    localStorageService.set(LocalStorageService.TODO_LIST, newTodoList);
  }

  const addTodo = (key: string, title: string | ReactElement) => {
    const newTodoList = [...todos, { key, title, state: TodoState.InCompleted }];
    setTodos(newTodoList);
    localStorageService.set(LocalStorageService.TODO_LIST, newTodoList);
  }

  const removeTodo = (key: string) => {

  }

  const completeTodo = (key: string) => {
    
  }

  useEffect(() => {
    const todoList = localStorageService.get<Todo[]>(LocalStorageService.TODO_LIST);
    if (todoList) {
      setTodos(todoList);
    }
  }, []);

  const contextValue = useMemo(() => {
    return {
      todos,
      theme,
      activeTheme,
      changeTheme,
      addTodo,
      addChildTodo,
      removeTodo,
      completeTodo
    }
  },
    [
      todos,
      theme,
      activeTheme,
      changeTheme,
      addTodo,
      addChildTodo,
      removeTodo,
      completeTodo
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}