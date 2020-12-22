import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let player = e.currentTarget.value;
		this.setState({ player: player });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.player === "") {
			alert("You cannot add a nameless player!");
			// return true; // <- the alert-free option
    } else {
		this.props.handleSave({ ...this.state });				
		this.setState({ player: "" });
		};	
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit } >
				<input onChange={ this.handleChange } value={ this.state.player } />
				<button >Add</button>
			</form>
		);
	}
}

export default AddPlayer;