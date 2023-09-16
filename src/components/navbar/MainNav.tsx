'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { type Route } from '@/types'

interface MainNavProps {
  routes: Route[]
}

const MainNav = ({ routes }: MainNavProps) => {
  return (
    <nav className="mx-6  hidden items-center space-x-4 md:flex md:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
