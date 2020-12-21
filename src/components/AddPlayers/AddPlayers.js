import { Component } from "react";

class AddPlayers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			players: props.players,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let value = e.currentTarget.value;
		this.setState({ value: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSave({...this.state}); 					
		this.setState({			
			players: [...this.state.players, this.state.value], 
			value: "",
		});	
	}

	render() {
		return (
			<>
				<form onSubmit={ this.handleSubmit } >
					<input onChange={ this.handleChange } value={ this.state.value } />
					<button >Add</button>
				</form>
				<ul >
					{ this.state.players.map((player, i) => (
						<li key={ i }>{ player }</li>
					)) }
				</ul>
				<p>{ this.state.players }</p>
			</>
		);
	}
}

export default AddPlayers;