'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Code2, User, Briefcase, Send, FileText, Github, Linkedin, MailIcon } from 'lucide-react'
import Link from 'next/link'

// Portfolio Navigation Items
const navigation = [
    { name: 'Home', href: '/', icon: User },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Skills', href: '/skills', icon: Code2 },
  { name: 'Contact', href: '/contact', icon: Send },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll hone par navbar ka design badalne ke liye logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300  ${
      scrolled 
        ? 'bg-blue-400/30 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* --- LOGO / INITIALS --- */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group decoration-transparent no-underline">
            <div className="bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-blue-400 transition-colors">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-black">
              Click<span className="text-blue-400">sutra.</span>
            </span>
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Menu</span>
            <Bars3Icon aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>

        {/* --- DESKTOP NAVIGATION (Center) --- */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-black transition-colors relative group decoration-transparent no-underline"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* --- DESKTOP CTA (Right) --- */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          
          <Link 
  href="/contact" 
  className="flex items-center gap-2 px-6 py-2.5 bg-blue-400 text-white rounded-full text-sm font-bold hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 decoration-transparent no-underline"
>
  <MailIcon size={16} /> 
  Contact us
</Link>
        </div>
      </nav>

      {/* --- MOBILE MENU (Side Drawer) --- */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" /> 
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl decoration-transparent no-underline text-black" onClick={() => setMobileMenuOpen(false)}>
              Portfolio<span className="text-blue-600">.</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Menu band karein</span>
              <XMarkIcon aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>
          
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 flex items-center gap-4 rounded-xl px-4 py-4 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-all decoration-transparent no-underline"
                  >
                    <item.icon className="h-5 w-5 text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
              
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}