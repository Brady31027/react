var React = require('react');
var ReactDOM = require('react-dom');
var product = require('./products.js');

class SearchBar extends React.Component {

	handleQuery(event){
		//console.log(event.target.value);
		this.props.onQuery(event.target.value);
	}

	render() {
		return (
			<div className="search-bar">
				<input onChange={this.handleQuery.bind(this)} 
				       placeholder="Search" />
			</div>
		);
	}
}

class Result extends React.Component {
	render() {
		return (
			<div className="in-stock">
				<h4><a href="#"> { this.props.product.name }</a></h4>
				<p>${ this.props.product.price / 100.00 }</p>
				<p>{ this.props.product.description }</p>
				<hr />
			</div>
		);
	}
}
class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			foundProducts: props.products
		}
	}

	componentWillReceiveProps(nextProps) {
		var query = nextProps.query;
		var foundProducts = nextProps.products.filter(product => {
			return product.name.toLowerCase().match(query.toLowerCase()) ||
			       product.description.toLowerCase().match(query.toLowerCase());
		});
		this.setState({
			foundProducts: foundProducts
		});
	}

	render() {
		return (
			<div className="results">
				{this.state.foundProducts.map((prod, i)=>{
					return (
						<Result product={prod} />
					);
				})}
				
			</div>
		);
	}
}
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}

	handleQuery(query) {
		this.setState({'query': query.toLowerCase().trim()});
	}

	render(){
		return (
			<div className="search">
				<SearchBar onQuery={this.handleQuery.bind(this)}/>
				<Results products={this.props.products} query={this.state.query} />			
			</div>
		);
	}
}


ReactDOM.render(
<Search products={product}/>, document.getElementById('app')
);