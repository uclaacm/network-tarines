import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faServer, faCircle, faComment, faChevronRight, faCommentDots, faBroadcastTower, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RequestDemo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currStep: 1,
      stepDelays: [500, 500, 2000, 4000, 3000],
      graduate: 0,
    }
  }

  //next
  _next = () => {
    let currStep = this.state.currStep;
    currStep = currStep >= 4? 4: currStep + 1
    this.setState({
      currStep: currStep
    })
  }

  //prev
  _prev = () => {
    let currStep = this.state.currStep;
    currStep = currStep <= 1? 1: currStep - 1
    this.setState({
      currStep: currStep
    })
  }

  //buttons

  prevButton() {
    let currStep = this.state.currStep;
    if(currStep !== 1){
      return (
        <a className="button is-rounded is-light" onClick={this._prev}> Go Back </a>
      )
    }
    return null;
  }


  prevButton2() {
    let currStep = this.state.currStep;
    if(currStep > 3){
      return (
        <a className="button is-rounded is-light" onClick={this._prev}> Go Back </a>
      )
    }
    return null;
  }

  nextButton(){
    var DELAY = this.state.stepDelays[this.state.currStep];
    let currStep = this.state.currStep;
    if(currStep < 3 ){
      return(
        <a className="button is-rounded is-primary" onClick={this._next}> 
        <Anime easing="linear" delay={DELAY} loop={true} direction="alternate" opacity={['100%', '20%']}>
          Next</Anime>
        </a>
      )
    }
    return(
      <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '20%']}>
      <FontAwesomeIcon icon={faChevronDown} size="2x" transform="" ></FontAwesomeIcon>
      </Anime>
    );
  }


  nextButton2(){
    var DELAY = this.state.stepDelays[this.state.currStep];
    let currStep = this.state.currStep;
    if(currStep == 3){
      return(
        <a className="button is-rounded is-primary" onClick={this._next}> 
        <Anime easing="linear" delay={DELAY} loop={true} direction="alternate" opacity={['100%', '20%']}>
          Next</Anime>
        </a>
      )
    }
    else if(currStep == 4){
    return(
      <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '20%']}>
      <FontAwesomeIcon icon={faChevronDown} size="2x" transform="" ></FontAwesomeIcon>
      </Anime>
    )}
    return null;
  }

  handleScroll2(){
    return(
      <p>Testing</p>
    )
  }

    render(){
      const name = this.props.name;
        return(          
          <React.Fragment>
            <section class="hero is-large" > 
              <div class="hero-body">
                  <div class="container">
                  <Anime easing="linear" loop="false" opacity={['0%', '100%']}>
                          <Step1 
                          currStep = {this.state.currStep}
                          />
                          </Anime>
                          <Step2 
                          currStep = {this.state.currStep}
                          name = {name}
                          />
                          <Step3
                          currStep = {this.state.currStep}
                          />
                          <div style={{padding: '40px'}}>
                            {this.prevButton()}
                          
                              {this.nextButton()}
                          </div>

                          
                  </div>                  
                </div>
             </section>


             
             <section class="hero is-fullheight is-warning" onScroll={this.handleScroll2} > 
             <div class="hero-body">
                  <div class="container">
      <Step4 
      currStep = {this.state.currStep} />
                    
      <Step5 
      currStep = {this.state.currStep}                
      />  
{this.prevButton2()}
      {this.nextButton2()}
      </div>                  
                </div>

              
             </section>
             
             </React.Fragment>
          
        )
    }
}


function Step(props){
  return(
    <React.Fragment>
      <div class="container" className ="requestTextContainer">
      <Anime opacity={[0, 1]} translateY={10} delay={200}>
          <h2 class="subtitle">{props.text}</h2>
          </Anime>
      </div>
     <div className="requestAnimateContainer">
        <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
        <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
        </span>
        {props.animation}
        <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
        <FontAwesomeIcon icon={faServer} size="9x" className="serverContainer" style={{position: 'absolute', right: '40px', top: '80px'}}/>
    </div>
    </React.Fragment>
  )
}

//Ready to Send!
function Step1(props){
  if(props.currStep !== 1){
  return null
  }

  return(
    <Step
    currStep={props.currStep}
    idNum={1}
    text="Now our website has to check that it received our request! (and send a message back if it needs to)"
    animation={
      <Anime easing="linear" duration="900"
      loop={true}
      direction="alternate"
       opacity={['100%', '20%']}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="#96bfd4" style={{position: 'absolute', left: '210px', top: '8rem'}}></FontAwesomeIcon>          
        </Anime>}
     />
  );
}

