import React from 'react';
import 'App.css';

const Main = () => {
    return (
        <div className="main">
        <div className="flex justify-center my-4">
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">人員介紹</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">作品集</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">年度活動</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">公司介紹</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">大事紀</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">會員專區</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">教育訓練</div>
            <div className="mx-11 my-4 text-xl hover:text-blue-500 hover:border-b-4 border-gray-600 cursor-pointer">留言區</div>
        </div>
        <img className="container" src={require("./系統更新中.png")} alt="" ></img>
    </div>
    )
};

export default Main;