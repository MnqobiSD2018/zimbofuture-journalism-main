
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ypoqmxruiibdnvmacqyf.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwb3FteHJ1aWliZG52bWFjcXlmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjM3MTg3OCwiZXhwIjoyMDcxOTQ3ODc4fQ.K-yIKCuXgqTv29pKFiqbI-VMBsL4PHHF4UJFlqMtBRk"

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY, 
);
