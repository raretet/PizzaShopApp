import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://jozigbxwsexdcuwddjog.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvemlnYnh3c2V4ZGN1d2Rkam9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NDk5NzQsImV4cCI6MjAzMjAyNTk3NH0.CJXEg5Rq09Gtd0v3aqtBs_0BecDrr5Hf5zJxwdbGZUk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
