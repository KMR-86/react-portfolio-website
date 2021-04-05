import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './Screens/HomeScreen'
import GalleryScreen from './Screens/GalleryScreen'
import { Container } from 'react-bootstrap'
function App() {
  return (

    <div>
      <Router>
        <Header />
        <Container>
          <main>

            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/gallery" component={GalleryScreen}></Route>

          </main>
        </Container>
      </Router>
    </div>

  )
}

export default App
