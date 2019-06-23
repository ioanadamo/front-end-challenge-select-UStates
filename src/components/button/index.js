import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<button
				className={this.props.classButton}
				onClick={this.props.handleOnClick}
			>
				<img
					className={this.props.classImg}
					src={this.props.srcImg}
					alt={this.props.altImg}
				/>
			</button>
		);
	}
}

export default Button;
