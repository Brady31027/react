import React from 'react';
import { Link } from 'react-router-dom';

class PortfolioPage extends React.Component {
    
    constructor (props) {
        super(props);
        console.log(this.props);
    }

    render () {
        return (
            <div>
                <p>portfolio page</p>
                <Link to="/portfolio/1">item 1</Link>
                <Link to="/portfolio/2">item 2</Link>
            </div>
        );
    }
}

export default PortfolioPage;