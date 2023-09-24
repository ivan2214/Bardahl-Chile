import React from 'react'

const IframeComponent = ({ src }: { src: string }) => {
  return (
    <iframe
      loading="lazy"
      className="h-56 w-full rounded-lg"
      allowFullScreen={true}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      title="Todo lo que tenes que saber sobre el Infla y Sella Neumáticos"
      width="450"
      height="360"
      src={src}
      id="widget2"
    ></iframe>
  )
}

export default IframeComponent
