import React, { Suspense, useState, lazy } from 'react'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'
import Home from './pages/Home'

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div>
            <AppStatus />
            <Home />
        </div>
    )
}

export default App