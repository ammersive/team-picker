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
		this.props.handleSave({ ...this.state }); // copy the local state	to pass up			
		this.setState({ player: { name: "", playCount: 0} }); //reset the state
	}

	render() {
		return (
			<div className="draw-add-players">
				<h3>Add new</h3>
				<p>Add new player</p>
				<form onSubmit={ this.handleSubmit } >
					<input onChange={ this.handleChange } value={ this.state.player.name } onBlur={this.props.formatInput}/>
					<button className="add-button">Add</button>
				</form>
			</div>
		);
	}
}

export default AddPlayer;