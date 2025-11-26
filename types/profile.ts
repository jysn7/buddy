// types/profile.ts
export interface Profile {
  id: string;
  username: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  plan: "free" | "student";
  created_at: string;
}
