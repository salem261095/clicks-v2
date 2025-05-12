import type { SectionContent } from "./types"
import { CONTACTS, SITE } from "./const";

export const HeroSection: SectionContent = {
    title: "في سوق مزدحم .. الظهور الذكي هو الفرق",
    description: "نؤمن بقوة التسويق الرقمي في تحويل الأفكار إلى واقع ملموس ومساعدتك على       تحقيق طموحاتك.",
    baseURL: "HerSection",
    arialable: "Hero Section for Clicks Digital Marketing",
    ctaHref: CONTACTS.whatsapp,
    ctaText: "احجز استشارتك الآن"
};

export const CalltoAction: SectionContent = {
    title: " انت على بعد نقرات ",
    description: " نعمل مع أقسام التسويق والشركات الكبرى لتقديم حلول تسويقية مبتكرة، مخصصة، وشاملة، بالتعاون مع شركاء عالميين وفريق متخصص. ",
    baseURL: "#cta",
    arialable: " Call to action Section for Clicks Digital Marketing",
    ctaHref: CONTACTS.whatsapp,
    ctaText: "ابدأ رحلتا معنا الان"
}

export const SERVICE: SectionContent ={
    title: "خدماتنا",
    description: "استعرض خدمتنا المميزة.",
    baseURL: "#services",
    arialable: "Service section for Clicks Marketing"
}

export const FEATURE: SectionContent ={
    title: "مايميزنا",
    description: "في عالم قلَّ فيه الإبداع الحقيقي، تُقدم لكم Clicks للتسويق استراتيجيات مبتكرة تدفع بأعمالكم نحو آفاق غير مسبوقة، مستلهمةً رؤيتها من قيمٍ أصيلةٍ وأسسٍ راسخة.",
    baseURL: "#features",
    arialable: "Features section for Clicks Marketing"

}
export const FOOTER:SectionContent = {
    title: SITE.title,
    description: SITE.bio,
    baseURL: SITE.baseURL,
    arialable: "Footer section for Clicks Marketing"
}