export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          youtube_playlist_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string
          youtube_playlist_id?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          youtube_playlist_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      watchletters: {
        Row: {
          id: string
          user_id: string
          video_url: string
          video_title: string
          video_transcript: string
          ai_summary: string
          status: 'processing' | 'completed' | 'failed' | 'no_video' | 'no_transcript'
          created_at: string
          sent_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          video_url?: string
          video_title?: string
          video_transcript?: string
          ai_summary?: string
          status?: 'processing' | 'completed' | 'failed' | 'no_video' | 'no_transcript'
          created_at?: string
          sent_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          video_url?: string
          video_title?: string
          video_transcript?: string
          ai_summary?: string
          status?: 'processing' | 'completed' | 'failed' | 'no_video' | 'no_transcript'
          created_at?: string
          sent_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      watchletter_status: 'processing' | 'completed' | 'failed' | 'no_video' | 'no_transcript'
    }
  }
}