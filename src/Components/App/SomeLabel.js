import React, { useContext } from 'react'
import { TreeComponentContext } from '.'



const SomeLabel = () => {

    const {name} = useContext(TreeComponentContext)

    return (
        <div>
            SomeLabel: My name is {name.firstName} {name.lastName}
        </div>
    )
}
export default SomeLabel