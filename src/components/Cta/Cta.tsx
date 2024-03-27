import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

interface CtaProps {
    title: string,
    className?: string,
}
const Cta = ({
    title,
    className
}: CtaProps) => {
  return (
    <Button
        className={cn("hover:bg-secondary", className)}
    >
        {title}
    </Button>
  )
}

export default Cta