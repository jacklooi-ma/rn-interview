import styled, { keyframes } from "styled-components";
import { SCProps } from "../../theme";

export type Props = {
  primary?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  fetching?: boolean;
  disabled?: boolean;
  primaryGradient?: boolean;
  height?: string;
  width?: string;
  margin?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonWrapper = styled.button<SCProps<Props>>`
  background-color: ${(props) => props.theme.control.primary.bg};
  color: ${(props) => props.theme.core.text.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  border: 0;
  border-radius: ${(props) =>
    props.rounded ? "100px" : "0"};
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "35px"};
  min-width: 60px;
  cursor: pointer;
  position: relative;
  transition: background-color 250ms;
  padding: 2px 14px;
  margin: ${(props) => props.margin ?? "0"};

  &[disabled]:hover {
    cursor: default;
  }

  &:hover:enabled {
    background: ${(props) => props.theme.control.primary.bgHover};
  }

  ${(props) =>
    props.primary &&
    `
    background-color: ${props.theme.control.primary.bg};
    color: ${props.theme.core.text.primary};

    &:disabled {
      ${props.fetching && `background-color: ${props.theme.control.primary.bg};`}
    }
  `}

  ${(props) =>
    props.secondary &&
    `
    background-color: ${props.theme.control.secondary.bg};
    color: ${props.theme.core.text.primary};

    &:hover:enabled {
      background: ${props.theme.control.secondary.bgHover};
    }

    &:disabled {
      ${props.fetching && `background-color: ${props.theme.control.secondary.bg};`}
    }
  `}

  ${(props) =>
    props.tertiary &&
    `
    background-color: ${props.theme.control.tertiary.bg};
    color: ${props.theme.core.text.primary};

    &:hover:enabled {
      background: ${props.theme.control.tertiary.bgHover};
    }

    &:disabled {
      ${props.fetching && `background-color: ${props.theme.control.tertiary.bg};`}
    }
  `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  animation: ${rotate} 2s linear infinite;
`;