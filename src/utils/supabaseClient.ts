import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project details
const SUPABASE_URL = 'https://yzqpbsztaytlsoiqffja.supabase.co/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6cXBic3p0YXl0bHNvaXFmZmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMzQ0ODYsImV4cCI6MjA0NDcxMDQ4Nn0.vvN4MbmaY1sfE7lVB6HjSrChfReCdT6OlkpfzKcMF0M';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);