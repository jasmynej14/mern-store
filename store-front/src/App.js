import React from 'react'
import { Container,Row,Col  } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Container>
        <h1>Welcome to ProJewels</h1>
        <HomeScreen/>
        </Container>
      
      </main>
      <Footer/>
    </div>
  );
}

export default App;
