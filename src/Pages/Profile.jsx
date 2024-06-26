import react from "react"
import { profile_banner_img } from "../Assets"

const Profile = () => {
    return (
        <section>
            <div className="relative">
                <img src={profile_banner_img} className="w-full h-auto" />
                <img src={profile_banner_img} className="absolute bottom-0 left-[50%] w-40 h-40 rounded-full border-8 border-white" />
            </div>
        </section>
    )
}

export default Profile