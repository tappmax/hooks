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
