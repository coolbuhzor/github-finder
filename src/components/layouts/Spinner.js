import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="loading..." style={{width:'200px', display:'block', margin:'auto' }}/>
        </div>
    )
}

export default Spinner

