import { supabase } from './supabase'
import type { Database } from './database.types'

type Watchletter = Database['public']['Tables']['watchletters']['Row']
type WatchletterInsert = Database['public']['Tables']['watchletters']['Insert']
type WatchletterUpdate = Database['public']['Tables']['watchletters']['Update']

export async function createWatchletter(watchletter: WatchletterInsert) {
  const { data, error } = await supabase
    .from('watchletters')
    .insert(watchletter)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating watchletter:', error)
    throw error
  }
  
  return data
}

export async function getUserWatchletters(userId: string) {
  const { data, error } = await supabase
    .from('watchletters')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error getting user watchletters:', error)
    throw error
  }
  
  return data
}

export async function updateWatchletter(id: string, updates: WatchletterUpdate) {
  const { data, error } = await supabase
    .from('watchletters')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    console.error('Error updating watchletter:', error)
    throw error
  }
  
  return data
}

export async function getLatestWatchletter(userId: string) {
  const { data, error } = await supabase
    .from('watchletters')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
  
  if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
    console.error('Error getting latest watchletter:', error)
    throw error
  }
  
  return data
}