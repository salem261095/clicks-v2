import type {Site, Page,ContactDetails, Links } from "@/config/types";
import { siInstagram, siSnapchat, siBehance, siX } from "simple-icons/icons";

export const SITE: Site = {
    title: "نقرات للتسويق الرقمي",
    description: "وكالة تسويق رقمي سعودي",
    baseURL: "https://cliks.sa.com",
    bio: "   نحن وكالة تسويق سعودية رائدة في تقديم خدمات التسويق الإلكتروني. نسعى جاهدين لمساعدة شركائنا في تحقيق النجاح المستمر من خلال تقديم حلول تسويقية شاملة ومبتكرة تعزز نتائج مشاريعهم.",
    author: "علي البن صالح",
}

export const PORTFOLIO: Page = {
    title: "المشاريع",
    description: "معرض أعمالي في تصميم الجرافيك وتطوير الويب", 
    baseURL: "/portfolio",
}

export const SERVICES: Page = {
    title: "الخدمات",
    description: "خدمات التصميم والتطوير التي أقدمها", 
    baseURL: "/services",
}

export const BLOGS: Page = {
    title: "المدونة", 
    description: "مقالات وأفكار حول التصميم والتقنية",
    baseURL: "/blogs",
}

export const CONTACT: Page = {
    title: "تواصل معي", 
    description: "طرق التواصل والعمل معًا",
    baseURL: "/contact",
}


export const CONTACTS: ContactDetails = {
email: "contact@cliks.sa.com",
phone: "0504919709",
whatsapp: "966504919709",
whatsappText: "تواصل معي",
address: "الشرقية الخبر",
}

export const NAVLINKS: Links = [
    {
        text: "الرئيسية",
        href: "/",
        external: false
    },
     {
        text: "الخدمات",
        href: "#services",
        external: false 
    },
 {
        text: "المميزات",
        href: "#features",
        external: false 
    },
     {
        text: "تواصل",
        href: "/contact",
        external: false 
    },
]

export const SOCIALLINKS: Links = [
    {
        text: "Instagram",
        icon: siInstagram, 
        href: "https://instagram.com/cliks-sa", 
        ariaLabel: "See My profile on instagram",
        external: true
    },
    {
        text: "Snapchat",
        icon: siSnapchat,
        href: "https://Snapchat.com/cliks-sa",
        ariaLabel: "See My profile on Snapchat",
        external: true
    },
    {
        text: "Behance",
        icon: siBehance,
        href: "https://behance.net/cliks-sa",
        ariaLabel: "See My profile on Behance",
        external: true
    },
    {
        text: "X",
        icon: siX,
        href: "https://x.com/cliks-sa",
        ariaLabel: "check my tweets on X",
        external: true
    }
];