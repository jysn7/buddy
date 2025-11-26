"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { signUp } from "@/lib/supabaseAuth";
import { signInWithGoogle } from "@/lib/supabaseGoogleAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Aperture, ChevronLeft } from "lucide-react";

// Zod schema
const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupView() {
  const [loading, setLoading] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: SignupFormValues) => {
    setLoading(true);
    const { error } = await signUp(
      data.email,
      data.password,
      data.firstName,
      data.lastName
    );
    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Account created! Check your email to confirm.");
  };

  const handleGoogle = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    setLoading(false);
    if (error) toast.error(error.message);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center animate-enter overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-medium transition-colors z-20 group"
      >
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        Back
      </Link>

      <div className="relative z-10 w-full max-w-[340px] px-4">
        {/* Logo */}
        <div className="mx-auto w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-white/10 relative overflow-hidden">
          <Aperture className="w-6 h-6 text-black spin-slow z-10" />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white tracking-tight mb-2">Join bud-e</h1>
          <p className="text-zinc-500 text-sm">
            Already a pro?{" "}
            <Link href="/auth/signin" className="text-yellow-400 hover:underline transition-all">
              Sign in instead
            </Link>
          </p>
        </div>

        {/* Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* First + Last Name */}
          <div className="flex gap-3">
            <Field className="w-1/2">
              <FieldLabel className="text-white text-xs font-medium mt-1">First Name</FieldLabel>
              <Input
                {...register("firstName")}
                placeholder="First name"
                className={`input-dark text-white placeholder:text-zinc-600 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>
              )}
            </Field>

            <Field className="w-1/2">
              <FieldLabel className="text-white text-xs font-medium mt-1">Last Name</FieldLabel>
              <Input
                {...register("lastName")}
                placeholder="Last name"
                className={`input-dark text-white placeholder:text-zinc-600 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>
              )}
            </Field>
          </div>

          {/* Email */}
          <Field>
            <FieldLabel className="text-white text-xs font-medium mt-1">Email</FieldLabel>
            <Input
              {...register("email")}
              placeholder="name@university.edu"
              className={`input-dark text-white placeholder:text-zinc-600 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
            )}
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel className="text-white text-xs font-medium mt-1">Password</FieldLabel>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className={`input-dark text-white placeholder:text-zinc-600 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>
            )}
          </Field>

          {/* Confirm Password */}
          <Field>
            <FieldLabel className="text-white text-xs font-medium mt-1">Confirm Password</FieldLabel>
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm password"
              className={`input-dark text-white placeholder:text-zinc-600 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>
            )}
          </Field>

          {/* Sign Up Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:text-white duration-300 hover:bg-yellow-400 text-black font-semibold cursor-pointer py-2.5 rounded-lg transition-colors text-sm mt-1"
          >
            {loading ? "Creating account..." : "Get Started Free"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-900"></div>
          </div>
          <div className="relative flex justify-center text-[10px] text-zinc-600 uppercase">
            <span className="bg-zinc-950/40 px-2">or continue with</span>
          </div>
        </div>

        {/* Google */}
        <Button
          onClick={handleGoogle}
          className="w-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white text-sm font-medium py-2.5 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </Button>
      </div>
    </div>
  );
}
