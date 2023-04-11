import { createClient } from "@supabase/supabase-js";

const URL = "https://qqhcnksxenfkfoqvvtbv.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaGNua3N4ZW5ma2ZvcXZ2dGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwOTE4MzksImV4cCI6MTk5NjY2NzgzOX0.eLUT8MJ5e8zAxovlLnneIKyUUP-3TsVT3wdULtmSKBg"

export const supabase = createClient(URL, API_KEY);