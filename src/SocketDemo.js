import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faChevronDown, faServer, faComment, faCommentDots, faCircle, faChevronRight, faQuestion, faThumbsUp, faSlash, faBroadcastTower} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SocketDemo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currStep: 1,
      codeWord: 'website.com',
    }
  }

  // handleChange = event => {
  //   const {name, value} = event.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

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
    if(currStep !== 4){
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
        return(
          <React.Fragment>
            <section class="hero is-large" > 
              <div class="hero-body">
            <div class="container" className="socketContainer">
            <Anime easing="linear" loop="false" opacity={['0%', '100%']}>
              <Step1 
              currStep = {this.state.currStep}
              codeWord = {this.state.codeWord}
              />
              </Anime>
              <Step2 
              currStep = {this.state.currStep}
              />            
              <Step3
              currStep = {this.state.currStep}
              name={this.props.name}
              />
              <Step4 
              currStep = {this.state.currStep}
              />
              </div>
              <div style={{padding: '40px'}}>
              {this.prevButton()}
              {this.nextButton()}
              </div>
              </div>
              </section>
            </React.Fragment>
          
        )
    }
}

function FillInBlank(props){

  if(props.isFilled)
  {
      return(
          <span style={{backgroundColor:"#a9f07d"}}>{props.text2}</span>
      )
  }
  return(
      <span style={{backgroundColor:"#ff0000"}}>{props.text}</span>
      
  )
}


function Step(props){
  return(
    <React.Fragment>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
            <article class="tile is-child box notification is-warning is-12">
                <div class="content has-text-left" className="socketAnimateContainer">
                    <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
                        <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
                    </span>

                    <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '380px', top: '20px'}}/>
                    <FontAwesomeIcon icon={faServer} size="9x" style={{position: 'absolute', right: '40px', top: '80px'}}/>

                    {props.animation}
                </div>
            </article>
        </div>
      </div>
    {props.lowerHalf}
  </React.Fragment>
  )
}


function handleSubmit(props){
  props.isFilled = true;
}

function Step1(props){
  let isFilled = false;
  let test =  isFilled ? 1: 2;
  
  if(props.currStep !== 1){
    return null
    }

    return(
      <Step 
      animation={       
      <React.Fragment>
          <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
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
      </React.Fragment> }
      
      lowerHalf={
        <React.Fragment>
                        <div class="tile is-ancestor" style={{ justifyContent: 'center'}}>
                  <Anime easing="linear" loop="false" opacity={[0,1]} delay={(e, i) => i * 1000}>
                      <div class="tile is-parent">
                          <article class="tile is-child box">
                          <h2 class="subtitle"> Enter our website so we can open a socket!</h2>
                          <div className="field has-addons" style={{paddingLeft: '25%', paddingBottom: '20px'}}>
                                        <div className="control">
                                            <input id="inputCode" className="input is-warning" type="text"  placeholder={props.codeWord}/>
                                        </div>
                                        {/* <a class="button is-warning" onClick={(}}>Go!</a> */}
                                    </div>
                          </article>
                         
                      </div>

                      <div class="tile is-parent">
                          <article class="tile is-child box notification is-warning has-text-left">
                              <p>
                              <code> let socket = new WebSocket("{props.codeWord}"); </code>
                              </p>
                              {/* <p>{test}</p> */}
                          </article>
                      </div>

                  
                  </Anime>
              </div>
          
        </React.Fragment>

      }
      />

    );
}

