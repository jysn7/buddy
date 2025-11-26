"use client";

import { LegalSection } from "./LegalSection";

export const TermsOfService = () => {
  return (
    <div className="flex-1" id="terms">
      <h1 className="text-3xl font-medium text-white tracking-tight mb-2">Terms of Service</h1>
      <p className="text-zinc-500 text-sm mb-8">Last updated: October 24, 2023</p>

      <div className="space-y-8 text-zinc-400 text-sm leading-relaxed">
        <LegalSection
          title="1. Introduction"
          content='Welcome to Wise Study. By accessing or using our website, mobile application, or any other services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the Service.'
        />
        <LegalSection
          title="2. Use of Services"
          content="You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
        />
        <LegalSection
          title="3. Intellectual Property"
          content="The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Wise Study and its licensors. The Service is protected by copyright, trademark, and other laws."
        />
        <LegalSection
          title="4. Termination"
          content="We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
        />
      </div>
    </div>
  );
};
