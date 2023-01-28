import React from 'react';
import 'App.css';

const Header = () =>
{
    return (
        <div className=" bg-yellow-50 flex justify-between px-35 py-5">
        <div className="flex flex-row items-center">
            <img className="img" src={require("./logo.png")} alt=""></img>
            <span className="text-red-700 text-4xl">印石這樣刻崗好</span>
        </div>
        <div className="flex flex-row items-center">
            <button className="btn">登入</button>
            <button className="btn">註冊</button>
        </div>
    </div>
    );
};

export default Header;
