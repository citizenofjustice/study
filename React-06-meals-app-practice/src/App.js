import React, { useState, useEffect } from "react";
import MenuList from "./components/Menu/MenuList";
import Header from "./components/UI/Header/Header";

const DUMMY_MENULIST = [
  {
    title: "Суши",
    description: "Японская кухня",
    price: 250,
  },
  {
    title: "Том-ям",
    description: "Тайская кухня",
    price: 195,
  },
  {
    title: "Бургер",
    description: "Фаст-фуд",
    price: 220,
  },
  {
    title: "Каппучино",
    description: "Напитки",
    price: 120,
  },
];

function App() {
  const [menuList, setMenuList] = useState(DUMMY_MENULIST);
  
  useEffect(()=>{
    addMenuItem(menuList);
    
  }, [])
  
  const addMenuItem = menuItem => {
    // const Data = {
    //   ...menuItem,
    //   id: Math.random().toString(),
    // };
    // console.log(Data);
    setMenuList(prevMenuList => {
      return [menuItem, ...prevMenuList];
    });
  }
  
  return (
    <React.Fragment>
      <Header></Header>
      <MenuList items={menuList}></MenuList>
    </React.Fragment>
  );
}

export default App;
