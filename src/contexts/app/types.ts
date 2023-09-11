import { ReactElement } from "react";
import { Theme, ThemeProps } from "../../theme/types";
import { Todo } from "../../lib/models";

export interface IAppContext {
  todos: Todo[];
  theme: ThemeProps;
  activeTheme: Theme;
  changeTheme: (theme: Theme) => void;
  addTodo: (key: string, title: string | ReactElement) => void;
  addChildTodo: (parentKey: string, key: string, title: string | ReactElement) => void;
  removeTodo: (key: string) => void;
  completeTodo: (key: string) => void;
}