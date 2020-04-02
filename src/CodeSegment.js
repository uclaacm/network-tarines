import React from 'react';

class CodeSegment extends React.Component {
    constructor(){
        super();
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
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input id="inputCode" className="input is-warning" type="text" value={this.props.inputCode} onChange={this.props.onInputChange} placeholder={this.props.codeWord}/>
                                        </div>
                                        <a class="button is-warning">TODO!</a>
                                    </div>
                                     <div class="content">
                                         <p>{this.props.step}</p>
                                    </div>
                                    <div class="field is-grouped">
                                        <p class="control">
                                            <a class="button is-light" onClick={this.props.onBackClick} href={this.props.reference}>
                                                Go back
                                            </a>
                                        </p>          
                                        <p class="control">
                                             <a class="button is-primary" onClick={this.props.onNextClick} href={this.props.nextPage}>
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
                                        <p><code>xhr.onreadystatechange = function() REST OF CODE GOES HERE. </code></p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CodeSegment;