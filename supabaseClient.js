import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rqsaakjgmewqsofbwlxl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_fW-8tzyBfvYVnJX20Eu49A_Cxjs7eBU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
