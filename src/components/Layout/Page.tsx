import { PropsWithChildren } from "react";
import HeaderPage from "../Header/Page";
import FooterNav from "../NavBottom";
import {
  Wrapper,
  Content,
  ChildWrapper
} from "./styled";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Content>
        <HeaderPage />
        <ChildWrapper>
          {children}
        </ChildWrapper>
        <FooterNav />
      </Content>
    </Wrapper>
  );
}