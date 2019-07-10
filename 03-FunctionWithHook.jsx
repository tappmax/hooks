import React, { useState } from 'react';
import Row from './Row';

export default function Greeting(props) {
    /*const name = ???; // initial state === "Mary"
    const setName = ???;*/
    const [name, setName] = useState('Mary'); //<== Hook
    // Can reuse `useState` hook.

    function handleNameChange(e) {
        setName(e.target.value);
    }

    return (
        <section>
            <Row label="Name">
                {/* React knows to re-render this when 
                `setName`/(useState) is called*/}
                <input
                    value={name} 
                    onChange={handleNameChange}
                />
            </Row>
        </section>
    )
}

/*back to slides*/