import React from 'react';
import 'App.css';



const Footer = () => {
    return (
        <div className="bg-gray-200 flex justify-between">
        <div className="">
            <div className="">
                <div className="footer-title">社群</div>
                <a className="text-blue-500" href="">Facebook</a>
                <a className="text-blue-500" href="">Instagram</a>
                <a className="text-blue-500" href="">Twitter</a>
            </div>
            <div className="">
                <div className="footer-title">幫助</div>
                <a className="text-blue-500" href="">常見問答</a>
                <a className="text-blue-500" href="">使用條款</a>
                <a className="text-blue-500" href="">隱私權政策</a>
            </div>
            <div className="">
                <div className="footer-title">關於</div>
                <a className="text-blue-500" href="">關於我們</a>
                <a className="text-blue-500" href="">商標資源</a>
                <div className="trademark">©sunggang</div>
            </div>
        </div>
        <div className="">
            <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            </button>
        </div>
    </div>
    )

}

export default Footer;
