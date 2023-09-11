import { useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import {
  Wrapper,
  Content,
  MenuIcon,
  PageTitle,
  MenuWrapper,
  MenuContent,
  MenuMask,
  MenuTitle,
  MenuItem
} from "./styled";

const menus = [
  {
    href: "/",
    id: "home",
    title: "所有事项"
  },
  {
    href: "/completed",
    id: "completed",
    title: "已完成事项"
  },
  {
    href: "/incompleted",
    id: "incompleted",
    title: "未完成事项"
  },
];

export default function HeaderPage() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Wrapper>
      <Content>
        <MenuIcon onClick={() => setShowNav(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </MenuIcon>
        <PageTitle>
          TODO
        </PageTitle>
        <MenuWrapper show={showNav}>
          <MenuMask onClick={() => setShowNav(false)} />
          <MenuContent>
            <MenuTitle>
              TODO
            </MenuTitle>
            {menus.map(item => (
              <Link to={item.href} search={{}} params={{}}>
                <MenuItem
                  key={item.id}
                  active={item.href === router.state.currentLocation.pathname}
                >
                  {item.title}
                </MenuItem>
              </Link>
            ))}
          </MenuContent>
        </MenuWrapper>
      </Content>
    </Wrapper>
  );
}