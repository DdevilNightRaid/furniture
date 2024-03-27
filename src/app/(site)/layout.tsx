import Navbar from '@/components/Navbar/Navbar'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import React from 'react'

const SiteLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <main>
        {children}
        </main>
    </div>
  )
}

export default SiteLayout