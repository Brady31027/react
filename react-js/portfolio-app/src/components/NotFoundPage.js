import React from 'react';
import {Link} from 'react-router-dom';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <p>404!</p>
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}

export default NotFoundPage;