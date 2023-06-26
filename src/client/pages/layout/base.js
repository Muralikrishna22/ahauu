import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

function Base({ children }) {
    return (
        <div>
            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default Base