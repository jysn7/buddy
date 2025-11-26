"use client";

import { LegalSection } from "./LegalSection";

export const AcceptableUse = () => {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-medium text-white tracking-tight mb-2">Acceptable Use</h1>
      <p className="text-zinc-500 text-sm mb-8">Last updated: October 24, 2023</p>

      <div className="space-y-8 text-zinc-400 text-sm leading-relaxed font-light">
        <LegalSection title="1. Prohibited Activities" content="Users may not misuse the service, attempt unauthorized access, or disrupt the platform." />
        <LegalSection title="2. Content Responsibility" content="Users are responsible for content they input and must comply with applicable laws." />
      </div>
    </div>
  );
};
