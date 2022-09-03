import "./watch.scss"

import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import vid from "../../Assests/trailer.mp4"

export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video 
            className='video' 
            autoPlay
            progress
            controls
            src={vid}
        />
    </div>
  )
}
