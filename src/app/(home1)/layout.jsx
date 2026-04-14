import React from 'react';
import Header1 from "@/Components/Header/Header1';
import Footer1 from "@/Components/Footer/Footer1';
// import ChatWidget from "../Chatbot/ChatWidget"

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            {children}
             {/* <ChatWidget /> */}
            <Footer1></Footer1>
        </div>
    );
};

export default DefalultLayout;