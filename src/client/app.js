import React, { Suspense, useState, lazy } from 'react'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'
import Home from './pages/Home'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <Home />
        </div>
    )
}

export default App