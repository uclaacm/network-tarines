import React from 'react';
import Anime, {anime} from 'react-anime';
import { faDesktop, faSpinner, faServer, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CardAnimation extends React.Component {
    constructor(){
        super();
        this.state = {step: 1}
    }




    animation()
    {
        if(this.state.step == 1){
            return(
               <div>
                <Anime easing="easeOutCirc"
                    duration={700}
                    direction="normal"
                    loop={false}
                    translateX={['-100','200']}
                    >
                    <div className="message"/>                 
                </Anime>
                <Anime
                    easing="linear"
                    duration={1000}
                    direction="alternate"
                    loop={true}
                    opacity={['100%', '50%']}
                    >
                    <div className="message"/>                 
                </Anime>
                
                </div>
            )
        }
        else if (this.state.step == 2){
            return(
                <Anime easing="linear"
                    duration={1100}
                    direction="normal"
                    loop={false}
                    translateX={['-100','250']}
                    opacity={['90%', '0%']}
                    >
                    <div className="message"/>                 
                </Anime>
            )
        }
        else if (this.state.step == 3){
            return(
                <Anime easing="linear"
                    duration={1100}
                    direction="normal"
                    loop={true}
                    translateX={['-100','250']}
                    opacity={['90%', '0%']}
                    >
                    <div className="message"/>                 
                </Anime>
            )
        }
    }
    /*three animations, each with 2 states. */
    render(){

        return(
        <div class="container" className="codeAnimateContainer">

        <span className="userContainer">
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
              <FontAwesomeIcon icon={faComment} size="3x" inverse transform="right-40 up-20"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faSpinner} size="2x" pulse  transform="right-64 up-31"></FontAwesomeIcon>
            </span>
            {this.animation()}
            <FontAwesomeIcon icon={faServer} size="10x" className="serverContainer"/>
        </span>
        </div>
        )
    }
}


export default CardAnimation;