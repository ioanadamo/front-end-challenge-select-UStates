import React from 'react';
import fetchStatesData from '../../services/getStates';
import SelectStates from '../SelectStates/index';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueFilterState: '',
      classNameSelect: 'hidden',
      classNameSelectedState: '',
      selectedStatesList: [],
      states: {},
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
    const { value, key } = event.target;
    this.setState(prevState => {
      return {
        selectedStatesList: prevState.selectedStatesList
          .filter(item => item.name !== value)
          .concat({ name: value, id: key }),
        classNameSelectedState: '',
      };
    });
  };

  handleInputFilterState = e => {
    const { value } = e.currentTarget;

    this.setState({
      inputValueFilterState: value,
      classNameSelect: '',
    });
  };

  handleElimnateSelectedState = e => {
    e.currentTarget.parentElement.className += ' hidden';
  };

  handleOpenListStates = () => {
    this.setState(prevState => {
      return {
        classNameSelect: prevState.classNameSelect === 'hidden' ? '' : 'hidden',
      };
    });
  };

  handleBtnELiminateAllSelectedStates = () => {
    this.setState({
      classNameSelectedState: 'hidden ',
      selectedStatesList: [],
    });
  };

  render() {
    const {
      classNameSelect,
      inputValueFilterState,
      states,
      selectedStatesList,
      isFetching,
      classNameSelectedState,
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
              classNameSelect={classNameSelect}
              inputValueFilterState={inputValueFilterState}
              classNameSelectedState={classNameSelectedState}
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
