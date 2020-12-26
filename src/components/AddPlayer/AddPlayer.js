import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: { name: "", playCount: 0, isPicked: false, isNew: true }
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let player = { name: e.currentTarget.value, playCount: 0 };
		this.setState({ player: player });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.player.name === "") {
			alert("You cannot add a nameless player!");
			// return true; // <- the alert-free option
    } else {
		this.props.handleSave({ ...this.state }); // copy the local state	to pass up			
		this.setState({ player: { name: "", playCount: 0} }); //reset the state
		};	
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit } >
				<input onChange={ this.handleChange } value={ this.state.player.name } />
				<button >Add</button>
			</form>
		);
	}
}

export default AddPlayer;