'use client'
import { MainNavMobile } from './MainNavMobile'

import Container from '../ui/container'
import Link from 'next/link'

import MainNav from './MainNav'
import { usePathname } from 'next/navigation'
import { type Route } from '@/types'

const Navbar = () => {
  const pathname = usePathname()

  const routes: Route[] = [
    {
      href: '/',
      label: 'Inicio',
      active: pathname === '/'
    },

    {
      href: '/products',
      label: 'Productos',
      active: pathname === '/products'
    },
    {
      href: '/tips',
      label: 'Consejos',
      active: pathname === '/tips'
    },
    {
      href: '/about',
      label: 'Sobre Nosotros',
      active: pathname === '/about'
    }
  ]

  return (
    <div className="sticky top-0 z-50 border-b bg-background">
      <Container>
        <div className="flex h-16 w-full items-center justify-between px-5 sm:px-6 md:px-8">
          <Link href="/">
            <div className="flex gap-x-2 items-center">
              <img width="30" height="40" src="flag-chile.png" />
              <p className="text-sm font-bold md:text-xl">Bardahl Chile</p>
            </div>
          </Link>
          <MainNav routes={routes} />
          <MainNavMobile routes={routes} />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
