import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faServer, faCircle, faComment, faChevronRight, faCommentDots, faBroadcastTower, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RequestDemo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currStep: 1,
    }
  }

  //next
  _next = () => {
    let currStep = this.state.currStep;
    currStep = currStep >= 5? 5: currStep + 1
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

  nextButton(){
    let currStep = this.state.currStep;
    if(currStep !== 5){
      return(
        <a className="button is-rounded is-primary" onClick={this._next}> 
        <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '20%']}>
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

    render(){
      const name = this.props.name;
        return(          
          
            <section class="hero is-fullheight" > 
              <div class="hero-body">
                  <div class="container" className="requestContainer">
                          <Step1 
                          currStep = {this.state.currStep}
                          />
                          <Step2 
                          currStep = {this.state.currStep}
                          name = {name}
                          />
                          <Step3
                          currStep = {this.state.currStep}
                          />
                          <Step4 
                          currStep = {this.state.currStep}
                          />
                          <Step5 
                          currStep = {this.state.currStep}
                          
                          />  
                          <div style={{padding: '40px'}}>
                            {this.prevButton()}
                          
                              {this.nextButton()}
                          </div>
                  </div>                  
                </div>
             </section>
        
          
        )
    }
}


//Ready to Send!
function Step1(props){
  if(props.currStep !== 1){
  return null
  }

  return(
    <React.Fragment>
      <div class="container" className ="requestTextContainer">
          <h2 class="subtitle">Now our website has to check that it received our request!
          (and send a message back if it needs to)</h2>
      </div>
     <div className="requestAnimateContainer">
        <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
        <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
        </span>
        <Anime easing="linear" duration="900"
          loop={true}
          direction="alternate"
          opacity={['100%', '20%']}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="green" style={{position: 'absolute', left: '210px', top: '8rem'}}></FontAwesomeIcon>          
        </Anime>

        <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
        <FontAwesomeIcon icon={faServer} size="9x" className="serverContainer" style={{position: 'absolute', right: '40px', top: '80px'}}/>
    </div>
    </React.Fragment>
  );
}

//The Sending
function Step2(props){
  if(props.currStep !== 2){
  return null
  }
  return(
// use user name at some point
    <React.Fragment>
    <div class="container" className ="requestTextContainer">
        <h2 class="subtitle">Good job! You just sent us a message.</h2> 
    </div>
   <div className="requestAnimateContainer">
      <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
      <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
      </span>
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

      <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
      <FontAwesomeIcon icon={faServer} size="9x" className="serverContainer" style={{position: 'absolute', right: '40px', top: '80px'}}/>
  </div>
  </React.Fragment>


  )
}

//Frequent Updates
function Step3(props){
  if(props.currStep !== 3){
  return null
  }
  return(
    <React.Fragment>
    <div class="container" className ="requestTextContainer">
        <h2 class="subtitle">But wait! Other websites like chat sites (facebook messenger, google hangouts) 
    need to update the page many times a second. Too much!</h2>
    </div>
   <div className="requestAnimateContainer">
      <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
      <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
      </span>
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

      <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
      <FontAwesomeIcon icon={faServer} size="9x" className="serverContainer" style={{position: 'absolute', right: '40px', top: '80px'}}/>
  </div>
  </React.Fragment>
  )
}


//THIS IS CALLED. AN HTTP REQUEST.
function Step4(props){
  if(props.currStep !== 4){
    return null
  }
  return(
    <React.Fragment>
    <div class="container" className ="requestTextContainer">
        <h2 class="subtitle">This is called an <strong>HTTP Request</strong>, and is used in almost every website.</h2>
    </div>
   <div className="requestAnimateContainer">
      <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
      <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
      </span>
      <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
      <FontAwesomeIcon icon={faServer} size="9x" style={{position: 'absolute', right: '40px', top: '80px'}}/>

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
                {/* <span className="fa-layers fa-fw" style={{padding: '5px'}}>
                  <FontAwesomeIcon icon={faCircle} size="2x" transform="left-0"/>
                  <span class="fa-layers-text fa-inverse"> 1</span>
                </span>                   */}
                <p class="title is-5">1. Open Connection</p>
                </span>
                <p class="title is-5">2. Send Connection</p>

                <p class="title is-5">3. Wait for a response from the website</p>
                </Anime>
              </div>
            
      </div>

  </div>

    </React.Fragment>
  );
}

function Step5(props){
  if(props.currStep !== 5){
    return null
  }
  return(
    <React.Fragment>
   <div class="container" className ="requestTextContainer">
        <h2 class="subtitle">This is bad and can <strong>crash</strong> our
    website, so we use a different message-sending 
    method called <strong>web sockets</strong>. Let's try it!. (Scroll Down!)</h2>
    </div>
   <div className="requestAnimateContainer">
      <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
      <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
      </span>
      <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
      <FontAwesomeIcon icon={faServer} size="9x" style={{position: 'absolute', right: '40px', top: '80px'}}/>

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
                {/* <span className="fa-layers fa-fw" style={{padding: '5px'}}>
                  <FontAwesomeIcon icon={faCircle} size="2x" transform="left-0"/>
                  <span class="fa-layers-text fa-inverse"> 1</span>
                </span>                   */}
                <p class="title is-5 is-primary">1. Open Connection</p>
                </span>
                <p class="title is-5">2. Send Connection</p>

                <p class="title is-5">3. Wait for a response from the website</p>
                </Anime>
              </div>
            
      </div>

  </div>


</React.Fragment>
  )

}


export default RequestDemo;