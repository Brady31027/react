import React from 'react';
import { Link } from 'react-router-dom';

class PortfolioItemPage extends React.Component {
    
    constructor (props) {
        super(props);
        console.log(this.props);
    }

    render () {
        return (
            <div>
                <p>portfolio item page</p>
                <p>You are checking the item {this.props.match.params.id}</p>
                <Link to="/portfolio">Go back </Link>
            </div>
        );
    }
}

export default PortfolioItemPage;