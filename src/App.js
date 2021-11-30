import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
// ctrl+space see whats available
function App() {
  const [hideMenu, setHideMenu] = useState(true)
  const currentRef = useRef(null)
  const containerRef = useRef(null)
  useEffect(() => {
    if (hideMenu) {
      containerRef.current.style.height = "0"
    } else {
      const listSize = currentRef.current.getBoundingClientRect().height
      containerRef.current.style.height = `calc(${listSize}px + 2em)`
    }
  }, [hideMenu])
  return (
    <div className="App">
      <header className={`App-header`}>
        <h1 className="header-title">
          Tim's<span className="title-color">Website</span>
        </h1>
        <div className="menu-button-container">
          <div
            className="menu-button"
            onClick={() => {
              setHideMenu((prevValue) => !prevValue)
            }}
          >
            {/* menu button bars */}
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <nav ref={containerRef}>
          <ul ref={currentRef}>
            <li>
              <a href="_#">Home</a>
            </li>
            <li>
              <a href="_#">About</a>
            </li>
            <li>
              <a href="_#">Projects</a>
            </li>
            <li>
              <a href="_#">Contact</a>
            </li>
            <li>
              <a href="_#">Profile</a>
            </li>
          </ul>
        </nav>
        <div className="socials-container">
          <ul className="socials">
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
