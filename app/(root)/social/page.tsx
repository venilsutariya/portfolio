"use client";

import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";

const SocialPage = () => {
    const social = [
        {
            name: "Github",
            icon: FaGithub,
            href: "https://github.com/venilsutariya"
        },
        {
            name: "Twitter",
            icon: FaXTwitter,
            href: "https://twitter.com/SutariyaVenil"
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            href: "https://www.instagram.com/venilsutariya_/"
        },
        {
            name: "Mail",
            icon: BiLogoGmail,
            href: ""
        },
    ];

    const handleSocial = (name: string, href: string) => {
        if (name !== "Mail") {
            window.open(href, '_blank');
        } else {
            const email = "venilsutariya7@gmail.com";
            const subject = "";

            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

            // Open the default email client with a new email
            window.open(mailtoLink, "_blank");
        }
    }
    return (
        <div className="px-5 lg:px-20 flex gap-x-10 min-h-[72vh] justify-center items-center">
            <TooltipProvider>
                {social.map((social, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger>
                            <Button
                                variant={"outline"}
                                size={"icon"}
                                onClick={() => handleSocial(social.name, social.href)}
                            >
                                <social.icon size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{social.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </TooltipProvider>
        </div>
    );
}

export default SocialPage;