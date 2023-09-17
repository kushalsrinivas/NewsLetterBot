import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://jtmmyaessuezbacyyuqx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bW15YWVzc3VlemJhY3l5dXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2Mjg0NjQsImV4cCI6MjAwNjIwNDQ2NH0.WvzjXcEV4aNEb1KXCGrqefcdDYjKJW_8XAaLKqMwh50",
  { auth: { persistSession: false } }
);

export const cdn =
  "https://jtmmyaessuezbacyyuqx.supabase.co/storage/v1/object/public/Videos/";
