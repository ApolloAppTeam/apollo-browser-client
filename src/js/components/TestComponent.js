import React from 'react';

class TestComponent extends React.Component {

    constructor() {
        super();

        this.changeDisplayText = this.changeDisplayText.bind(this);

        this.state = {
            displayText: '1st state',
        };
    }

    changeDisplayText() {
        this.setState({
            displayText: '2nd state',
        });
    }

    render() {
        return (
        <div className="test-component">
          <h1>{this.state.displayText}</h1>
        </div>
        );
    }

    componentDidMount() {
        this.changeDisplayText();
    }
}

export default TestComponent;