import React, { useState, useContext } from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default function Greeting(props) {
    if(props.condition) {
        const [name, setName] = useState('Mary');
    } // d/l the linter plugin - it will say this isn't correct.
    const [name, setSurname] = useState('Poppins');
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);

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
        </section>
    )
}
