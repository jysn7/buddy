"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, Variants } from "framer-motion";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
    },
  },
};

export default function ContactView() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] bg-size-[16px_16px]  mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      <div className="geo-shape absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-zinc-900 to-transparent opacity-50"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-semibold text-white tracking-tight mb-6">
              Talk to us
            </h2>
            <p className="text-zinc-400 mb-8 font-light">
              Have a question about the algorithm? Need a team license? Or just want to say hi? We&#39;re here.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-300 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="text-xs text-zinc-500">hello@bud-e.app</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <MessageSquare className="w-4 h-4 text-zinc-300 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Support</div>
                  <div className="text-xs text-zinc-500">Live Chat (Mon-Fri)</div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">HQs</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white text-sm font-medium">South Africa</p>
                  <p className="text-zinc-600 text-xs">Gauteng</p>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">East Rand</p>
                  <p className="text-zinc-600 text-xs">Kempton Park</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 backdrop-blur-sm">

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">

                  <Field>
                    <Label className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                      First Name
                    </Label>
                    <Input
                      {...form.register("firstName")}
                      placeholder="Jane"
                      className="bg-zinc-800 text-white placeholder:text-zinc-700 text-sm rounded-lg px-3 py-2"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </Field>

                  <Field>
                    <Label className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                      Last Name
                    </Label>
                    <Input
                      {...form.register("lastName")}
                      placeholder="Doe"
                      className="bg-zinc-800 text-white placeholder:text-zinc-700 text-sm rounded-lg px-3 py-2"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </Field>
                </div>

                <Field>
                  <Label className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                    Email
                  </Label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="jane@university.edu"
                    className="bg-zinc-800 text-white placeholder:text-zinc-700 text-sm rounded-lg px-3 py-2"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <Label className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                    Message
                  </Label>
                  <Textarea
                    {...form.register("message")}
                    rows={4}
                    placeholder="How can we help?"
                    className="bg-zinc-800 max-h-[255px] text-white placeholder:text-zinc-700 text-sm rounded-lg px-3 py-2"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </Field>

                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-white hover:bg-yellow-400 text-zinc-950 font-bold py-2 rounded-lg transition-all mt-2 text-xs"
                >
                  Send Message
                </Button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
