import ButtonMain from '../Buttons/ButtonMain'
import { TextProps } from '../../Types'



export default function Text({text} :TextProps ) {

    return (
        <form id='form' onSubmit={text}>
            <textarea id="story" 
                name="story" 
                className='text-area' 
                maxLength={80} 
                placeholder='Write / copy your text here ...'>
            </textarea>
            <ButtonMain/>
        </form>
    )
}
//Write / copy your text here ...
