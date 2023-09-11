import { Props, ButtonWrapper } from "./styled";


export default function Button(props: Props) {
  return (
    <ButtonWrapper {...props} disabled={props.disabled || props.fetching}>
      {props.children}
    </ButtonWrapper>
  )
};
