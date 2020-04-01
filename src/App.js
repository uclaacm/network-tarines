import React, { Component } from 'react';
import Anime from 'react-anime';
import './App.sass';
import './App.css';
import NameInput from './NameInput/NameInput';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CardAnimation from './CardAnimation';
import RequestDemo from './RequestDemo';
import SocketDemo from './SocketDemo';
import OnlineDemo from './OnlineDemo';
import QuestMap from './QuestMap';

function CodeSegment(props)
{
  return (
  <section id={props.id} class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h2 class="subtitle"> <strong>{props.stepNumber}</strong></h2>
          <div className="field has-addons">
            <div className="control">
              <input className="input is-warning" type="text" placeholder={props.codeWord} />
            </div>
            <a class="button is-warning">TODO!</a>
          </div>
        <div class="content">
          <p>{props.step}</p>
        </div>

        <div class="field is-grouped">
        <p class="control">
            <a class="button is-light" href={props.backPage}>
              Go back
            </a>
          </p>          
          <p class="control">
            <a class="button is-primary" href={props.nextPage}>
              Next
            </a>
          </p>
        </div>



      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child box notification is-warning">
        <div class="content has-text-left">
         <p><code>var xhr = new XMLHttpRequest();</code></p>
          <p><code>xhr.____("POST", 'https://uclaacm.github.io/network-tarines/index.html', true);</code></p>
          <p><code>xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");</code></p>
          <p><code>xhr.onreadystatechange = function() REST OF CODE GOES HERE. </code>
          </p>
        </div>
      </article>
    </div>
  </div>

  </div>
  </div>
  </section>

  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      others: ["Abigal", "Ismael", "Valeria", "Pragathi", "Larry", "Jessie"], //BACKEND
      show: false
    }
  }


  handleNameSubmit = (enteredName) => {
    this.setState({name: enteredName});
    //GO TO NEXT PAGE. 
    //BACKEND, give name to backend.
  }

  render(){
    return (
      <div className="App">
      <section class="hero is-warning is-fullheight">
        <div class="hero-head">
          <Anime opacity={[0, 1]} translateY={'1em'} delay={500}>
            <h1 class="title is-1" style={{padding: '20px'}}>Websites on the Internet</h1>
            </Anime>
        </div>
        <div class="hero-body">
          <div class="container">
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
      </section>
        
      
      <NameInput
          handleNameSubmit={(name) => this.handleNameSubmit(name)}
      />


      <div class="container">
      </div>
          <section id="CodeSection" class="section">
            <div class="container">
            <h2 class="subtitle"> Hi {this.state.name}! Please help us send your name to our website using code! </h2>

            <CodeSegment 
            id="Step1"
            nextPage="#Step2"
            backPage="#NameInput"
            stepNumber="First," 
            codeWord="open"
            step="We need to post a message to our website - type “open” to open a new message."  />


          


          <CodeSegment 
            id="Step2"
            nextPage="#Step3"
            backPage="#Step1"
            stepNumber="Next," 
            codeWord="DONE"
            step="Now we have to make sure that the last message was taken care of!
            Type  “DONE” so the code can check if the computer is done with the last message"  />





        <CodeSegment 
            id="Step3"
            nextPage="#"
            backPage="#Step2"
            stepNumber="Last but not LEAST" 
            codeWord={this.state.name}
            step="Last one: we’re trying to send your name, so enter your name here!" />

          </div>          
          
          </section>

 
        <RequestDemo/>
        <SocketDemo name={this.state.name}/>

        <OnlineDemo others={this.state.others} name={this.state.name}/>
        <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Built by UCLA's ACM TeachLA! 
            Uses  <a href="https://bulma.io/"><strong>Bulma</strong></a>, <a href="https://alain.xyz/libraries/react-anime"><strong>React-Anime</strong></a>. 
          </p>
        </div>
      </footer>


      </div>



    );
  }
}

export default App;