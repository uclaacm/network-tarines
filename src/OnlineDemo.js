import React from 'react';
import Anime, {anime} from 'react-anime';
import { faDesktop, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { random } from 'animejs';

class OnlineDemo extends React.Component {

  render(){
      const otherUsers = []
      const others = this.props.others; //BACKEND.
      const name = this.props.name; //BACKEND

      for(const [index, value] of others.entries()){
          otherUsers.push(
          
            <span className="userContainer" style={     {left: '10px', top:'200px' }           }>
                <Anime easing="linear"  duration={1000} loop={true} direction="alternate" 
                    translateY={[Math.random()*10, Math.random()*10]} 
                    translateX={[Math.random()*10, Math.random()*10]}
                >
        
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-2 down-6" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGrinAlt} size="2x" transform="right-6 down-9" ></FontAwesomeIcon>
                    </span>
                    {/* BACKEND: Below should be a kid's name */}
                    <div><p style={{position: 'absolute', right: '9px', top: '50px'}}>{value}</p></div>
                </Anime>
            </span>
            )
      }


      return(
          <section class="hero is-fullheight is-primary" >
            <h2 class="subtitle" style={{padding: '40px'}}>Hooray, you did it! This is everyone connected right now with you :) </h2>
            <span className="userContainer" style={     {left: '30rem', top:'100px', textAlign: 'center' }           }>
                <Anime easing="linear"  duration={1000} loop={true} direction="alternate" 
                    translateY={[Math.random()*10, Math.random()*10]} 
                    translateX={[Math.random()*10, Math.random()*10]}
                >
        
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-2 down-6" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGrinAlt} size="2x" transform="right-6 down-9" ></FontAwesomeIcon>
                    </span>
                    {/* BACKEND: Below should be CURRENT USER'S name*/}
                    <div><p style={{position: 'absolute', right: '9px', top: '50px'}}>{name}</p></div>
                </Anime>
            </span>
            <div className="onlineContainer">

            {otherUsers}
            </div>
          </section>
      )
  }
}


export default OnlineDemo;