import React from 'react';
import fetchStatesData from '../../services/getStates';
import SelectStates from '../SelectStates/index';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueFilterState: '',
      statusSelect: 'closed',
      selectedStatesList: [],
      states: [],
      isFetching: false,
    };
  }

  componentDidMount() {
    this.getDataStates();
  }

  getDataStates = () => {
    fetchStatesData().then(data => {
      const newStatesData = Object.values(data).map((state, index) => {
        return { name: state, id: index + 1 };
      });
      this.setState({ states: newStatesData, isFetching: true });
    });
  };

  handleSelectState = event => {
    const { value, options } = event.target;
    const idTarget = options[options.selectedIndex].id;
    this.setState(prevState => {
      return {
        selectedStatesList: prevState.selectedStatesList
          .filter(item => item.name !== value)
          .concat({ name: value, id: idTarget }),
      };
    });
  };

  handleInputFilterState = e => {
    const { value } = e.currentTarget;
    this.setState({
      inputValueFilterState: value,
    });
  };

  handleElimnateSelectedState = id => {
    const { selectedStatesList } = this.state;
    const notEliminatedStates = selectedStatesList.filter(
      state => state.id !== id,
    );

    this.setState({
      selectedStatesList: notEliminatedStates,
    });
  };

  handleOpenListStates = () => {
    this.setState(prevState => {
      return {
        statusSelect: prevState.statusSelect === 'closed' ? 'open' : 'closed',
      };
    });
  };

  handleBtnELiminateAllSelectedStates = () => {
    this.setState(prevState => {
      return {
        selectedStatesList: prevState.selectedStatesList.length
          ? []
          : prevState.selectedStatesList,
      };
    });
  };

  render() {
    const {
      statusSelect,
      inputValueFilterState,
      states,
      selectedStatesList,
      isFetching,
    } = this.state;
    const {
      handleSelectState,
      handleElimnateSelectedState,
      handleOpenListStates,
      handleInputFilterState,
      handleBtnELiminateAllSelectedStates,
    } = this;
    return (
      <React.Fragment>
        <div className="page__wrapper">
          {isFetching ? (
            <SelectStates
              handleSelectState={handleSelectState}
              handleElimnateSelectedState={handleElimnateSelectedState}
              handleOpenListStates={handleOpenListStates}
              handleInputFilterState={handleInputFilterState}
              states={states}
              selectedStatesList={selectedStatesList}
              statusSelect={statusSelect}
              inputValueFilterState={inputValueFilterState}
              handleBtnELiminateAllSelectedStates={
                handleBtnELiminateAllSelectedStates
              }
            />
          ) : (
            <p>Loading data ...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
