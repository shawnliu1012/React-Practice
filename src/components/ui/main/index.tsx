import React from 'react';
import 'App.css';

const Main = () => {
    return (
        <div className="main">
        <div className="flex justify-center">
            <div className="mx-11 my-3.5 text-4xl hover:text-blue-500 cursor-pointer">假文</div>
            <div className="mx-11 my-3.5 text-4xl hover:text-blue-500 cursor-pointer">假文</div>
            <div className="mx-11 my-3.5 text-4xl hover:text-blue-500 cursor-pointer">假文</div>
            <div className="mx-11 my-3.5 text-4xl hover:text-blue-500 cursor-pointer">假文</div>
            <div className="mx-11 my-3.5 text-4xl hover:text-blue-500 cursor-pointer">假文</div>
        </div>
        <img className="container" src={require("./系統更新中.png")} alt="" ></img>
    </div>
    )
};

export default Main;