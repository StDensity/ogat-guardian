'use client'

import { useEffect } from 'react'
import {supabase} from '@/app/lib/supabase'

export default function TestConnection() {
  useEffect(() => {
    supabase
      .from('comments')
      .select('*')
      .then(({ data, error }) => {
        if (error) console.error('Connection error:', error)
        else console.log('Connection successful:', data)
      })
  }, [])

  return null
}