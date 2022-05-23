import React from "react";
import icon from "../images/otbale.JPG";

export default function Header(){
    return (
        <header className="header">
            <img className="header-img" src={icon}  alt="icon" />
            <h2 className="header-title">大喜利画像 ジェネレーター</h2>
            <h4 className="header-project">誰でもバズる画像を作れちゃう！！</h4>
        </header>
    )
}