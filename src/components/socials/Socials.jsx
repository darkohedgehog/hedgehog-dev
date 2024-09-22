import Link from "next/link";
import {FaInstagram} from "react-icons/fa";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import { SiGithub } from "react-icons/si";



const Socials = () => {
    return (
      <div className="flex items-center gap-x-5 text-lg">
        <Link href={"https://github.com/darkohedgehog"} target="blank" className="hover:text-accent transition-all duration-300" prefetch={true}>
        <SiGithub className="w-4 h-4" />
        </Link>
        <Link href={"https://www.instagram.com/hedgehog_web_developer/"} target="blank" className="hover:text-accent transition-all duration-300" prefetch={true}> 
        <FaInstagram className="w-4 h-4"  />
        </Link>
        <Link href={"mailto:zivic.darko79@gmail.com"} className="hover:text-accent transition-all duration-300">
        <AiOutlineMail className="w-4 h-4"  />
        </Link>
        <Link href={"tel:+385955074922"} className="hover:text-accent transition-all duration-300">
        <AiOutlinePhone className="w-4 h-4"  />
        </Link>

      </div>
    );
  };
  
  export default Socials;