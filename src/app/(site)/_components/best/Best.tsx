import Cta from '@/components/Cta/Cta'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import { PackageCheck, ShieldCheck, Star, Truck, WalletCards } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Best = () => {
    return (
        <MaxWidthWrapper>
            <main className='py-20 flex flex-col md:flex-row gap-10 md:gap-0 items-center w-full justify-between'>
                <section className='flex flex-col gap-20'>
                    <div className='flex gap-20'>
                        <article className='flex flex-col gap-5'>
                            <div className='w-full flex justify-start'>
                                <div className='rounded-full bg-green-100 h-20 w-20 flex items-center justify-center'>
                                    <WalletCards className='h-8 w-8' />
                                </div>
                            </div>
                            <div className='max-w-sm'>
                                <h3 className='text-lg font-semibold'>Easy payment all time</h3>
                                <p>Easy cash, card and online payment facility for quick shopping.</p>
                            </div>
                        </article>
                        <article className='flex flex-col gap-5'>
                            <div className='w-full flex justify-start'>
                                <div className='rounded-full bg-green-100 h-20 w-20 flex items-center justify-center'>
                                    <ShieldCheck className='h-8 w-8' />
                                </div>
                            </div>
                            <div className='max-w-sm'>
                                <h3 className='text-lg font-semibold'>Warrenty policy</h3>
                                <p>We proivde warrenty for all our products, so you can rest asured.</p>
                            </div>
                        </article>
                    </div>
                    <div className='flex gap-20'>
                        <article className='flex flex-col gap-5'>
                            <div className='w-full flex justify-start'>
                                <div className='rounded-full bg-green-100 h-20 w-20 flex items-center justify-center'>
                                    <PackageCheck className='h-8 w-8' />
                                </div>
                            </div>
                            <div className='max-w-sm'>
                                <h3 className='text-lg font-semibold'>Quality Assured</h3>
                                <p>Fully QA tested product built with latest technology.</p>
                            </div>
                        </article>
                        <article className='flex flex-col gap-5'>
                            <div className='w-full flex justify-start'>
                                <div className='rounded-full bg-green-100 h-20 w-20 flex items-center justify-center'>
                                    <Truck className='h-8 w-8' />
                                </div>
                            </div>
                            <div className='max-w-sm'>
                                <h3 className='text-lg font-semibold'>Home Delivery</h3>
                                <p>We provide home delivery service to your door step</p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className='flex flex-col gap-1 h-full'>
                    <div className='max-w-lg flex flex-col gap-4'>
                        <h2 className='font-bold text-6xl'>Why we,re best?</h2>
                        <p className='font-medium text-lg'>
                            we have 5000+ reviews and our customers trust on our quality product, if you order more than NPR. 80, 000 we will deliver for free.
                        </p>
                        <Link href="#contact" className='w-full'>
                            <Cta title={`Ask Now`} />
                        </Link>
                    </div>
                </section>
            </main>
        </MaxWidthWrapper>
    )
}

export default Best
