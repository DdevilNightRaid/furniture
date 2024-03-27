import Image from 'next/image'
import React from 'react'
interface ImageCardProps{
    imgUrl: string;
    label: string;
    price: string;
}
const ImageCard = ({
    imgUrl,
    label,
    price,
}: ImageCardProps) => {
    return (
        <article className='rounded-lg  flex flex-col p-7 w-[22rem] h-[22rem] bg-[rgba(12,126,128,0.33)]'>
            <Image
                src={imgUrl}
                alt="Chair Image"
                height={527}
                width={567}
                className='object-fit h-[17rem] w-[18rem]'
            />
            <div className='flex font-bold flex-col h-full justify-end'>
                <h3 className='text-xl'>{label}</h3>
                <span>NPR. {price}</span>
            </div>
        </article>
    )
}

export default ImageCard