function Step2(props){
  if(props.currStep !== 2){
    return null
    }

    return(
      <Step
      animation={
          <React.Fragment>
              <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
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
          </React.Fragment>
      }
      lowerHalf={
          <React.Fragment>
          <Anime easing="linear" loop="false" opacity={[0,1]} delay={(e, i) => i * 1000}>
              <div class="tile is-ancestor">
                  <div class="tile is-parent">
                      <article class="tile is-child box" style={{boxShadow: '0'}}>
                          <h2 class="subtitle"> Here is our code that tells our computer what to do when we open a web socket!</h2>
                          
                      </article>
                  </div>
              </div>

              <div class="tile is-ancestor" style={{ justifyContent: 'center'}}>
                  <Anime easing="linear" loop="false" opacity={[0,1]} delay={(e, i) => i * 1000}>
                      <div class="tile is-parent">
                          <article class="tile is-child box">
                            <div className="code">
                                <code>socket.onopen = function(e) {'{'} </code>
                                <p><code>// do a flip </code></p>
                                <p><code>};</code></p>
                            </div>
                          </article>
                      </div>

                      <div class="tile is-parent">
                          <article class="tile is-child box">
                              <div className="code">
                                  <p><code>socket.onmessage = function(event) {'{'}</code></p>
                                  <p><code> //WE GOT A MESSAGE </code></p>
                                  <p><code>};</code></p>
                              </div>
                          </article>
                      </div>

                      <div class="tile is-parent">
                          <article class="tile is-child box">
                              <div className="code">
                                  <p><code>socket.onclose = function(event) {'{'} </code></p>
                                  <p><code>// connection died </code></p>
                                  <p><code>}; </code></p>
                              </div>
                          </article>
                      </div>
                  </Anime>
              </div>
          </Anime>

          </React.Fragment>
      }
      
      />
    )
}

//Let's See what happens
function Step3(props){
  if(props.currStep !== 3){
    return null
    }


  return(
    <Step
    animation={
      <React.Fragment>
              <span className="fa-layers fa-fw" style={{position: 'absolute', left: '50px', top: '145px'}}>
              <Anime scale={[0,1]} delay={100}>
            <FontAwesomeIcon icon={faComment} size="5x" inverse transform="right-25 up-12"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faQuestion} size="3x"  transform="right-48 up-20"></FontAwesomeIcon>
              </Anime>
            </span>

            <span className="fa-layers fa-fw" style={{position: 'absolute', right: '155px', top: '145px'}}>          
              <Anime scale={[0,1]} delay={4000}>
              <FontAwesomeIcon icon={faComment} size="5x" inverse flip="horizontal" transform="left-12 up-12"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faThumbsUp} size="3x"  flip="horizontal" transform="left-15 up-20"></FontAwesomeIcon>
                <Anime opacity={[0.2,1,0,1,0]} delay={4000}duration="1000" easing="linear">
                </Anime>
              </Anime>
            </span>

            <Anime easing="linear" duration="1000"
            loop={false}
            translateY="-80px"
            translateX="155px"
            opacity={['30%','100%', '0%']}
            delay={580}
            >
            <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '190px', top: '8rem'}}></FontAwesomeIcon>          
          </Anime>


            <Anime easing="linear" duration="900"
              loop={false}
              translateY="80px"
              translateX="155px"
              opacity={['0%', '100%']}
              delay={1380}
            >
              <FontAwesomeIcon icon={faCircle} size="2x" color="#fa7c91" style={{position: 'absolute', left: '428px', top: '40px'}}></FontAwesomeIcon>          
            </Anime>  

            <Anime opacity={[0,1]} delay={2400}>
            <p style={{position: 'absolute', left: '50px', bottom: '40px'}}>{props.name}{' >>'} Can I open a connection with you?</p>
            </Anime>


            <Anime opacity={[0,1]} delay={4200}>
            <p style={{position: 'absolute', right: '150px', bottom: '40px'}}> Ok!</p>
            </Anime>
       </React.Fragment>
      }
      lowerHalf={
        <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h2 class="subtitle"> Let's see what our code does!</h2>
            
          </article>
        </div>
        </div>

      }
    />
  )
}

function Step4(props){
  if(props.currStep !==4)
  return null


  return(
    <Step
    animation={
      <React.Fragment>
          <FontAwesomeIcon icon={faSlash} size="7x" transform='rotate-350' style={{position: 'absolute', right: '200px', top: '50px'}}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSlash} size="7x" transform='rotate-115' style={{position: 'absolute', left: '220px', top: '50px'}}></FontAwesomeIcon>
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
    lowerHalf={
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
          <h2 class="subtitle"> Hooray! Now your computer doesn't have to ask for updates.</h2>
        <h2 class="subtitle">Our website sends a stream of updates with an opened <strong>web socket!</strong></h2>
          </article>
        </div>
        </div>
    }
    
    />
  )
}

export default SocketDemo;