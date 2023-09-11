import { ReactElement } from "react";
import { Todo, TodoState } from "../lib/models";

export function findNodeByKey(nodes: Todo[], key: string): Todo | null {
  if (!nodes.length) {
    return null;
  }

  for (const node of nodes) {
    if (node.key === key) {
      return node;
    }

    if (node.children) {
      const found = findNodeByKey(node.children, key);
      if (found) {
        return found;
      }
    }
  }
  
  return null;
}

export function updateChilrenByKey(nodes: Todo[], key: string, newChild: Todo[]): Todo[] {
  if (!nodes.length) {
    return nodes;
  }

  return nodes.map(node => {
    if (node.key === key) {
      if (node.children) {
        return { ...node, children: [...node.children, ...newChild] };
      }
      return { ...node, children: [...newChild] }    
    }

    if (node.children) {
      return { ...node, children: updateChilrenByKey(node.children, key, newChild) };
    }

    return node;
  });
}


export function updateTitleByKey(nodes: Todo[], key: string, newTitle: string | ReactElement): Todo[] {
  if (!nodes.length) {
    return nodes;
  }

  return nodes.map(node => {
    if (node.key === key) {
      return { ...node, title: newTitle };
    }

    if (node.children) {
      return { ...node, children: updateTitleByKey(node.children, key, newTitle) };
    }

    return node;
  });
}

export function updateStateByKey(nodes: Todo[], key: string, newState: TodoState): Todo[] {
  if (!nodes.length) {
    return nodes;
  }

  return nodes.map(node => {
    if (node.key === key) {
      return { ...node, state: newState };
    }

    if (node.children) {
      return { ...node, children: updateStateByKey(node.children, key, newState) };
    }

    return node;
  });
}
