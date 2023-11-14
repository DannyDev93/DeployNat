import './App.css'
import { Spotify } from 'react-spotify-embed'


function App() {
  return (
    <>
      <div className='main-container'>
        <h1>Hey there, Nata</h1>
        <p>Here's a rose</p>
        <span className='rose'>&#127801;</span>
        <p>And a song for you...</p>
        <div>
          <Spotify link="https://open.spotify.com/track/5T4ngPEPvNmEFkSDa7cxVw?si=fdd6599e75a2454c&nd=1" />

        </div>
      </div>
    </>
  )
}

export default App
