import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'


function App() {

  return (
    <Router>
      <div className="p-8">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  )
}
export default App
