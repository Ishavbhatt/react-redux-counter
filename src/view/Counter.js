import React from "react";
import { connect } from "react-redux";
import { doincrement, dodecrement, doreset, dostep, domax } from "../action";
import "../main.css";

class Counter extends React.Component {
  render() {
    let { number, step, max, dispatch } = this.props;
    return (
      <div>
        <center>
          <div className="counter-div">
            <h1>Counter</h1>

            <h2 className="number">{number}</h2>
            <button onClick={() => dispatch(doincrement())} className="buttons">
              Increment
            </button>
            <button onClick={() => dispatch(dodecrement())} className="buttons">
              Decrement
            </button>
            <button onClick={() => dispatch(doreset())} className="buttons">
              Reset
            </button>
          </div>
          <div className="step-max-div">
            <div className="step">
              <h3 className="step-max">Step</h3>
              {[5, 20, 60, 80].map(stepnumber => (
                <button
                  onClick={() => dispatch(dostep(stepnumber))}
                  className="Plus20 incbtn"
                >
                  +{stepnumber}
                </button>
              ))}
            </div>
            <div className="max">
              <h3 className="step-max">Max</h3>
              {[100, 300, 500, 800].map(maxnumber => (
                <button
                  onClick={() => dispatch(domax(maxnumber))}
                  className="Plus20 incbtn"
                >
                  +{maxnumber}
                </button>
              ))}
            </div>
          </div>
        </center>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    number: state.number,
    step: state.step,
    max: state.max
  };
}

export default connect(mapStateToProps)(Counter);
