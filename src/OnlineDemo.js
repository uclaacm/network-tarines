import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faGrinAlt, faServer, faCookie, faHandPaper, faHandScissors, faHandRock, faPaperPlane, faWifi} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class OnlineDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // actionNames: ['Rock', 'Paper', 'Scissors', 'a Cookie', 'a Plane'],
            // actionSymbols: [faHandRock, faHandPaper, faHandScissors, faCookie, faPaperPlane],
            // actionColors: []
            message: "",
            displayedMessage: "", //change upon end of plane animation
            hasSentMessage: false,
            sentCount: 0,
            //eceivedUsers: [],
            receivedMessages: ["i'm abby", "is this mael", "value this!", "pragmatic man, who do you think u are", "", ""]
            //^^ messages from each user: Backend!
        }
    }

    handleChange = (e) =>
    {
      this.setState({message: e.target.value});
    }

    handleSubmit = (e) =>
    {
    //   send to backend as user, msg
    //project onto screen
        this.setState({hasSentMessage: true})
        this.setState({displayedMessage: this.state.message})
    }

    renderSubmitButton = () => {
        
        return(
            <p class="buttons">
                <button class="button is-medium is-rounded" type="submit" onClick={this.handleSubmit}>
                    <span>Send!</span> 
                    <span class="icon is-small">
                        <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </span>
                </button>
            </p>
        );
    }

    renderServer = () => {
            return(
                <span className="fa-layers fa-fw">
                 <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '10%']}>
                        <FontAwesomeIcon icon={faWifi} color="#d5f5ee" size="5x" flip="vertical" transform="down-12" ></FontAwesomeIcon>
                </Anime>
                <FontAwesomeIcon icon={faServer} size="6x" transform="" ></FontAwesomeIcon>
            </span>
            );
    }

    // renderUser = (name) => {
    //     return(
    //         <div className="userContainer" style={     {left: '40%', top:'100px', textAlign: 'center' }           }>
    //                     <Anime easing="linear"  duration={1000} loop={true} direction="alternate" 
    //                         translateY={[Math.random()*10+3, Math.random()*10+3]} 
    //                         translateX={[Math.random()*10+3, Math.random()*10+3]}
    //                     >        
    //                         <span className="fa-layers fa-fw">
    //                             <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-2 down-6" ></FontAwesomeIcon>
    //                             <FontAwesomeIcon icon={faGrinAlt} size="2x" transform="right-6 down-9" ></FontAwesomeIcon>
    //                         </span>
    //                         <p>{this.state.message}</p>
                                            
    //                         <div><p style={{position: 'absolute', right: '9px', top: '50px'}}>{name}</p></div>
    //                     </Anime>
                          
    //                 </div>
    //     );
    // }

    renderUser1 = (value, message, x, y) => {
        

        if(value == this.props.name)
        {
            x = 100;
            y = -340
        }

        return(

            <Anime easing="linear"  duration={1000} loop={true} direction="alternate" 
                    translateY={[Math.random()*10+1, Math.random()*10+1]} 
                    translateX={[Math.random()*10+1, Math.random()*10+1]}
                >
            <div className="userContainer" style={     {left: x, top:y }           }>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-6 down-8" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGrinAlt} size="2x" transform="left-1 down-14" ></FontAwesomeIcon>
                    </span>                    
                    <div><p style={{position: 'relative', top: '-40px'}}>{value}</p></div>
                    <div><p style={{position: 'relative', top: '50px', fontSize: '14px'}}>{message}</p></div>
                
            </div>
            </Anime>
    );
    }

    renderMessageCenter = () => {
        return(
            <div class="container" className="messageCenterContainer">
                    <div class="card">
                    <div class="card-content">                        
                    <h2>Say something!</h2>
                    <div class="control">
                    <textarea class="textarea has-fixed-size" placeholder="Say something!" type="text" onChange={e => this.handleChange(e)} value={this.state.message} ></textarea>
                    </div>
                        {this.renderSubmitButton()}
                    </div>
                    </div>
            </div>

        )
    }

    renderPlane = () => {
       
        if(this.state.hasSentMessage)
        {
            if(this.state.sentCount > 1400)
            {
                this.setState({hasSentMessage: false})
                this.setState({sentCount: 0})
            }
//            this.setState({sentCount: this.state.sentCount + 1})
        return(
            <React.Fragment>
            <span className="fa-layers fa-fw">
             {/* <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '10%']}>
                    
            </Anime> */}
            <Anime easing="linear" duration={1400} loop={false} translateX={500} translateY={-300} opacity={0}>
            <FontAwesomeIcon icon={faPaperPlane} size="4x" transform={"up-20 left-25"}></FontAwesomeIcon>
            </Anime>
        </span>
        </React.Fragment>
        );
        }
        return(<p>No Plane</p>);
    }
    
  render(){
      const otherUsers = [];
      //const otherNames = [];
      const others = this.props.others; 
      const name = this.props.name; 


    // const actionButtons = []

    //   for(const [index, value] of this.state.actionSymbols.entries()){
    //     actionButtons.push(
    //         <button class="button is-medium" onClick={this.handleAction}>
    //             <span class="icon is-small">
    //                 <FontAwesomeIcon icon={value}></FontAwesomeIcon>
    //                 </span>
    //         </button>
    //     )
    //   }

      for(const [index, value] of others.entries()){
      if(index != 0) {
        let xSign = Math.random() < 0.5 ? -1 : 1;
        let ySign = Math.random() < 0.5 ? -1 : 1;
        
        let x = xSign*(index)*30 + 1;
        let y = ySign*(index/2)*70;

          otherUsers.push(
            this.renderUser1(value, this.state.receivedMessages[index], x, y));
            
      }
    }


      return(
          <section class="hero is-fullheight is-primary" >
              <div class="hero-head">
                    <h2 class="subtitle" style={{padding: '40px'}}>Hooray, you did it! This is everyone connected right now with you. Let's talk with them! </h2>
                    {this.renderServer()}
            </div>
            <div class="hero-body">
            {this.renderMessageCenter()}
                {this.renderUser1(name, this.state.displayedMessage)}
                {this.renderPlane()}
                    {otherUsers}
                
            </div>

            <div class="hero-footer" style={{paddingBottom: '50px'}}>
            </div>
          </section>
      )
  }
}


export default OnlineDemo;
