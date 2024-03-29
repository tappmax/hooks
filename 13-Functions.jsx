import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default function Greeting(props) {
    const [name, setName] = useState('Mary');
    const [name, setSurname] = useState('Poppins');
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);
    const width = useWindowWidth();

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
            <Row label="Width">
                {width}
            </Row>
        </section>
    )
}

function useWindowWidth() {
    // exact extracted code, but with return function
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth); 
        window.addEventListener('resize', handleResize);
        return (() => {
            window.removeEventListener('resize', handleResize)
        });
    });
    return width;
}