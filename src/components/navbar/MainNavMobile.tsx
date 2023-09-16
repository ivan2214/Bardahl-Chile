'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { type Route } from '@/types'

interface MainNavProps {
  routes: Route[]
}

export const MainNavMobile = ({ routes }: MainNavProps) => {
  return (
    <nav className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {routes.map((route) => (
            <DropdownMenuItem key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  route.active
                    ? 'text-black dark:text-white'
                    : 'text-muted-foreground'
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
