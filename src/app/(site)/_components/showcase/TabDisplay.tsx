import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import ImageCard from '@/components/ImageCard'
import { AllItems } from '@/lib/data/allItems'
import { OfficeItems } from '@/lib/data/officeItem'
import { BedItems } from '@/lib/data/bedItems'

const TabDisplay = () => {
    return (
        <div>
            <Tabs defaultValue="all" className="xl:w-[90rem] py-7 gap-10 flex flex-col bg-transparent text-white ">
                <TabsList className='flex md:gap-10 w-full flex-wrap md:flex-nowrap bg-transparent text-foreground'>
                    <TabsTrigger className='text-lg' value="all">All Furniture</TabsTrigger>
                    <TabsTrigger className='text-lg' value="livingroom">Living Room</TabsTrigger>
                    <TabsTrigger className='text-lg' value="office">Office</TabsTrigger>
                    <TabsTrigger className='text-lg' value="bedroom">Bedroom</TabsTrigger>
                    <TabsTrigger className='text-lg' value="dining">Dining</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className='w-full flex flex-row justify-center flex-wrap gap-10'>
                        {
                            AllItems.map((item) => (
                                <ImageCard
                                    imgUrl={item.imgUrl}
                                    label={item.label}
                                    price={item.price}
                                    key={item.id}
                                />
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="livingroom">
                    <ImageCard
                        imgUrl='/assets/why/sofa.png'
                        label='Sofa Chair'
                        price='5, 500'
                    />
                </TabsContent>
                <TabsContent value="office">
                    <div className='w-full flex flex-row justify-center flex-wrap gap-10'>
                        {
                            OfficeItems.map((item) => (
                                <ImageCard
                                    imgUrl={item.imgUrl}
                                    label={item.label}
                                    price={item.price}
                                    key={item.id}
                                />
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="bedroom">
                    <div className='w-full flex flex-row justify-center flex-wrap gap-10'>
                    {
                            BedItems.map((item) => (
                                <ImageCard
                                    imgUrl={item.imgUrl}
                                    label={item.label}
                                    price={item.price}
                                    key={item.id}
                                />
                            ))
                        }
                        <ImageCard
                            imgUrl='/assets/why/greensofa.png'
                            label='Sofa Chair'
                            price='5, 500'
                        />
                        <ImageCard
                            imgUrl='/assets/bedroom/1.png'
                            label='Sofa Chair'
                            price='5, 500'
                        />
                        <ImageCard
                            imgUrl='/assets/office/2.png'
                            label='Sofa Chair'
                            price='5, 500'
                        />
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default TabDisplay
