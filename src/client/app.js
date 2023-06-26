import React, { useState } from 'react'
import Home from './pages/Home'
import '../client/assets/global.css'
import AppStatus from './components/AppStatus'
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