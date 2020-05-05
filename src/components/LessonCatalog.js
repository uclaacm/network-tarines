import React from 'react';
import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LessonCatalog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFilled: false
        }
    }

    LessonCard(){
        return(
            <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Lesson Title</p>
            <h2 class="subtitle"> Description goes here</h2>
             
            <div class="field is-grouped">
                <p class="control">
                    <a class="button is-primary" onClick={this.handlePrevPage}>
                        Let's go!
                    </a>
                </p>          
            </div>
        </article>
        </div>
        );
    }


    render(){
        return(
            <section class="hero is-fullheight">
                <div class="hero-head">
               
                </div>
                <div class="hero-body">
                     <div class="container">

                     <p class="title">Let's start!</p>
                         <div class="tile is-ancestor">
                             
                                 {this.LessonCard()}
                                 {this.LessonCard()}
                                 {this.LessonCard()}
                        
                        </div>
                        
                    </div>
                </div>
                
            </section>
        );
    }
}





export default LessonCatalog;
