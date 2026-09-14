import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ictrptcruxvcivbtdvwx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_po-D-7xcXZk93e8akUiwVA_7rubJJId';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
