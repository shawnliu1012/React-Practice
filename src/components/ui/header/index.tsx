import React from 'react';
import 'App.css';

const Header = () =>
{
    return (
        <div className="bg-yellow-50 flex justify-between">
        <div className="logo">
            <img className="img" src={require("./logo.png")} alt=""></img>
            <span className="title">印石這樣刻崗好</span>
        </div>
        <div className="btn-part">
            <button className="btn">登入</button>
            <button className="btn">註冊</button>
        </div>
    </div>
    );
};

export default Header;
