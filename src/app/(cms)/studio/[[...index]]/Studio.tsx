'use client'

import { useState, useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../../sanity.config'

export default function Studio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div style={{ height: '100vh', width: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'sans-serif', color: '#666' }}>Loading Studio...</p>
      </div>
    )
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <NextStudio config={config} />
    </div>
  )
}
