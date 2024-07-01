import react, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";
import { back2_svg } from "../Assets";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Navbar />
            <div className="flex flex-col items-center pt-20 pb-40 mx-auto max-w-[20rem]" >
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-3xl font-bold">Page Not Found</p>
                <button onClick={() => navigate('/')} className="flex items-center justify-center bg-black text-white rounded-full w-full py-2 my-6">
                    <img src={back2_svg} className="mr-3 "></img>
                    <span>Go Back</span>
                </button>
            </div>
            <Footer />
        </section>
    )
}

export default PageNotFound