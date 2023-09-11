import styled from "styled-components";
import { SCProps } from "../../theme";
import { NAV_BOTTOM_HEIGHT } from "../../lib/constants";


export const Wrapper = styled.div<SCProps>`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  height: ${NAV_BOTTOM_HEIGHT}px;
  box-shadow: 0px -6px 12px -10px ${({ theme }) => theme.core.base.shadow};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.core.bg.secondary};
`;

export const Item = styled.div<SCProps<{ color: string; active: boolean; }>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  ${({ theme, active }) => active &&
    `background-color: ${theme.core.bg.hover};`
  }
`;

export const Icon = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
`;