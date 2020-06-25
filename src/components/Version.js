import React from 'react';

class Version extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="version">Select a Version</label>
        <select
          className="form-control"
          id="version"
          name="version"
          type="text"
          placeholder="Enter Version"
          value={this.props.version}
          onChange={this.props.handleChange}
          defaultValue={'DEFAULT'}
        >
        <option disabled value="DEFAULT"> -- select an option -- </option>
        <option value="8">JDK8</option>
        <option value="11">JDK11</option>
        <option value="14">JDK14</option>
        <option value="15">JDK15</option>
        <option value="16">JDK16</option>
        </select>
      </div>
    );
  }
}

export default Version;