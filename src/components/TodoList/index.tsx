import Tree from "rc-tree";
import { useAppContext } from "../../contexts/app";
import { findNodeByKey } from "../../utils/tree";
import AddItemInput from "../AddItemInput";
import { Wrapper, Space } from "./styled";
import "rc-tree/assets/index.css"
import { useState } from "react";

const STYLE = `
.rc-tree-child-tree {
  display: block;
}

.node-motion {
  transition: all .3s;
  overflow-y: hidden;
}
`;

const motion = {
  motionName: 'node-motion',
  motionAppear: false,
  onAppearStart: () => ({ height: 0 }),
  onAppearActive: (node: any) => ({ height: node.scrollHeight }),
  onLeaveStart: (node: any) => ({ height: node.offsetHeight }),
  onLeaveActive: () => ({ height: 0 }),
};

export default function TodoList() {
  const { todos, addTodo, addChildTodo } = useAppContext();
  const [inputKey, setInputKey] = useState<number>(0);
  const [selectNode, setSelectedNode] = useState<string[]>([]);
  const [showChildInput, setShowChildInput] = useState<boolean>(false);

  const onSelect = (curKey: any) => {
    const node = findNodeByKey(todos, curKey[0]);
    if (node) {
      setShowChildInput(true);
    } else {
      setShowChildInput(false);
    }
    setSelectedNode(curKey); 
  }

  const onAddItem = (value: string) => {
    addTodo(Date.now().toString(), value);
  }

  const onAddChildItem = (value: string) => {
    if (selectNode.length) {
      addChildTodo(selectNode[0], Date.now().toString(), value);
    }
  }

  const onCancel = () => {
    setInputKey(x => x + 1);
  }

  return (
    <Wrapper>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      {!showChildInput ?
        <AddItemInput
          placeholder="输入事项名"
          onAddItem={onAddItem}
        /> :
        <AddItemInput
          key={inputKey}
          placeholder="输入子层事项名"
          onAddItem={onAddChildItem}
          showRemove
          onCancel={onCancel}
        />
      }
      <Space />
      <Tree
        defaultExpandAll={false}
        motion={motion}
        treeData={todos}
        onSelect={onSelect}
      />
    </Wrapper>
  )
}