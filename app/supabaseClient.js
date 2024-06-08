import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mzfjzdgvlmgmiuxrhrim.supabase.co'
const supabaseAnonKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Zmp6ZGd2bG1nbWl1eHJocmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTM0ODMsImV4cCI6MjAzMzM4OTQ4M30.CKxS_B0GhvhzsCrLilY8XHEO4tQN_WK2MuzXwJDkub0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})