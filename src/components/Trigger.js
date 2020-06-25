import React from 'react';

class Trigger extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }

    return(
       <div className="form-group">
        <label htmlFor="email">Use the button below to take you to Jenkins</label>
        <button className="btn btn-lg btn-success btn-block">Trigger on Jenkins</button>
      </div>
    );
  }
}

export default Trigger;