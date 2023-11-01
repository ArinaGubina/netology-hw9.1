import { Link, useLocation } from "react-router-dom";

interface MenuItem{
  path : string,
  title : string
}

interface MenuList{
  items : MenuItem[]
}

export default function Menu(props : MenuList) {
  const location = useLocation();
  const path = location.pathname;

  function isActive(pathItem : string){
    return (pathItem === path);
  }

  const menu = props.items;
  const menuView = menu.map((item, key) => {
    return (
      <Link key={key} className={isActive(item.path) ? 'menu__item menu__item-active' : 'menu__item'} to={item.path}>{item.title}</Link>
    )
  });

  return(
    <nav className="menu">{menuView}</nav>
  );
}