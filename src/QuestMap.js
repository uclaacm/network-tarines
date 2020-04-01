import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faServer, faEnvelope, faBroadcastTower, faWifi, faComment} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// <span className="fa-layers fa-fw" style={{position: 'absolute', left: '320px', top: '105px'}}>
// <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
// </span>
// <Anime duration={1000} easing="linear" direction="alternate" loop={true} translateY={[0, -15]}>
//     <FontAwesomeIcon icon={faEnvelope} size="4x" style={{position: 'absolute', right: '240px', top:'20px'}} color="#96bfd4"></FontAwesomeIcon>
// </Anime>
{/* <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-11.5 rotate--30" style="font-weight:900">NEW</span> */}


class QuestMap extends React.Component {
  //desktop: 20, 165.
  //mail: 200, 80
    render() {
      return (
       <div className="questMapContainer">
          <span className="fa-layers fa-fw" style={{position: 'absolute', left: '320px', top: '125px'}}>
              <FontAwesomeIcon icon={faDesktop} size="8x" ></FontAwesomeIcon>
              <Anime scale={[0,1]} delay={800}>
              <span class="fa-layers fa-fw">
                <FontAwesomeIcon icon={faComment} size="7x" inverse transform="right-15 up-11"></FontAwesomeIcon>
                <p class="is-size-6" style={{position: 'absolute', left: '140px', top: '-108px'}} >
                  Are you there?
                  </p>
              </span>
              </Anime>
          </span>
          <Anime duration={1000} easing="linear" direction="alternate" loop={true} translateY={[-15]}>
              <FontAwesomeIcon icon={faWifi} size="4x"  style={{position: 'absolute', right: '365px'}} color="#96bfd4"></FontAwesomeIcon>
          </Anime>
          
          {/* <FontAwesomeIcon icon={faBroadcastTower} size="5x" style={{position: 'absolute', left: '350px'}}/>
          <FontAwesomeIcon icon={faServer} size="9x" style={{position: 'absolute', right: '20px', top: '90px'}}/> */}
      </div>
        )
    }
  }
  
  
  
  export default QuestMap;