import React from 'react';
import Row from './Row';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name = "Mary"
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render(){
        return (
            <section>
                <Row label="Name">
                    <input
                        // React knows to re-render this 
                        // when state changes
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                    />
                </Row>
            </section>
        )
    }
}
