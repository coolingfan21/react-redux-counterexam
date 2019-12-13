import React, { Component } from "react";
import { connect } from "react-redux";
import { setDiff } from "../actions";

class Option extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.props.value}
          onChange={e => this.props.diffChange(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.diff
  };
};
const mapDispatchToProps = dispatch => {
  return {
    diffChange: diff => dispatch(setDiff(diff))
  };
};
Option = connect(mapStateToProps, mapDispatchToProps)(Option);
export default Option;
