import React from 'react'
import * as data from ".contentlayer/generated"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
    <main className='flex flex-col gap-10'>
      <div className='flex text-5xl'>
        <h2>Blogs that might be helpful.</h2>
      </div>
      <ul className='flex flex-wrap gap-10'>
        {
          data.allDocs.map((doc) => {
            return (
              <li>
                <article className='rounded-lg flex flex-col gap-3 p-4 w-full max-w-lg border'>
                  <header className='flex flex-col'>
                    <span className='font-medium'>Title:</span>
                    <h1 className='font-bold text-lg'>{doc.title}</h1>
                  </header>
                  <Separator />
                  <section>
                  <p className='text-md leading-[1.5rem] font-medium'>
                    {doc.description ? (
                      <>
                        {doc.description.split(' ').slice(0, 28).join(' ')}
                        {doc.description.split(' ').length > 28 ? '...' : ''}
                      </>
                    ) : (
                      "...."
                    )}
                  </p>
                </section>
                  <footer>
                    <Link href={`/blogs/${doc.slugAsParams}`}>
                      <Button className='w-full hover:bg-secondary'>Read more</Button>
                    </Link>
                  </footer>
                </article>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default page
