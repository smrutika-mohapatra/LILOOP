import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Home/index";
import Productpage from "../product";
import About from "../About Us";
import Buyback from "../Buyback";
import Contact from "../Contact";



function ScreenRoutes() {
    return (
        <>
            {/* <h1>Hello Routes</h1> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/productpage" element={<Productpage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/buyback" element={<Buyback/>}/>
                    <Route path="/contact" element={<Contact/>}/>

                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default ScreenRoutes;