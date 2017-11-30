import React, { Component } from 'react';

const abc = {
  width: 854,
  height: 480,
  frameborder: 0,
  allowfullscreen: true
}

const videoBackground = {
  background: '#000',
  position: 'fixed',
  top: 0, right: 0, bottom: 0, left: 0,
  zIndex: '-99',
  width: '100%'
  // height: '100%',
}
const videoForeground = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none'
}
const videoForegroundIframe = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  frameborder: 0,
  allowfullscreen: true
}
const vidtopContent = {
  top: 0,
  color: '#fff'
}
const vidInfo = { position: 'absolute', top: 0, right: 0, width: '33%', background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '1rem' }
const vidInfoH = { fontSize: '2rem', fontWeight: 700, marginTop: 0, lineLeight: 1.2 }


class AppHome extends Component {
  constructor(){
    super()
    this.state ={
    }
  } 

componentDidMount(){
  console.dir(this.vedio)
}

  render() {
    return (
      <div className="container-fluid">
        <h1 className="row" children={'this is home page'} />
        {/* <img src="https://www.w3schools.com/html/pulpitrock.jpg" alt="Mountain View" width="500" height="377" /> */}
        <div style={videoBackground}>
          <div style={videoForeground}>
            {/* <iframe
              ref = {(ifr)=> this.vedio = ifr}
              style={videoForegroundIframe}
              src="https://www.youtube.com/embed/aINlzgrOovI?mute=1&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" 
            /> */}
            <img src={'https://media.giphy.com/media/xT9IgNJ335CHGPDsti/giphy.gif'} style={{with:"100%",height:"100%",margin:"auto"}}/>
          </div>
        </div>

        <div style={vidtopContent}>
          <div style={vidInfo}>
            <h1>YouTube Fullscreen Background Demo</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default AppHome;