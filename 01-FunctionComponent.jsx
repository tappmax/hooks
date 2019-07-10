import React from 'react';
import Row from './Row';
/* we want to turn this into an editable component... 
 It's a pain porting to a class component */
export default function Greeting(props) {
    return (
        <section>
            <Row label="Name">
                {props.name}
            </Row>
        </section>
    )
}