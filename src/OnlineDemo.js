import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faGrinAlt, faServer, faCookie, faHandPaper, faHandScissors, faHandRock, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class OnlineDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            actionNames: ['Rock', 'Paper', 'Scissors', 'a Cookie', 'a Plane'],
            actionSymbols: [faHandRock, faHandPaper, faHandScissors, faCookie, faPaperPlane],
            actionColors: []
        }
    }

    generateMessage = (userName, actionName) => {
        let message = userName + " sent you " + actionName + '!';
        return message;
    }

    handleAction = (chosenSymbol) => {
        //this.socket.emit("user connected", {message: enteredName})
        for(const [index, value] of this.state.actionSymbols.entries()){
            if(chosenSymbol == value)
            {
                let actionType = this.state.actionNames[index];
                let messageToSend = this.generateMessage(this.props.name, actionType);                
                //SEND mesageToSend TO BACKEND
            }
        }
    }
    
  render(){
    let x = 10;
    let y = 200;
      const otherUsers = []
      const otherNames = []
      const others = this.props.others; 
      const name = this.props.name; 

    const actionButtons = []

      for(const [index, value] of this.state.actionSymbols.entries()){
        actionButtons.push(
            <button class="button is-medium" onClick={this.handleAction}>
                <span class="icon is-small">
                    <FontAwesomeIcon icon={value}></FontAwesomeIcon>
                    </span>
            </button>
        )
      }

      for(const [index, value] of others.entries()){
      if(index != 0)

        { let xSign = Math.random() < 0.5 ? -1 : 1;
            let ySign = Math.random() < 0.5 ? -1 : 1;
            
            x = xSign*Math.random()*200 + 1;
        y = ySign*Math.random()*200 + 100;
        }
          otherUsers.push(
        //   10, 200
            <span className="userContainer" style={     {left: x, top:y }           }>
                <Anime easing="linear"  duration={1000} loop={true} direction="alternate" 
                    translateY={[Math.random()*10+1, Math.random()*10+1]} 
                    translateX={[Math.random()*10+1, Math.random()*10+1]}
                >
        
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-2 down-6" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGrinAlt} size="2x" transform="right-6 down-9" ></FontAwesomeIcon>
                    </span>                    
                    <div><p style={{position: 'absolute', right: '9px', top: '50px'}}>{value}</p></div>
                </Anime>
            </span>
            )

            otherNames.push(
                <option>{value}</option>
            )
      }


      return(
          <section class="hero is-fullheight is-primary" >
              <div class="hero-head">
                    <h2 class="subtitle" style={{padding: '40px'}}>Hooray, you did it! This is everyone connected right now with you. Let's talk with them! </h2>
                    <div className="userContainer" style={     {left: '40%', top:'100px', textAlign: 'center' }           }>
                        <Anime easing="linear"  duration={1000} loop={true} direction="alternate" 
                            translateY={[Math.random()*10+1, Math.random()*10+1]} 
                            translateX={[Math.random()*10+1, Math.random()*10+1]}
                        >        
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-2 down-6" ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faGrinAlt} size="2x" transform="right-6 down-9" ></FontAwesomeIcon>
                            </span>
                                            
                            <div><p style={{position: 'absolute', right: '9px', top: '50px'}}>{name}</p></div>
                        </Anime>

                            <FontAwesomeIcon icon={faServer} size="6x" transform="right-50 up-10" ></FontAwesomeIcon>
                    </div>
            


                    <div class="container" className="controlPanelContainer">
                    <div class="card">
                    {/* <header class="card-header">
                        <h2 class="subtitle ">Let's talk to them!</h2>
                    </header> */}
                    <div class="card-content"> {/*box notification is-warning */}                        
                                    
                        <div className="field">
                            <p className="control">
                                <p><strong>You're talking to: </strong></p>
                                <span className="select is-centered">
                                    <select>
                                        <option>Find someone!</option>
                                        {otherNames}                                              
                                    </select>
                                </span>
                            </p>
                        </div>

                        <p class><strong>Send them something!</strong></p>
                        <p class="buttons">
                        {actionButtons}
                        </p>
                    </div>
                    </div>
                    </div>



                  




            </div>

            <div className="onlineContainer">

            {otherUsers}
            </div>
            <div class="hero-footer" style={{paddingBottom: '50px'}}>
            {/* here lies foot */}

            </div>
          </section>
      )
  }
}


export default OnlineDemo;
