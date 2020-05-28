import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faServer, faCircle, faComment, faChevronRight, faCommentDots, faBroadcastTower, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UpdateSession extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currStep: 1,
      stepDelays: [500, 500, 2000, 4000, 3000],
      

    }
    }

    renderMessage = (message) =>
    {
        return(
            <div class="box">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>{message}</p>
                        </div>
                    </div>
                </article>
            </div>           
        )
    }

    render(){
        const texts = this.props.texts;
        const msg_left = [];
        const msg_right = [];
        for(const [index, txt] of texts.entries())
        {
            if(index % 2 == 0)
            {
             msg_left.push(
           this.renderMessage(txt))
            }
            else{
                msg_right.push(
                    this.renderMessage(txt)
                )
            }
        }
        return(
            <section> 
              <div class="hero-body" >
              <div class="columns is-mobile is-centered">
              <div class="column">
              <Anime opacity={[0, 1]} translateY={(e, i) =>(i+1)*40} delay={(e, i) => i * 2000}>                 
              {msg_left}
                </Anime>
              </div>

              <div class="column">
              <Anime opacity={[0, 1]} translateY={(e, i) =>(i+1)*40+40} delay={(e, i) => i * 2000 + 1000}>                  
              {msg_right}
                </Anime>
              </div>
            
            </div>
             
            </div>
            </section>
                
         
        )
    }
}

export default UpdateSession;