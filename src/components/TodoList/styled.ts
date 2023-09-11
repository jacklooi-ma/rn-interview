import styled from "styled-components";

export const Wrapper = styled.div`
  .rc-tree {
    .rc-tree-treenode {
      display: flex;
      align-items: center;
      .rc-tree-node-content-wrapper {
        display: flex;
        align-items: center;
        width: 100%:
      }
      .rc-tree-iconEle {
        background-image: none;
      }
    }
    .rc-tree-title {
      flex: 1;
    }
  }

  .item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Space = styled.div`
  margin: 30px; 0;
`;
