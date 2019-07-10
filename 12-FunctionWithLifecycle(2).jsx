import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default function Greeting(props) {
    const [name, setName] = useState('Mary');
    const [name, setSurname] = useState('Poppins');
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);

    useEffect(() => {
        document.title = `${name} ${surname}`;
    });

    // need to keep some "state" for keeping up with `width`
    const [width, setWidth] = useState(window.innerWidth); // supply initial value
    // again, pay attention to the order
    useEffect(() => {
        // this can be local to this function because it isn't used anywhere else
        const handleResize = () => setWidth(window.innerWidth); 
        
        window.addEventListener('resize', handleResize);
        
        // need to clean up - this effect is the only thing that needs this
        return (() => {
            window.removeEventListener('resize', handleResize)
        });
        // Any effect can optionally return a function. 
        // If the hook does return a function, 
        // react will call that returned function to clean up after the effect
    });

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <section className={theme}>
            <Row label="Name">
                <input
                    value={name} 
                    onChange={handleNameChange}
                />
            </Row>
            <Row label="Surname">
                <input
                    value={surname} 
                    onChange={handleSurnameChange}
                />
            </Row>
            <Row label="Language">
                {locale}
            </Row>
            <Row label="Width">
                {width}
            </Row>
        </section>
    )
}
