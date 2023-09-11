import { KeyboardEvent, useState } from "react";
import Button from "../Button";
import {
  Wrapper,
  Input
} from "./styled";

interface Props {
  placeholder: string;
  onSearch: (value: string) => void;
}

export default function SearchInput({
  placeholder,
  onSearch
}: Props) {
  const [value, setValue] = useState<string>("");

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  }

  return (
    <Wrapper>
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
      <Button tabIndex={0} onClick={() => onSearch(value)}>
        搜寻
      </Button>
    </Wrapper>
  );
}