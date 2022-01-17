import React from 'react'
import ButtonMain from '../Buttons/ButtonMain'

export default function Text() {
    return (
        <form id='form'>
            <textarea id="story" name="story" className='text-area' maxLength={80} placeholder='Write / copy your text here ...'>
                
            </textarea>
            <ButtonMain/>
        </form>
    )
}
//Write / copy your text here ...
