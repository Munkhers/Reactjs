import React, { createContext, useState } from 'react'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

export const TreeComponentContext = createContext()

const TreeComponent = () => {
    const [name, setName] = useState({ firstName: 'Munkh-Erdene', lastName: 'Sainbuyan' })


    return (

        <TreeComponentContext.Provider value={{ name }}>
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        </TreeComponentContext.Provider>
    )
}
export default TreeComponent