import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import './App.css';
import NameInput from './NameInput/NameInput';
import Animation from './Animations';
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import { TransitionGroup, Transition } from 'react-transition-group';
//import anime from '../node_modules/animejs/lib/anime.es.js';
//'font-awesome/css/font-awesome.min.css';
//import { faLemon } from '@fortawesome/free-solid-svg-icons';

//const Anime = ReactAnime.default;

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


// var myAnimation = anime({
//   targets: ['.blue', '.green'],
//   translateX: '13rem',
//   rotate: 180,
//   borderRadius: '8px',
//   duration: 2000,
//   loop: true
// });


//UNDERSTAND CANVAS



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      others: ["Abigal", "Ismael", "Valeria"], //update backend
      show: false
    }
  }


  handleNameSubmit = (enteredName) => {
    this.setState({name: enteredName});
    //GO TO NEXT PAGE. 
    //BACKEND
  }



  render(){
    return (
      <div className="App">
      <section class="hero is-warning is-fullheight">
        <div class="hero-head">
          <h1 class="title">network-tarines</h1>


        </div>
        <div class="hero-body">
          <div class="container">
          <Animation></Animation>
            <h1 class="title">
              Hey there!
            </h1>
            <h2 class="subtitle">
            The internet can be a bit tricky, so we’re here to help you figure out how it works.
  Are you <a href="https://teachla.uclaacm.com/">
              ready? 
            </a>
            </h2>
            <i class="fas fa-lemon"></i>

            <div className="buttons is-centered">
                <a className="button is-link is-rounded is-large" href="#NameInput">Let's go!</a>
              </div>

          </div>
        </div>
      </section>
        

      <NameInput
          handleNameSubmit={(name) => this.handleNameSubmit(name)}
      />

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


          <section class="hero is-warning is-fullheight">
          <h1 class="title has-text-centered">Demo Animation goes here.</h1>


          {/* <div class="blue" style={styles.circle} />
           <div class="green"> green </div> */}


        {/* <Anime easing="easeOutElastic"
           loop={true}
           duration={1000}
           direction="alternate"
           delay={(el, index) => index * 240}
           translateX='13rem'
           scale={[.75, .9]}>
        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
      </Anime> */}


          <span class="icon">
            <i className="fa fa-desktop"></i>
          </span>

          

          </section>


                <div className="field">
                  <p className="control">
                    <span className="select is-centered">
                      <select>
                        <option>Select dropdown</option>
                        <option>{this.state.others[0]}</option>
                        <option>{this.state.others[1]}</option>
                        <option>{this.state.others[2]}</option>                                                
                      </select>
                    </span>
                  </p>
                </div>

        <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Built by UCLA's ACM TeachLA! 
            Uses  <a href="https://bulma.io/"><strong>Bulma</strong></a>. 
          </p>
        </div>
      </footer>


      </div>



    );
  }
}

// const styles = {
//   circle: {
//     width: 64,
//     hieght: 64,
//     borderRaiuds: '100%',
//   },
// };

export default App;


/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */