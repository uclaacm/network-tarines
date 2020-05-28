import React from 'react';
import Anime from 'react-anime';
import { faDesktop, faServer, faCircle, faComment, faChevronRight, faCommentDots, faBroadcastTower, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateSession from './UpdateSession';

class Recap extends React.Component {

    render() {
        return(
        <React.Fragment>
             <UpdateSession texts={["Can I order 50 packs of instant ramen?", "Ok.", "Add a ukulele to my cart?", "Ok."]}/>
         <UpdateSession texts={["Any updates yet?", "No", "How about now?", "No", "Now?", "Yes, you have 1 message", "Any more updates?", "No"]}/>
        </React.Fragment>
        )
    }
}

export default Recap;