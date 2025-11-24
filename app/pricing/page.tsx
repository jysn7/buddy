"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "AI study scheduling",
        "3 modules per timetable",
        "Basic progress tracking",
      ],
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      features: [
        "Unlimited modules",
        "Advanced AI optimization",
        "Export to CSV & Calendar",
        "Priority support",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-12">
      <h1 className="text-5xl font-medium text-white tracking-tight max-w-4xl leading-[1.1] mb-6">
        Pricing Plans
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
        Choose the plan that fits your study needs. Upgrade anytime to unlock full AI scheduling capabilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {plans.map((plan, i) => (
          <Card key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
            <p className="text-yellow-300 text-3xl font-bold">{plan.price}</p>
            <ul className="flex flex-col gap-2 text-zinc-400">
              {plan.features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
            <Button className="mt-auto bg-yellow-300 hover:bg-yellow-400 text-zinc-950 rounded-full">
              Choose {plan.name}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
