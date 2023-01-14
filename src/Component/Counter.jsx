import React from 'react'
import './counter.css'

const Counter = ({ counter, setCounter, isNegative, setIsNegative }) => {

    const counterHandeler = (btn) => {
        if (btn === 'inc') {
            setCounter(counter + 1)
            setIsNegative(false)
        }
        if (btn === 'dec') {
            if (counter === 0) {
                setIsNegative(true)
            } else {
                setCounter(counter - 1)
            }
        }
        if (btn === 'reset') {
            setCounter(0)
        }
    }
    return (
        <div className='container'>
            <h1>Counter Using React</h1>
            <span className='counter'>{`Your current count is : ${counter}`}</span>
            {
                isNegative ?
                    <span className='error'>Error : Cannot go below 0</span>
                    : ''
            }
            <div className="btn-container">
                <button onClick={() => counterHandeler('dec')}>Decreament</button>
                <button onClick={() => counterHandeler('inc')}>Increament</button>
                {
                    counter > 10 ?
                        <button onClick={() => counterHandeler('reset')} className='reset'>Go Back To 0</button>
                        : ''
                }
            </div>
        </div>
    )
}

export default Counter