import styled from "styled-components";
import { SCProps } from "../../theme";
import { NAV_TOP_HEIGHT } from "../../lib/constants";

export const Wrapper = styled.div<SCProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background-color: ${({ theme }) => theme.core.bg.primary};
  color: ${({ theme }) => theme.core.text.primary};
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  z-index: 3;
  height: ${NAV_TOP_HEIGHT}px;
`;

export const MenuIcon = styled.div<SCProps>`
  .bar {
    width: 26px;
    height: 4px;
    background-color: ${({ theme }) => theme.core.text.primary};
    margin: 5px 0;
  }
`;

export const PageTitle = styled.div`
  position: absolute;  
  left: 50%;  
  transform: translateX(-50%);
  font-size: 1.5rem;
`;

export const MenuContent = styled.div<SCProps>`
  height: 100vh;
  background-color: ${({ theme }) => theme.core.bg.secondary};
`;

export const MenuWrapper = styled.div<SCProps<{ show: boolean }>>`
  z-index: 99;
  position: fixed;  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ show }) => show ? "block" : "none"};

  ${MenuContent} {
    width: ${({ show }) => show ? "180px" : "0"};
  }

  a {
    text-decoration: none;
  }
`;

export const MenuMask = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.core.base.ghost};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const MenuTitle = styled.h2<SCProps>`
  color: ${({ theme }) => theme.core.text.secondary};
  padding: 16px;
  margin: 0 0 30px;
`;

export const MenuItem = styled.div<SCProps<{ active: boolean }>>`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme, active }) => active ? theme.core.text.active : theme.core.text.tertiary};
  padding: 8px 16px;
  ${({ theme, active }) => active && `background-color: ${theme.core.bg.hover}`};
`;