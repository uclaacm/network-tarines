import React from 'react';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Anime from 'react-anime';

class NameInput extends React.Component {
    constructor(){
        super();
        this.state = {
          name: ' ',
          userStatus: ' ',
          isSuccess: false,
          successText: 'Cool Name! Now scroll down!',
          errorText: 'Sorry, please try another name.',

        }

    }


    // * {err: "Username not allowed"} ********************************************** # to user error socket                                                                       
    // * {success: "User Added"}                                                                                                                                         
    // * {users: (userlist)} 
    // * 
    handleChange = (e) =>
    {
      this.setState({name: e.target.value});
      if(this.props.socketState == "success")
      {
        this.setState({userStatus: this.state.successText})
      }
      else if (this.props.socketState == "err")
      {
        this.setState({userStatus: this.state.errorText})
      }
    }

    handleSubmit = (e) =>
    {
      this.props.handleNameSubmit(this.state.name);
      if(this.props.socketState != 'success')
      {
        this.setState({userStatus: this.state.errorText});
      }

    }

    renderSubmitButton = () => {
        return(
        <div className="buttons is-centered">
        <a className="button is-warning is-rounded is-large" type="submit" onClick={this.handleSubmit}> Submit</a>
        </div>
        );
    }



    render(){
        return (
          <section class="hero is-fullheight" id="NameInput" > 
              <div class="hero-body">
            <div class="container has-text-centered">
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
            </div>
            <div class="hero-foot">
              
            <p class="text">{this.state.userStatus}</p>
            <DownArrow isSuccess="isSuccess"/>
            </div>
            </section>
        );

    }
}

function DownArrow(props)
{
  if(!props.isSuccess)
  return null;
  return(
    <Anime easing="linear" loop={true} direction="alternate" opacity={['100%', '20%']}>
              <FontAwesomeIcon icon={faChevronDown} size="3x" ></FontAwesomeIcon>
              </Anime>
  )
}

export default NameInput;