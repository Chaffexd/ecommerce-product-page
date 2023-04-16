import './App.css'
import NavBar from './components/NavBar'
import Product from './components/Product'

function App() {

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Product />
      </main>
    </div>
  )
}

export default App
