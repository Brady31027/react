import React from 'react';

class HelpPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <p>help page</p>
            </div>
        );
    }
}

export default HelpPage;