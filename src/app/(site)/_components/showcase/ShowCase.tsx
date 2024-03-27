import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import React from 'react'
import TabDisplay from './TabDisplay'

const ShowCase = () => {
    return (
        <MaxWidthWrapper>
            <main className='flex flex-col items-center'>
                <section className='flex flex-col gap-2 items-center'>
                    <h2 className='max-w-4xl text-center text-5xl font-bold leading-[3.546rem]'>A huge collection of furniture products for your interior</h2>
                    <div className='flex flex-col gap-1 max-w-3xl text-center'>
                        <p>Modern working methods require modern office solution  using intelligent furniture.</p>
                        <p>Turning office landscape into city landscape</p>
                    </div>
                </section>
                <section className='pt-20'>
                    <TabDisplay />
                </section>
            </main>
        </MaxWidthWrapper>
    )
}

export default ShowCase
