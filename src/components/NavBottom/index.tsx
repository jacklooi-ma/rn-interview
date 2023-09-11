import { useAppContext } from "../../contexts/app";
import { Theme } from "../../theme";
import { Wrapper, Item, Icon } from "./styled";

const menus = [
  {
    id: Theme.Blue,
    color: "#0095ff",
    title: "蓝色"
  },
  {
    id: Theme.Purple,
    color: "#9000ff",
    title: "紫色"
  },
  {
    id: Theme.Green,
    color: "#64bc00",
    title: "绿色"
  },
  {
    id: Theme.Orange,
    color: "#ff8400",
    title: "橙色"
  }
]

export default function NavBottom() {
  const { activeTheme, changeTheme } = useAppContext();

  return (
    <Wrapper>
      {menus.map((item) => (
        <Item
          key={item.id}
          color={item.color}
          onClick={() => changeTheme(item.id)}
          active={item.id === activeTheme}
        >
          <Icon color={item.color} />
          {item.title}
        </Item>
      ))}
    </Wrapper>
  );
}
