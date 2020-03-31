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
  <section id="CodeSegment" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">


    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h2 class="subtitle"> <strong>{props.stepNumber}</strong></h2>

          <div className="field has-addons">
            <div className="control">
              <input id="inputCode" className="input is-warning" type="text" value={props.inputCode} onChange={props.onInputChange} placeholder={props.codeWord}/>
            </div>
            <a class="button is-warning">TODO!</a>
          </div>
        <div class="content">
  <p>{props.step}</p>
        </div>

        <div class="field is-grouped">
        <p class="control">
            <a class="button is-light" onClick={props.onBackClick} href={props.reference}>
              Go back
            </a>
          </p>          
          <p class="control">
            <a class="button is-primary" onClick={props.onNextClick} href={props.nextPage}>
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
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: "",
      others: ["Abigal", "Ismael", "Valeria"], //update backend
      show: false,
      segmentState: 1,
      input: "",
      refer: "#NameInput"
    } 
  }


  handleNameSubmit = (enteredName) => {
    this.setState({name: enteredName});
    //GO TO NEXT PAGE. 
    //BACKEND
  }

  handleNextClick = (e) =>
  {
    if(this.state.segmentState === 0)
    {
      this.setState({segmentState: (this.state.segmentState+2)})
    }
    else
    {
      this.setState({segmentState: (this.state.segmentState+1)})
    }
    this.setState({input : ""})
  }

  handleBackClick = (e) =>
  {
    if(this.state.segmentState === 1)
    {
      this.setState({refer : "#NameInput"})
    }
    else
    {
      this.setState({refer : "#CodeSegment"})
    }
    this.setState({segmentState : (this.state.segmentState-1)})
    //this.handleChangeReference();
    //this.setState({name : this.state.segmentState})
  }

  handleInputChange = (e) =>
  {
    this.setState({input : e.target.value})
  }


  render()
  {
    let segment = (
      <CodeSegment 
        //id="Step1"
        nextPage="#CodeSegment"
        stepNumber="First," 
        codeWord="open"
        step="We need to post a message to our website - type “open” to open a new message." 
        inputCode={this.state.input}
        reference = {this.state.refer}
        onNextClick = {this.handleNextClick}
        onBackClick = {this.handleBackClick}
        onInputChange = {this.handleInputChange}
        /> );
    
    if(this.state.segmentState === 2)
    {
      segment = (
      <CodeSegment 
            //id="Step2"
            nextPage="#CodeSegment"
            backPage="#CodeSegment"
            stepNumber="Next," 
            codeWord="DONE"
            step="Now we have to make sure that the last message was taken care of!
            Type  “DONE” so the code can check if the computer is done with the last message"
            inputCode={this.state.input}
            reference = {this.state.refer}
            onNextClick = {this.handleNextClick}
            onBackClick = {this.handleBackClick}
            onInputChange = {this.handleInputChange}  />);
    }
    else if(this.state.segmentState === 3)
    {
      segment = (
        <CodeSegment 
        //id="Step3"
        //nextPage="#"
        backPage="#CodeSegment"
        stepNumber="Last but not LEAST" 
        codeWord={this.state.name}
        step="Last one: we’re trying to send your name, so enter your name here!"
        reference = {this.state.refer}
        inputCode={this.state.input}
        onBackClick = {this.handleBackClick}
        onInputChange = {this.handleInputChange} />);
    }

    return (
      <div className="App">
      <section id="intro" class="hero is-warning is-fullheight">
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
            {segment}
            {/*<CodeSegment 
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
            step="Last one: we’re trying to send your name, so enter your name here!" />*/}

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