import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials =[
    { icon: <FaGithub />, path: "https://github.com/jimohabdulmajeed" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abdulmajeed-okaka-jimoh-485327261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaYoutube  />, path: "https://youtube.com/@jimohabdulmajeed729?si=eAW1fj4yCZBQwwEH" },
    { icon: <FaTwitter  />, path: "https://x.com/Abdulmajeed6424?t=91wl02VANe5cEwx-0XH8kQ&s=09" },
  
];

const Socials = ({ containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) =>{
        return (
          <Link  key={index} href={item.path}
             className={iconStyles}>
             {item.icon}
            </Link>
        );

    })}
    </div>
  
};

export default Socials;