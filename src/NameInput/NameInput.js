import React from 'react';
//import bulma
class NameInput extends React.Component {
    constructor(){
        super();
        this.state = {name: ' '}

        // this.handleChange = (e) => {this.changeValue(e); };
        // this.handleSubmit = () => { this.clickedSubmit(); };
    }

    handleChange = (e) =>
    {
      this.setState({name: e.target.value});
    }

    handleSubmit = (e) =>
    {
      this.props.handleNameSubmit(this.state.name);
    }

    renderSubmitButton = () => {
        return(
        <div className="buttons is-centered">
        <a className="button is-warning is-rounded is-large" onClick={this.handleSubmit}> Submit</a>
        </div>
        );
    }

    render(){
        return (
            <section id="NameInput" class="section">
            <div class="container">
              <h1 class="title">Enter your name</h1>
 
 
              <div className="field">
              <div className="control">
                <input className="input is-rounded is-warning is-medium" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Type your name here!" />
              </div>
            </div>  


            <div>
            {this.renderSubmitButton()}
            </div>

          </div>
            </section>
        );

    }
}

export default NameInput;