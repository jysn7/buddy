"use client";

import { LegalSection } from "./LegalSection";

export const PrivacyPolicy = () => {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-medium text-white tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-zinc-500 text-sm mb-8">Last updated: October 24, 2023</p>

      <div className="space-y-8 text-zinc-400 text-sm leading-relaxed ">
        <LegalSection
          title="1. Data Collection"
          content="We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, and study habits data."
        />
        <LegalSection
          title="2. Usage of Data"
          content="We use the information we collect to operate, maintain, and improve our Services, such as to personalize the study schedules, provide customer support, and send you technical notices."
        />
        <LegalSection
          title="3. Data Security"
          content="We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction."
        />
      </div>
    </div>
  );
};
