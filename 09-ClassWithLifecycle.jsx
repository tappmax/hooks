import React from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name = "Mary",
            surname = "Poppins"
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
    }

    componentDidMount() {
        // we want to update browser page title
        document.title = `${this.state.name} ${this.state.surname}`;
        // on update, won't update, need componentDidUpdate
    }

    componentDidUpdate() {
        document.title = `${this.state.name} ${this.state.surname}`;
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        });
    }

    render() {
        return (
            <ThemeContext.Consumer>{
                theme => (
                    <section className={theme}>
                        <Row label="Name">
                            <input
                                value={this.state.name}
                                onChange={this.handleNameChange}
                            />
                        </Row>
                        <Row label="Surname">
                            <input
                                value={this.state.surname}
                                onChange={this.handleSurnameChange}
                            />
                        </Row>
                        <LocaleContext.Consumer>
                            {locale => (
                                <Row label="Language">
                                    {locale}
                                </Row>
                            )}
                        </LocaleContext.Consumer>
                    </section>
                )}
            </ThemeContext.Consumer>
        )
    }
}
