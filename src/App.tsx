import React, { useState, useEffect, useRef} from 'react'
import NavHome from './components/nav-bar'
import './App.css'


function App() {
  const [navBarHeight, setNavBarHeight] = useState(0) 
  const navBarRef = useRef(null)

  useEffect(() => {
    setNavBarHeight(navBarRef.current.getBoundingClientRect().height)
  }, [])

  const bodyHeight = {
    height: `calc(100vh - ${navBarHeight}px)`
  }

  return (
    <>
    <NavHome ref={navBarRef}></NavHome>
    <div className='home-page-body' style={bodyHeight}>
      Discover the beauty of keeping a daily journal. 
    </div>
    </>
  )
  
}

export default App 

//INITAL JSX FROM CREATE VITE
/*   
function App() {
  const [count, setCount] = useState(0)
  
      return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
*/
