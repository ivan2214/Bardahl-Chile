import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>['className']
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn('mx-auto max-w-screen-2xl', className)}>{children}</div>
}

export default Container
