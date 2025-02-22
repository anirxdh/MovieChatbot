// Accessing environment variables in Vite
const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

if (!openaiApiKey) throw new Error("OpenAI API key is missing or invalid.");
if (!supabaseApiKey) throw new Error("Supabase API key is missing or invalid.");
if (!supabaseUrl) throw new Error("Supabase URL is missing or invalid.");

// Initialize OpenAI
import OpenAI from 'openai';
export const openai = new OpenAI({
  apiKey: openaiApiKey,
  dangerouslyAllowBrowser: true,
});

// Initialize Supabase
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(supabaseUrl, supabaseApiKey);