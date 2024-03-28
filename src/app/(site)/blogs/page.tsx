import * as data from ".contentlayer/generated"
import { BentoGrid, BentoGridItem } from '@/components/acer-ui/bento-grid'

const page = () => {
  return (
    <main className='flex flex-col gap-10'>
      <div className='flex text-5xl'>
        <h2>Blogs that might be helpful.</h2>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {
          data.allDocs.map((doc, i) => {
            return (
              <BentoGridItem
                key={i}
                title={doc.title}
                description={doc.description}
                href={`${doc.slugAsParams}`}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            )
          })
        }
      </BentoGrid>
    </main>
  )
}

export default page
