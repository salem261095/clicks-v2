import React from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { CONTACTS, SITE } from "@/config/const";

export default function FloatingWhatsAppBtn() {
  return (
    <FloatingWhatsApp
      phoneNumber={CONTACTS.whatsapp}
      accountName={SITE.title}
      statusMessage="يتم الرد خلال دقائق"
      placeholder="اطلب الخدمة .."
      chatMessage="السلام عليكم"
      avatar="/logo"
    />
  );
}
