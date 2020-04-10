import React from 'react';
import Anime from 'react-anime';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CodeSegment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFilled: false
        }
    }


    handlePrevPage = (e) =>
    {
        this.props.onBackClick();
      this.setState({isFilled: false});
    }

    handleNextPage = (e) =>
    {
        this.props.onNextClick();
      this.setState({isFilled: false});
    }

    handleSubmit = (e) =>
    {
      this.setState({isFilled: true})
    }

    nextButton() {
        let currStep = this.props.idNum;
        if(currStep >2){
          return null;
        }
        return (
            <a class="button is-primary" onClick={this.handleNextPage} href={this.props.nextPage}>
            Next
             </a>
        )
      }


    render(){
        return(
            <section id="CodeSegment" class="hero is-fullheight">
                <div class="hero-body">
                     <div class="container">
                         <div class="tile is-ancestor">
                             <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <h2 class="subtitle"> <strong>{this.props.stepNumber}</strong></h2>
                                    <div class="content">
                                         <p>{this.props.step}</p>
                                    </div>
                                    <div className="field has-addons" style={{paddingBottom: '40px'}}>
                                        <div className="control">
                                            <input id="inputCode" className="input is-warning" type="text" value={this.props.inputCode} onChange={this.props.onInputChange} placeholder={this.props.codeWord}/>
                                        </div>
                                        <a class="button is-warning" onClick={this.handleSubmit}>Go!</a>
                                    </div>
                                     
                                    <div class="field is-grouped">
                                        <p class="control">
                                            <a class="button is-light" onClick={this.handlePrevPage} href={this.props.reference}>
                                                Go back
                                            </a>
                                        </p>          
                                        <p class="control">
                                             {this.nextButton()}
                                         </p>
                                    </div>
                                </article>
                            </div>
                            <div class="tile is-parent is-8">
                                <article class="tile is-child box notification is-warning">
                                    <div class="content has-text-left">
                                        <CodeChange1 idNum={this.props.idNum} isFilled={this.state.isFilled} codeWord={this.props.codeWord}/>
                                        <CodeChange2 idNum={this.props.idNum} isFilled={this.state.isFilled} codeWord={this.props.codeWord}/>
                                        <CodeChange3 idNum={this.props.idNum} isFilled={this.state.isFilled} codeWord={this.props.codeWord}/>                                                                  
                                    </div>
                                </article>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="hero-footer" style={{paddingBottom: '100px'}}>                    
                <DownArrow idNum={this.props.idNum} isFilled={this.state.isFilled}/>
                </div>
            </section>
        );
    }
}

function FillInBlank(props){

    if(props.isFilled)
    {
        return(
            <span style={{backgroundColor:"#a9f07d"}}>{props.text2}</span>
        )
    }
    return(
        <span style={{backgroundColor:"#ff0000"}}>{props.text}</span>
        
    )
}


function DownArrow(props)
{
  if(props.idNum != 3 || !props.isFilled)  {
  return null;
  }
  return(
      <React.Fragment>
    <p class="subtitle"> Hooray! Let's see our code in action! (Scroll Down)</p>
    <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '20%']}>
              <FontAwesomeIcon icon={faChevronDown} size="3x" ></FontAwesomeIcon>
              </Anime>
              </React.Fragment>
  )
}

function CodeChange1(props){
    if(props.idNum != 1)
    return null;

    return(
        <React.Fragment>
            <div>
            <p><code>var xhr = new XMLHttpRequest();</code></p></div>
            <p><code>xhr.<FillInBlank text="______" text2={props.codeWord} isFilled={props.isFilled}/>"POST", 'https://uclaacm.github.io/network-tarines/index.html', true);</code></p>
{/* E3604B */}
            <p><code>xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");</code></p>

            <div><p><code>xhr.onreadystatechange = function() {'{'} </code></p></div>

            <div style={{paddingLeft: '20px'}}><p><code>if (this.readyState === XMLHttpRequest.______ {'&&'} this.status === 200) {'{'} {'}'}</code></p></div>
            <p><code>{'}'}</code></p>
            <p><code>xhr.send("name=______{'&'}=ipsum");</code></p>

        </React.Fragment>
    )    
}

function CodeChange2(props){
    if(props.idNum != 2)
    return null;
    
    return(
        <React.Fragment>
            <div>
            <p><code>var xhr = new XMLHttpRequest();</code></p></div>
            <p><code>xhr.open("POST", 'https://uclaacm.github.io/network-tarines/index.html', true);</code></p>

            <p><code>xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");</code></p>

            <div><p><code>xhr.onreadystatechange = function() {'{'} </code></p></div>

            <div style={{paddingLeft: '20px'}}><p><code>if (this.readyState === XMLHttpRequest.<FillInBlank isFilled={props.isFilled} text="______" text2={props.codeWord}/> {'&&'} this.status === 200) {'{'} {'}'}</code></p></div>
            <p><code>{'}'}</code></p>
            <p><code>xhr.send("name=______{'&'}=ipsum");</code></p>

        </React.Fragment>
    )    
}

function CodeChange3(props){
    if(props.idNum != 3)
    return null;
    
    return(
        <React.Fragment>
            <div>
            <p><code>var xhr = new XMLHttpRequest();</code></p></div>
            <p><code>xhr.open("POST", 'https://uclaacm.github.io/network-tarines/index.html', true);</code></p>

            <p><code>xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");</code></p>

            <div><p><code>xhr.onreadystatechange = function() {'{'} </code></p></div>

            <div style={{paddingLeft: '20px'}}><p><code>if (this.readyState === XMLHttpRequest.DONE {'&&'} this.status === 200) {'{'} {'}'}</code></p></div>
            <p><code>{'}'}</code></p>
            <p><code>xhr.send("name=<FillInBlank isFilled={props.isFilled} text="______" text2={props.codeWord} />{'&'}=ipsum");</code></p>

        </React.Fragment>
    )    
}



export default CodeSegment;
