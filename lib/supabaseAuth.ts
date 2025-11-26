import { supabase } from "@/lib/supabaseClient";

// Sign up a new user
export async function signUp(
  email: string,
  password: string,
  first_name?: string,
  last_name?: string,
  avatar?: string
) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        avatar,
      },
    },
  });
}

// Sign in an existing user
export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

// Sign out the current user
export async function signOut() {
  return supabase.auth.signOut();
}

// Get the current session
export function getSession() {
  return supabase.auth.getSession();
}

// Get the current user
export function getUser() {
  return supabase.auth.getUser();
}

// Listen for auth state changes
export function onAuthStateChange(
  callback: (event: string, session: any) => void
) {
  return supabase.auth.onAuthStateChange(callback);
}
