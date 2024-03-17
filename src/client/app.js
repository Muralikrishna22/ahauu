import React, { Suspense, useState, lazy } from 'react'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'
import Home from './pages/Home'
import '../../src/client/assets/themes.css'

function App() {
    const [text, setText] = useState('Hello world')
    return (
        <div className='light_theme'>
            <AppStatus />
            <Home />
        </div>
    )
}

export default App