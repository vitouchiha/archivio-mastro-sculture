import React from 'react'

interface TextPageProps {
  banner?: string
  bannerAlt?: string
  title: string
  children: React.ReactNode
}

export default function TextPage({ banner, bannerAlt, title, children }: TextPageProps) {
  return (
    <article className="text-page">
      {banner && (
        <div className="text-page-banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={banner} alt={bannerAlt ?? title} />
        </div>
      )}
      <div className="text-page-body">
        <h1>{title}</h1>
        {children}
      </div>
      <a href="#content" className="back-to-top">↑ torna su</a>
    </article>
  )
}
