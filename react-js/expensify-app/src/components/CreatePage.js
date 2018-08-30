import React from 'react';

class CreatePage extends React.Component {
    
    constructor (props) {
        super(props);
        console.log(this.props);
    }

    render () {
        return (
            <div>
                <p>create page</p>
            </div>
        );
    }
}

export default CreatePage;