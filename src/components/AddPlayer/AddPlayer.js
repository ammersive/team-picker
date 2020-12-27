import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: { name: "", playCount: 0, isPicked: false, isNew: true },
			players: props.players,
			bank: props.bank,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let player = { name: e.currentTarget.value, playCount: 0 }; // set isPicked: true, isNew: true here?
		this.setState({ player: player });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.player.name === "") {
			alert("You cannot add a nameless player!");
		} else if (this.props.bank.some(player => player.name === this.state.player.name)) {
			alert("A player with that name already exists in the bank. You can either add them directly from the bank with the add button, or choose a different name");
		} else if (this.props.players.some(player => player.name === this.state.player.name)) {
			alert("A player with that name has already been picked. You can add an initial to tell them apart");
    } else {
		this.props.handleSave({ ...this.state }); // copy the local state	to pass up			
		this.setState({ player: { name: "", playCount: 0} }); //reset the state
		};	
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit } >
				<input onChange={ this.handleChange } value={ this.state.player.name } />
				<button className="add-button">Add</button>
			</form>
		);
	}
}

export default AddPlayer;