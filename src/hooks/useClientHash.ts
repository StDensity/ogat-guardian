"use client"

import { useEffect, useState } from "react"

export const useClientHash = () => {
  const [clientHash, setClientHash] = useState<string>("")

  useEffect(() => {
    const generateHash = () => {
      try {
        let hash = localStorage.getItem("client_hash")
        if (!hash) {
          hash = Math.random().toString(36).slice(2, 11)
          localStorage.setItem("client_hash", hash)
        }
        setClientHash(hash)
      } catch (error) {
        // Fallback for private browsing
        setClientHash(Math.random().toString(36).slice(2, 11))
      }
    }

    generateHash()
  }, [])

  return clientHash
}