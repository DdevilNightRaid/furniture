import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Why = () => {
    return (
        <div className='flex justify-center md:justify-end items-center py-20 md:py-10 flex-wrap md:flex-nowrap'>
            <article className='md:h-[22rem] md:mr-7 md:ml-2 max-xl:ml-0 py-7 md:py-0'>
                <div>
                    <h2 className='font-bold text-3xl max-w-xs'>Crafted  with excellent designed concept</h2>
                </div>
                <div className='flex gap-4 items-end font-medium text-lg'>
                    <span>Save Time and Money</span>
                    <Button className='rounded-full h-20 w-20 text-white hover:bg-secondary'>
                        <ArrowRight className='h-8 w-8 -rotate-45'/> 
                    </Button>
                </div>
            </article>
            <article className='flex flex-col p-7 w-[22rem] h-[22rem] bg-[rgba(12,126,128,0.33)]'>
                <Image
                    src="/assets/why/sofa.png"
                    alt="Chair Image"
                    height={527}
                    width={567}
                    className='object-fit h-[17rem] w-[18rem]'
                />
                <div className='flex font-bold flex-col h-full justify-end'>
                    <h3 className='text-xl'>Sofa Chair</h3>
                    <span>NPR. 5,500</span>
                </div>
            </article>
            <article className='flex flex-col p-7 w-[22rem] h-[22rem] bg-[rgba(209,214,214,0.33)]'>
                <div className='h-[17rem] flex items-center'>
                    <Image
                        src="/assets/why/greensofa.png"
                        alt="Chair Image"
                        height={527}
                        width={567}
                        className='object-fit h-[11rem] w-[18rem]'
                    />
                </div>
                <div className='flex font-bold flex-col h-full justify-end'>
                    <h3 className='text-xl'>Sofa Chair</h3>
                    <span>NPR. 5,500</span>
                </div>
            </article>
            <article className='flex flex-col p-7 w-[22rem] h-[22rem]  bg-[rgba(239,253,81,0.33)]'>
                <Image
                    src="/assets/why/tablechair.png"
                    alt="Chair Image"
                    height={527}
                    width={567}
                    className='object-fit h-[17rem] w-[18rem]'
                />
                <div className='flex font-bold flex-col justify-end h-full'>
                    <h3 className='text-xl'>Sofa Chair</h3>
                    <span>NPR. 5,500</span>
                </div>
            </article>
        </div>
    )
}

export default Why
