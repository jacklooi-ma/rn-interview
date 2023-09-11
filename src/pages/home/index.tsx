import { useState } from "react";
import { useAppContext } from "../../contexts/app";
import Layout from "../../components/Layout/Page";
import AddItemInput from "../../components/AddItemInput";
import TodoList from "../../components/TodoList";
import {
  Wrapper,
  NoItemWrapper
} from "./styled";


export const HomePage = () => {
  const { todos, addTodo } = useAppContext();
  const [step, setStep] = useState<number>(0);

  const onAddItem = (value: string) => {
    addTodo(Date.now().toString(), value);
  }

  return (
    <Layout>
      <Wrapper>
        {!todos.length ?
          <NoItemWrapper>
            {step === 0 &&
              <span onClick={() => setStep(1)}>
                + 新建一个事项
              </span>
            }
            {step === 1 &&
              <AddItemInput
                placeholder="输入事项名"
                onAddItem={onAddItem}
              />
            }
          </NoItemWrapper>
          :
          <TodoList />
        }
      </Wrapper>
    </Layout>
  )
}