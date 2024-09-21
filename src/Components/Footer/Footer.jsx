import logo from "../../assets/Social_verb_logo.png"
import { FaFacebook , FaTwitter, FaLinkedinIn} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className="bg-black mt-9">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 max-w-6xl mx-auto text-white p-14">
                <div>
                    <div>
                        <img to="/" className="w-auto h-24" src={logo} alt="" />

                    </div>
                    <div className="text-2xl flex gap-3">
                        <p><FaFacebook /></p>
                        <p><FaTwitter /></p>
                        <p><FaLinkedinIn /></p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h1 className="text-2xl">Important Link</h1>
                    <div className="hover:underline">
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h1 className="text-xl">GET In Touch</h1>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <p><CiLocationOn /></p>
                            <p>Dhaka, Bangladesh , 1207</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><MdMarkEmailRead /></p>
                            <p>Dhaka, Bangladesh , 1207</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><FaPhoneVolume></FaPhoneVolume></p>
                            <p>Dhaka, Bangladesh , 1207</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;