//The Sending
function Step2(props){
  if(props.currStep !== 2){
  return null
  }
  return(
    <Step
    currStep={props.currStep}
    idNum={2}
    text="Good job! You just sent us a message."
    animation={
      <React.Fragment>
      <Anime easing="linear" duration="900"
      loop={true}
      translateY="-80px"
      translateX="155px"
      opacity={['30%','100%', '0%']}
    >
      <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '190px', top: '8rem'}}></FontAwesomeIcon>          
    </Anime>

    <Anime easing="linear" duration="900"
      loop={true}
      translateY="80px"
      translateX="155px"
      opacity={['30%', '100%', '0%']}
    >
      <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '430px', top: '40px'}}></FontAwesomeIcon>          
    </Anime>  
    </React.Fragment>  
    }
     />
  )
}

//Frequent Updates
function Step3(props){
  if(props.currStep < 3){
  return null
  }
  return(
    <React.Fragment>
    <Step
    currStep={props.currStep}
    idNum={3}
    text={<p>But wait! Other websites like chat sites (facebook messenger, google hangouts) need to update their page many times a second.</p>}
    animation={
      <React.Fragment>
     <Anime easing="linear" duration="900"
        loop={true}
        direction="alternate"
        translateY="-80px"
        translateX="155px"
        opacity={['30%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '190px', top: '8rem'}}></FontAwesomeIcon>          
      </Anime>

      <Anime easing="linear" duration="900"
        loop={true}
        direction="alternate"
        translateY="80px"
        translateX="155px"
        opacity={['30%', '100%', '0%']}
      >
        <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '430px', top: '40px'}}></FontAwesomeIcon>          
      </Anime>  
    </React.Fragment>  
    }
     />
     <Anime
      delay={2000} opacity={[0, 1]}
    >
      <h2 class="subtitle">That's a lot of messages to send in a short of amount of time. (scroll down)</h2>
    </Anime>

    
    </React.Fragment>
  )
}


//THIS IS CALLED. AN HTTP REQUEST.
function Step4(props){
  //!== 4
  if(props.currStep != 3){
    return null
  }
  return(

    <Step
    currStep={props.currStep}
    idNum={4}
    text={<p>What we just did is called an <strong>HTTP Request</strong>, and it's used in almost every website.</p>}
    animation={
      <React.Fragment>
     <Anime easing="linear" duration="900"
        loop={true}
        direction="alternate"
        translateY="-80px"
        translateX="155px"
        opacity={['30%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '190px', top: '8rem'}}></FontAwesomeIcon>          
      </Anime>

      <Anime easing="linear" duration="900"
        loop={true}
        direction="alternate"
        translateY="80px"
        translateX="155px"
        opacity={['30%', '100%', '0%']}
      >
        <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '430px', top: '40px'}}></FontAwesomeIcon>          
      </Anime>  

      <div class="columns is-mobile is-centered"style={{position: 'absolute', top: '120px', left: '215px'}}>
              <div class="column">
              <Anime opacity={[0, 1]} translateY={(e, i) =>(i+1)*20} delay={(e, i) => i * 1000}>
                <span>
              
                <p class="title is-5">1. Open Connection</p>
                </span>
                <p class="title is-5">2. Send Connection</p>

                <p class="title is-5">3. Wait for a response from the website</p>
                </Anime>
              </div>
            
      </div>
    </React.Fragment>  
    } />
  );
}

function Step5(props){
  if(props.currStep != 4){
    return null
  }
  return(
    <Step
    currStep={props.currStep}
    idNum={5}
    text={<p>But if we use it all the time, it can <strong>crash</strong> our
           website! This is bad, so we send messages using something else –– they're called <strong>web sockets</strong>! </p>}
    animation={
      <React.Fragment>
     <Anime easing="linear" duration="900"
        loop={true}
        direction="alternate"
        translateY="-80px"
        translateX="155px"
        opacity={['30%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '190px', top: '8rem'}}></FontAwesomeIcon>          
      </Anime>

      <Anime easing="linear" duration="900"
        loop={true}
        direction="alternate"
        translateY="80px"
        translateX="155px"
        opacity={['30%', '100%', '0%']}
      >
        <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '430px', top: '40px'}}></FontAwesomeIcon>          
      </Anime>  

      <div class="columns is-mobile is-centered"style={{position: 'absolute', top: '120px', left: '215px'}}>
              <div class="column">
              <Anime translateY={(e, i) =>(i+1)*20} duration={0}>
                <span>
                
                <p class="title is-5">1. Open Connection</p>
                </span>
                <p class="title is-5">2. Send Connection</p>

                <p class="title is-5">3. Wait for a response from the website</p>
                </Anime>
              </div>
            
      </div>
    </React.Fragment>  
    } />
  )

}


export default RequestDemo;