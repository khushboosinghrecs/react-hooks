import React from 'react'

export const Vedio = ({videoSrc}) => {
  return (
    <div>
      <video loop controls autostart="true" autoPlay muted src={videoSrc} width='400' height ='200'/>
    </div>
  )
}
