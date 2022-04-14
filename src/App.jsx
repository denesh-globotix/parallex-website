import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer>
          <h1>Hey hey, how's it going?</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
        <h2>Wow react is cool</h2>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
