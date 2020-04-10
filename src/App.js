import React, { Component } from 'react';
import Anime from 'react-anime';
import './App.sass';
import './App.css';
import NameInput from './NameInput/NameInput';
import CodeSegment from './CodeSegment';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import RequestDemo from './RequestDemo';
import SocketDemo from './SocketDemo';
import OnlineDemo from './OnlineDemo';
import QuestMap from './QuestMap';
import io from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props);
    this.socket = io("http://localhost")
    this.start_socket()
      
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: "",
      prev_name: "",	
      others: ["Abigal", "Ismael", "Valeria", "Pragathi", "Larry", "Jessie"], //BACKEND
      show: false,
      segmentState: 1,
      input: "",
      refer: "#NameInput",
      socketState: ""
    } 
  }

    
    start_socket(){
	var app = this
	this.socket.on('users', function(data){
	    /**
	       Possible Reponses:
	       * {err: "Username not allowed"} ********************************************** # to user error socket                                                                       
	       * {success: "User Added"}                                                                                                                                         
	       * {users: (userlist)}        
	       * {err: "Username not found"} ************************************************                                  
	       * {sender: (sender), message: (message)} *************************************            
	       * {err: "Could not send message"}) *******************************************                                      
	       **/
    // if(data.success){
    //   app.setState({socketState: 'success'});
    // }
    // else if (data.success){
    //   app.setState({socketState: 'err'});
    // }

	    if(data.users){
		app.setState({others: data.users})
		console.log("Received list: "+data.users)
	    }
	    
	})
    }
     
    handleNameSubmit = (enteredName) => {
       this.setState({name: enteredName}); //BACKEND
    //GO TO NEXT PAGE. 
	this.socket.emit("user connected", {user: enteredName})
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
  }

  handleInputChange = (e) =>
  {
    this.setState({input : e.target.value})
  }


  render()
    {
    let segment = (
      <CodeSegment 
        idNum="1"
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
            idNum="2"
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
        idNum="3"
        backPage="#CodeSegment"
        stepNumber="Last but not LEAST" 
        codeWord={this.state.name}
        step="Last one: we’re trying to send your name, so enter your name here!"
        reference = {this.state.refer}
        inputCode={this.state.input}
        onBackClick = {this.handleBackClick}
        onInputChange = {this.handleInputChange} 
        enteredName={this.name}
        />);
    }
    return (
      <div className="App">
      <section id="intro" class="hero is-warning is-fullheight">
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
            {segment}

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
