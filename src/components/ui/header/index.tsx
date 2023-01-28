import React from 'react';
import 'App.css';

const Header = () =>
{
    return (
        <div className=" bg-yellow-50 flex justify-between px-9 py-5">
        <div className="flex flex-row items-center">
            <img className="" src={require("./logo.png")} alt=""></img>
            <span className="text-red-700 text-4xl">印石這樣刻崗好</span>
        </div>
        <div className="flex flex-row items-center">
            <button className="btn mx-5 text-sm">登入</button>
            <button className="btn mx-5 text-sm">註冊</button>
        </div>
    </div>
    );
};

export default Header;
