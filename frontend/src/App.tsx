import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import {SignInButton , SignedIn, SignIn, SignedOut } from '@clerk/clerk-react';



function App() {
  return (
    <>
    <SignedIn>
      <Router>
        <div className="p-8">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </SignedIn>
    <SignedOut>
      <SignIn /> 
    </SignedOut>
    </>
  )
}
export default App
