import React, { Component } from "react";
import { connect } from "react-redux";
import { setDiff } from "../actions";

class Option extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={this.props.option}
          value={this.props.value}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.value
  };
};
const mapDispatchToProps = dispatch => {
  return {
    option: e => dispatch(setDiff(e.target.value))
  };
};

Option = connect(mapStateToProps, mapDispatchToProps);
export default Option;
