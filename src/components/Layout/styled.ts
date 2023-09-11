import styled from "styled-components";
import { NAV_TOP_HEIGHT, NAV_BOTTOM_HEIGHT } from "../../lib/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;
`;

export const ChildWrapper = styled.div`
  padding: ${NAV_TOP_HEIGHT + 24}px 16px ${NAV_BOTTOM_HEIGHT + 24}px;
  position: relative;
`;