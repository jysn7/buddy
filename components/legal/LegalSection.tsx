"use client";

interface PolicySectionProps {
  title: string;
  content: string;
}

export const LegalSection = ({ title, content }: PolicySectionProps) => {
  return (
    <section>
      <h4 className="text-white font-medium text-base mb-2">{title}</h4>
      <p>{content}</p>
    </section>
  );
};
