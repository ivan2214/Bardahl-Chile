import Heading from '@/components/ui/heading'
import React from 'react'
import IframeComponent from './components/iframe-component'

const links = [
  'https://www.youtube.com/embed/VpeEu0q0zbk?controls…rigin=https%3A%2F%2Fwww.bardahl.com.ar&widgetid=1',
  'https://www.youtube.com/embed/e1Arcg9WP2E?controls…rigin=https%3A%2F%2Fwww.bardahl.com.ar&widgetid=3',
  'https://www.youtube.com/embed/m6DWmxCRr4Y?controls…rigin=https%3A%2F%2Fwww.bardahl.com.ar&widgetid=5',
  'https://www.youtube.com/embed/a5r75hUIjDU?controls…rigin=https%3A%2F%2Fwww.bardahl.com.ar&widgetid=7'
]

const InformationVideo = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Heading title="Informacion relevante" />
      <div className="class='lg:px-28 overflow-hidden' grid w-full grid-cols-1 place-items-center gap-6 px-8 py-10 lg:grid-cols-3 lg:gap-14">
        {links.map((link) => (
          <IframeComponent key={link} src={link} />
        ))}
      </div>
    </section>
  )
}

export default InformationVideo
