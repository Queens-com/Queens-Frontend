import react from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { back2_svg } from "../Assets";

const AccountDeleted = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Navbar />
            <div className="flex flex-col items-center text-center pt-20 pb-40 mx-auto max-w-[20rem]" >
                <h1 className="text-3xl font-bold mb-4">Your Account has been deleted</h1>
                <p className="roboto font-semibold leading-tight text-lg text-label">We are sad to see you go <br/> We hope to see you again. {"<3"}</p>
                <button onClick={() => navigate('/')} className="flex items-center justify-center bg-black text-white rounded-full w-auto px-8 py-2 my-6">
                    <span>Go to Home</span>
                </button>
            </div>
            <Footer />
        </section>
    )
}

export default AccountDeleted;