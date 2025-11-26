
"use client";
import { AcceptableUse } from "@/components/legal/AcceptableUse";
import { LegalSidebar } from "@/components/legal/LegalSidebar";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";
import { TermsOfService } from "@/components/legal/TermsOfService";
import { useState, useRef, useEffect } from "react";


const policyItems = ["Terms of Service", "Privacy Policy", "Acceptable Use"];

export const PolicyView = () => {
  const [activeItem, setActiveItem] = useState("Privacy Policy");
  // No page-level animation

  const renderContent = () => {
    switch (activeItem) {
      case "Terms of Service":
        return <TermsOfService />;
      case "Privacy Policy":
        return <PrivacyPolicy />;
      case "Acceptable Use":
        return <AcceptableUse />;
      default:
        return null;
    }
  };

  return (
    <div id="policy-view" className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12 animate-enter">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950"></div>
        </div>
        <LegalSidebar items={policyItems} activeItem={activeItem} setActiveItem={setActiveItem} />
        {renderContent()}
      </div>
    </div>
  );
};

export default PolicyView;
