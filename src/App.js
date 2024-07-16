import "./App.scss";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GoogleAnalytics from "./utils.js/ganalytics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [leftBar,setLeftBar]=useState(false)
  const [rightBar,setRightBar]=useState(false)

    return (
        <>
            <GoogleAnalytics />
            <div className="body">
                <div className="body__main">
                    {" "}
                    <div className="body__left">
                        <div className="body__left__content" data-visibility={leftBar} onClick={()=>setLeftBar(!leftBar)}>
                            <LeftBar />
                        </div>
                        <AiOutlineMenu className="body__left__toggle" onClick={()=>setLeftBar(!leftBar)}/>
                    </div>
                    <div className="body__content">
                        <Home />
                    </div>
                    <div className="body__right">
                        
                        <div className="body__right__content"  data-visibility={rightBar}>
                        <RightBar setRightBar={setRightBar}/>
                        </div>
                        <AiOutlineMenu className="body__right__toggle" onClick={()=>setRightBar(!rightBar)}/>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
