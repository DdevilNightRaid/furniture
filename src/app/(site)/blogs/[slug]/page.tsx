import React from 'react'
import { notFound } from 'next/navigation';
import {allDocs} from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-content';
interface PageProps {
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if(!doc) notFound();

    return doc
}
const page = async ({ params }: PageProps) => {
    const doc = await getDocFromParams(params.slug)
    return (
        <main className='flex flex-col gap-10'>
            <header>
                <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">{doc.title}</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">{doc.description}</p>
            </header>
           <Mdx code={doc.body.code}/>
        </main>
    )
}

export default page
