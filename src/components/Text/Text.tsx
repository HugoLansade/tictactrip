import ButtonMain from '../Buttons/ButtonMain'
import { TextProps } from '../../Types'



export default function Text({text} :TextProps ) {
    let token = "a";
    return (
        // <form id='form' onSubmit={text(token)}>
        <form id='form' onSubmit={text} encType='text/plain'>

            <textarea id="story" 
                name="story" 
                className='text-area' 
                placeholder='Write / copy your text here ...'>
            </textarea>
            <ButtonMain/>
        </form>
    )
}
//Write / copy your text here ...
