
import React, { useState } from 'react'

const BucketList = () => {

    const [field, setField] = useState({ description: '', date: '', isCompleted: true, })

    const handleSubmit = (e) => {
        e.preventDefault()
        setField([...field, field.description])
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={(e) => setField({ ...field, description: e.target.value })}
            />
            <button
                type='submit'
            >Submit</button>
        </form>

            {field.map((item) => 
                <div>{item}
                <button>1</button>
                <button>2</button>
                <button>3</button>
                </div>
            
            )}
        </div>
        
    )
}

export default BucketList