import ButtonMain from '../Buttons/ButtonMain'
import { TextProps } from '../../Types'

let text = 'Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.'
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
