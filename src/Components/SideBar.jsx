import React from "react";
import SidebarIcons from '../sideBarIcons.json';
import account from "../icons/account.png";

export default function SideBar(){

    return <div className="sidebarComponent">
    <div className="wrapper">
      <span className="title-element">Non-Stop Gram</span>
    </div>

    <div className="body-elements">
    {SidebarIcons.map(item => {
        return <div key={item.id} className="wrapper">
            <img src={item.icon} alt="" />
            <span className="body-title">{item.title}</span>
        </div>
    })}
        
        
    </div>

  </div>
}
