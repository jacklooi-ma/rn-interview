import { ReactElement } from "react";

export enum TodoState {
  Completed = "completed",
  InCompleted = "incompleted"
}

export interface Todo {
  title: string | ReactElement;
  key: string;
  isLeaf?: boolean;
  children?: Todo[];
  state: TodoState;
}