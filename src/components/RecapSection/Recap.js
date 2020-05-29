import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faServer, faCircle, faComment, faChevronRight, faCommentDots, faBroadcastTower, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateSession from './UpdateSession';

class Recap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          currStep: 5,
          stepDelays: [500, 500, 2000, 4000, 3000],
          subtitles: ["In case you forgot: What is the internet? It’s a way for computers to connect to other computers.",
            "Every time your computer wants information, it makes an HTTP Request.",
            "But there are times where HTTP requests are not the way to go.",
            "Sometimes, we want live updates, which means bothering the website with lots of requests.",
            "Sometimes, we want live updates, which means bothering the website with lots of requests.",
        ],
          txts1: ["Can I order 50 packs of instant ramen?", "Ok.", "Add a ukulele to my cart?", "Ok."],
          txts2: ["Any updates yet?", "No", "How about now?", "No", "Now?", "Yes, you have 1 message", "Any more updates?"],
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
    var DELAY = this.state.stepDelays[this.state.currStep];
    let currStep = this.state.currStep;
    if(currStep < 5 ){
      return(
        <a className="button is-rounded is-primary" onClick={this._next}> 
        <Anime easing="linear" delay={DELAY} loop={true} direction="alternate" opacity={['100%', '20%']}>
          Next</Anime>
        </a>
      )
    }
    return(
        <a className="button is-rounded is-primary">         
          How can we stop this?
        </a>
    );
  }    

  renderLastStep = () => {
      if(this.state.currStep == 5)
      {
      return(
        <div class="columns is-mobile is-centered">
        <div class="column">       
        </div>

        <div class="column">
            <article class="message is-warning">
            <div class="message-header">
                This can crash our website!
                <button class="button is-loading is-warning"></button>
            </div>
        </article>
        </div>
      
      </div>
       
      )
      }
      return null;
  }


    renderBackdrop = (updateSession) => {
        return(
            <React.Fragment>
            <div class="container" className ="requestTextContainer">
                 <Anime opacity={[0, 1]} translateY={10} delay={200}>
        <h2 class="subtitle">{this.state.subtitles[this.state.currStep-1]}</h2>
                </Anime>
            </div>
            <div className="requestAnimateContainer">
                <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
                <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faComment} size="3x" transform="right-40 up-20"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCommentDots} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
                </span>               
                <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
                <FontAwesomeIcon icon={faServer} size="9x" className="serverContainer" style={{position: 'absolute', right: '40px', top: '80px'}}/>                
            </div>
            {/* <div className="updateTextContainer"> */}

            <div class="columns is-mobile is-centered">
              <div class="column">
            
             <p>prev button</p>
              </div>
              <div class="column">
              {updateSession}
              {this.renderLastStep()}
              </div>

              <div class="column">
              <p>next button</p>
              </div>
            
            </div>
            <div>
                
            </div>
            </React.Fragment>
        )
    }
    render() {
        let text = this.state.txts2;
        if(this.state.currStep == 2)
        {
            text = this.state.txts1;
        }       
        return(
            <div class="hero-body" >
                {this.renderBackdrop(<UpdateSession texts={text}/>)}                 
            <div class="columns is-mobile is-centered">
              <div class="column">
              {this.prevButton()}
              </div>

              <div class="column">
              {this.nextButton()}  
              </div>
            
            </div>
            
           
                    
            </div>
        )
    }
}

export default Recap;