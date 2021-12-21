import Backdrop from "./Backdrop.js";
import Button from "./Button.js";
import Popup from "./Popup.js";
import { useState } from 'react';

function Challenge(props)
{
    const [isOpen, setIsOpen] = useState(false); 
    /* useState is a react *hook*, so we call it directly in the component. more about hooks later. */
    
    function closePopup()
    {
        console.log("Challenge "+props.number+" closed");
        setIsOpen(false);
    }

    function viewHandler()
    {
        console.log("Challenge "+props.number+" viewed!"); 
        /* Note: you don't need the curly braces for props.number for string concat! */
        setIsOpen(true);
    }
    /* Note: you don't need to pass props to the viewHandler, since anything in here can access it */

    return (
        <div className='chall'> {/* note: since 'class' is a reserved react term, we use className */}
            <h2>Challenge {props.number}</h2> {/* use variables like this with the curly braces */}
            <div className='actions'>
                <Button text="view" clickHandler={viewHandler}/> 
                {/* Note: multiple props aren't separated by commas, just spaces! */}
            </div>
            { isOpen ? <Popup close={closePopup}/> : null }
            { isOpen ? <Backdrop close = {closePopup}/> : null }
        </div>
    );
}

export default Challenge;