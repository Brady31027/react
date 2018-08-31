import React from 'react';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <p>contact page</p>
            </div>
        );
    }
}

export default ContactPage;