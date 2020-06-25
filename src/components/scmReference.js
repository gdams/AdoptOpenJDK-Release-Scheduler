import React from 'react';

class ScmReference extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }

    let title = '';
    let helper = '';
    let overridePublishName = ''

    if (this.props.jvm === 'openj9') {
        title = "Specify the extensions release branch: e.g. openj9-0.14.0"
        overridePublishName = (
            <div className="form-group">
                <label style={{fontSize: "20px"}} htmlFor="overridePublishName">GitHub binaries publish name (NOTE: If you are doing a point release, do NOT adjust this as we don't want the filenames to include the .x part), e.g. jdk8u232-b09_openj9-0.14.0 or jdk-11.0.5+10_openj9-0.14.0</label>
                <input
                className="form-control"
                id="overridePublishName"
                name="overridePublishName"
                type="text"
                placeholder="Enter overridePublishName"
                value={this.props.overridePublishName} // Prop: The email input data
                onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
        
    } else {
        if (this.props.Version === '8') {
            title = "Specify the GitHub release tag: e.g jdk8u232-b09"
        } else {
            title = "Specify the GitHub release tag: e.g jdk-14.0.1+9_adopt"
        }
        let link = `https://github.com/AdoptOpenJDK/openjdk-jdk${this.props.Version}u/releases/latest`
        helper = <p style={{fontSize: "20px"}}>This can most likely be found at <a href={link}>{link}</a></p>
    }
    // The markup for the Step 1 UI
    return(
       <div className="form-group">
        <label htmlFor="scmReference">{title}</label>
        {helper}
        <input
          className="form-control"
          id="scmReference"
          name="scmReference"
          type="text"
          placeholder="Enter scmReference"
          value={this.props.scmReference} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {overridePublishName}
      </div>
    );
  }
}

export default ScmReference;