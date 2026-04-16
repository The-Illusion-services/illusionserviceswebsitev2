'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'

// Ensure this page is exported as a static file
export const dynamic = 'force-static'

type Inquiry = {
  _id: string
  name: string
  email: string
  projectType?: string
  budget?: string
  message: string
  receivedAt: string
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') setIsAuthenticated(true)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
      localStorage.setItem('admin_auth', 'true')
    } else {
      alert('Invalid key')
    }
  }

  useEffect(() => {
    if (!isAuthenticated || !isMounted) return

    const fetchInquiries = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "inquiry"] | order(receivedAt desc)
        `)
        setInquiries(data)
      } catch (error) {
        console.error('Failed to fetch inquiries:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInquiries()
  }, [isAuthenticated, isMounted])

  if (!isMounted) return null

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 p-6">
        <div className="w-full max-w-sm rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl">
          <h1 className="font-headline text-3xl text-stone-950">Admin Access</h1>
          <p className="mt-2 text-sm text-stone-500">Enter your secret key to proceed.</p>
          <form onSubmit={handleLogin} className="mt-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-stone-400"
              placeholder="••••••••"
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-stone-950 py-3 font-label text-[10px] uppercase tracking-widest text-white transition-hover hover:bg-stone-800"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-10 text-stone-950">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="font-label text-[11px] uppercase tracking-[0.2em] text-stone-500">Operations</p>
            <h1 className="mt-2 font-headline text-4xl text-stone-950">Inquiry Manager</h1>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem('admin_auth')
              setIsAuthenticated(false)
            }}
            className="rounded-full border border-stone-200 bg-white px-5 py-2 font-label text-[10px] uppercase tracking-widest text-stone-600 hover:bg-stone-50"
          >
            Lock
          </button>
        </header>

        <div className="grid gap-6">
          {loading ? (
            <p className="text-stone-400">Loading your inquiries...</p>
          ) : inquiries.length > 0 ? (
            inquiries.map((inquiry) => (
              <div key={inquiry._id} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-headline text-2xl text-stone-950">{inquiry.name}</h2>
                    <p className="text-stone-500">{inquiry.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-label text-[10px] uppercase tracking-widest text-stone-400">
                      {new Date(inquiry.receivedAt).toLocaleString()}
                    </p>
                    <div className="mt-2 flex gap-2">
                      {inquiry.projectType && (
                        <span className="rounded-full bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-600">
                          {inquiry.projectType}
                        </span>
                      )}
                      {inquiry.budget && (
                        <span className="rounded-full bg-stone-950 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          {inquiry.budget}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t border-stone-100 pt-6">
                  <p className="whitespace-pre-wrap leading-relaxed text-stone-800">
                    {inquiry.message}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-[2rem] border border-stone-200 bg-white text-center">
              <span className="material-symbols-outlined text-[48px] text-stone-200">mail</span>
              <p className="mt-4 text-stone-500">No inquiries yet. They will appear here as they come in.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
