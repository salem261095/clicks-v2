import type { SimpleIcon } from 'simple-icons';

export type Page = {
    title: string
    description: string
    baseURL: string

}
export type Section = Page & {
    arialable: string
}
export type SectionContent = Section &{
ctaText?: string
ctaHref?: string
}
export interface Site extends Page {
    bio: string
    author?: string 
}

export type ContactDetails = {
    email: string
    phone: string
    whatsapp: string
    whatsappText: string
    address?: string 
}

export type Links = {
    text: string
    href: string
    external?: boolean 
    ariaLabel?: string 
    icon?: string | SimpleIcon;
}[]

export type Features ={
    text: string;
     description: string
     icon?: string;
}[]


