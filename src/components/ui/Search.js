import { getSuggestedQuery } from '@testing-library/dom'
import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input 
                type="text" 
                className="form-control" 
                placeholder="search character"
                value= {text}
                onChange={(e) => onChange(e.target.value)}/>
            </form>
        </section>
    )
}

export default Search
