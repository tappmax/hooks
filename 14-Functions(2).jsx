import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default function Greeting(props) {
    // you can easily see what this component is all about
    const name = useFormInput('Mary'); // state completely isolated
    const surname = useFormInput('Poppins'); // each call gets its own local state
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);
    const width = useWindowWidth();
    useDocumentTitle(`${ name.value } ${ surname.value }`);

    return (
        <section className={theme}>
            <Row label="Name">
                <input {...name} />
            </Row>
            <Row label="Surname">
                <input {...surname} />
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

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

// custom hooks are js functions - can take args and return (or not) values
function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}

function useWindowWidth() {
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