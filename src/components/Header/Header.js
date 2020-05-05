import React from 'react';
import Anime from 'react-anime';
import QuestMap from './QuestMap';
import logoTLA from '../../img/logoTLA.svg';
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }



    render(){
        return(
        <section class="hero is-warning is-medium">
          <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                         <div class="navbar-brand">
                            <a class="navbar-item">
                                <a href="https://teachla.uclaacm.com" ><img src={logoTLA} height={"200"} alt="ACM TeachLA"/> </a>
                             </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="hero-body">
                 <div class="container has-text-centered">
                    <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1300}>


                    <QuestMap/>
                    <h1 class="title" style={{padding: '10px'}}>
                    Hey there!
                    </h1>

                    <h2 class="subtitle">
                    The internet can be a scary place, so <a href="https://teachla.uclaacm.com/">we</a>’re here to help you figure out how it works.
                    Are you ready? </h2>

                    <div className="buttons is-centered" style={{padding: '20px'}}>
                    <a className="button is-link is-rounded is-large" href="#NameInput">Let's go!</a>
                    </div>
                    </Anime>
                </div>
             </div>
            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                    <li class="is-active"><a>Overview</a></li>
                    <li><a>Lesson 1 (Soon!) </a></li>
                    <li><a>Lesson 2 (In the works) </a></li>
                    <li><a>Lesson 3 (Being Cleaned) </a></li>
                    </ul>
                </div>
                </nav>
            </div>
        </section>

        );
    }
}





export default Header;
