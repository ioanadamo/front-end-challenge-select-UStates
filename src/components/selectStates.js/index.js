import React from 'react';
import './styles.scss';
import xImgage from '../../images/xImage.png';
import dropDownImg from '../../images/triangle-down-512.png';

class SelectStates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputV: '',
			classStateList: 'hidden'
		};
	}

	handleinp = e => {
		let { value } = e.currentTarget;

		this.setState(prevState => {
			return {
				inputV: value,
				classStateList: ''
			};
		});
	};

	handleElimnateSelectedState = e => {
		return (e.currentTarget.parentElement.className += ' hidden');
	};

	handleOpenListStates = () => {
		this.setState(prevState => {
			return {
				classStateList: prevState.classStateList === 'hidden' ? '' : 'hidden'
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<main className="selectedStates--main__container">
					<div className="selectedStates--input__section">
						<ul className="selectedStates--list__states">
							{this.props.selectedStates.map((state, index) => (
								<li
									key={index}
									className={'selectedStates--list__states-state'}
								>
									<p className="selectedStates--states-pgph-elem">{state}</p>
									<img
										className={'selectedStates--eliminate-state-Img'}
										src={xImgage}
										alt="eliminate state"
										onClick={this.handleElimnateSelectedState}
									/>
								</li>
							))}
						</ul>
						<input
							className="selectedStates--input__search-state"
							type="text"
							placeholder={this.props.selectedStates.length ? '' : 'State'}
							onChange={this.handleinp}
							onClick={this.handleOpenListStates}
						/>
						<img
							className="slectedStates--dropDown-arrowImg"
							src={dropDownImg}
							alt="drop down traingle"
							onClick={this.handleOpenListStates}
						/>
					</div>
					<select
						className={this.state.classStateList + ' selectedStates--select'}
						multiple
						onChange={this.props.handleInputSearchState}
						name=""
						id=""
					>
						{Object.values(this.props.states)
							.filter(item =>
								item.toUpperCase().includes(this.state.inputV.toUpperCase())
							)
							.map((state, ind) => (
								<option
									className="slectedStates--select--option"
									key={ind}
									value={state}
								>
									{state}
								</option>
							))}
					</select>
				</main>
			</React.Fragment>
		);
	}
}

export default SelectStates;
