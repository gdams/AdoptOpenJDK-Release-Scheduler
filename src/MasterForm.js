import React from 'react';
import { Button } from 'reactstrap';
import Version from './components/Version';
import JVM from './components/JVM';
import ScmReference from './components/scmReference';
import Trigger from './components/Trigger'

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      additionalConfigureArgs: false,
      enableTests: true,
      enableInstallers: true,
      enableSigner: true,
      version: '',
      jvm: '',
      scmReference: '',
      overridePublishName: ''
    }

    // Bind the submission to handleChange() 
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
    this.addAdditionalConfigureArgs=this.addAdditionalConfigureArgs.bind(this)
  }

addAdditionalConfigureArgs() {
    if (this.state.version === '8') {
        this.setState({
            additionalConfigureArgs: '--with-milestone=fcs'
        })
    } else {
        this.setState({
            additionalConfigureArgs: '--without-version-pre --without-version-opt'
        })
    }

    if (this.state.jvm === 'hotspot') {
        this.setState({
            overridePublishName: ''
        })
    }
}

_next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3? 4: currentStep + 1
    this.setState({
        currentStep: currentStep
    })
    this.addAdditionalConfigureArgs()
}

_prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
        currentStep: currentStep
    })
}

// The "next" and "previous" button functions
get previousButton(){
  let currentStep = this.state.currentStep;
  // If the current step is not 1, then render the "previous" button
  if(currentStep !==1){
    return (
      <Button 
        className="btn btn-secondary btn-lg" 
        type="button" onClick={this._prev}>
      Previous
      </Button>
    )
  }
  // ...else return nothing
  return null;
}

get nextButton(){
  let currentStep = this.state.currentStep;
  // If the current step is not 4, then render the "next" button
  if(currentStep <4){
    return (
      <Button 
        className="btn btn-primary btn-lg float-right" 
        type="button" onClick={this._next}>
      Next
      </Button>        
    )
  }
  // ...else render nothing
  return null;
}

  // Use the submitted data to set the state
  handleChange(event) {
    console.log(this.state)
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { version, jvm, scmReference, enableTests, enableInstallers, enableSigner, additionalConfigureArgs, overridePublishName } = this.state
    let href=`https://ci.adoptopenjdk.net/job/build-scripts/job/openjdk${version}-pipeline/parambuild/?releaseType=Release&scmReference=${scmReference.replace('+', '%2B')}&enableTests=${enableTests}&enableInstallers=${enableInstallers}&enableSigner=${enableSigner}&additionalConfigureArgs=${additionalConfigureArgs}&overridePublishName=${overridePublishName.replace('+', '%2B')}`
    alert(`Your specified parameters: \n 
      Version: ${version} \n 
      JVM: ${jvm} \n
      SCMReference: ${scmReference}\n
      AdditionalConfigureArgs: ${additionalConfigureArgs}\n
      OverridePublishName: ${overridePublishName}`
    )
    window.open(href, '_blank');
  }
  
render() {    
return (
  <React.Fragment>
  <h1>AdoptOpenJDK Release Scheduler</h1>
  <p>Step {this.state.currentStep} </p> 
    
  <form onSubmit={this.handleSubmit}>
    <Version 
        currentStep={this.state.currentStep} 
        handleChange={this.handleChange}
        Version={this.state.version}
    />
    <JVM 
        currentStep={this.state.currentStep} 
        handleChange={this.handleChange}
        JVM={this.state.JVM}
        Version={this.state.version}
        addAdditionalConfigureArgs={this.addAdditionalConfigureArgs}
    />
    <ScmReference 
        currentStep={this.state.currentStep} 
        jvm={this.state.jvm}
        handleChange={this.handleChange}
        scmReference={this.state.scmReference}
        Version={this.state.version}
    />
    <Trigger 
        currentStep={this.state.currentStep} 
        jvm={this.state.jvm}
        handleChange={this.handleChange}
        scmReference={this.state.scmReference}
        Version={this.state.version}
    />

      {this.previousButton}
      {this.nextButton}

  </form>
  </React.Fragment>
)
}
}

export default MasterForm;