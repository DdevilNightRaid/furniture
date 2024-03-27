import React from 'react'

const SiteLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <main>
        {children}
        </main>
    </div>
  )
}

export default SiteLayout