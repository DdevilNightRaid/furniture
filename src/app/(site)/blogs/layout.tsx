import Footer from '@/components/Footer/Footer'
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
            <main className='py-5 md:py-10 max-xl:py-20'>
                {children}
            </main>
            <Footer />
        </MaxWidthWrapper>
    )
}

export default layout