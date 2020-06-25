import React from 'react';

class JVM extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }

    return (
      <div className="form-group">
        <label htmlFor="JVM">Select a JVM</label>
        <select
          className="form-control"
          id="jvm"
          name="jvm"
          type="text"
          placeholder="Enter JVM"
          value={this.props.JVM}
          onChange={this.props.handleChange}
          defaultValue={'DEFAULT'}
        >
        <option disabled value="DEFAULT"> -- select an option -- </option>
        <option value="hotspot">Hotspot</option>
        <option value="openj9">OpenJ9</option>
        </select>
      </div>
    );
  }
}

export default JVM;