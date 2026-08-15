import {
    Code2,
    Layers,
    Mail,
    Palette,
    Server,
    Sparkles,
    Wrench,
    Brain,
    type LucideIcon,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolioData";
import projSmartcity from "@/assets/smart-city.avif";
import projEcommerce from "@/assets/Ecommerce.avif";
import projLumia from "@/assets/lumia.avif";
import projTravel from "@/assets/travel.avif";
import projUniversity from "@/assets/university.avif";
import projInfra from "@/assets/infra.avif"

export const navLinks = [

    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export const projectImages: Record<string, string> = {
    smartcity: projSmartcity,
    ecommerce: projEcommerce,
    lumia: projLumia,
    //   ideabank: projIdeabank,
    travel: projTravel,
    university: projUniversity,
    infra: projInfra
};
export const skillIcons: Record<string, LucideIcon> = {
    Code2,
    Layers,
    Palette,
    Server,
    Sparkles,
    Wrench,
    Brain,
};

export const socials = [
    {
        icon: FaLinkedin,
        href: profile.linkedin, label: "LinkedIn"
    },
    { icon: FaGithub, href: profile.github, label: "GitHub" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];


