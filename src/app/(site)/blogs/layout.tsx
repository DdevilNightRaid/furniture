import Navbar from '@/components/Navbar/Navbar'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import React from 'react'

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <MaxWidthWrapper>
            <Navbar />
            <main>
                {children}
            </main>
        </MaxWidthWrapper>
    )
}

export default layout