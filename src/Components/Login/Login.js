import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    
  constructor(props) {
    super(props)

    this.state = {
        NameHandler : '' ,
        EmailHandler : '' ,
        PhoneHandler : '' ,
        submitted : false ,
        allValid : false ,
    }

    this.NameInputHandler = this.NameInputHandler.bind(this)
    this.EmailInputHandler = this.EmailInputHandler.bind(this)
    this.PhoneInputHandler = this.PhoneInputHandler.bind(this)
    this.btnClickHandler = this.btnClickHandler.bind(this)
  }  

  NameInputHandler(event) {
    this.setState({
        NameHandler : event.nativeEvent.target.value
    })
  }

  EmailInputHandler(event) {
    this.setState({
        EmailHandler : event.nativeEvent.target.value
    })
  }

  PhoneInputHandler(event) {
    this.setState({
        PhoneHandler : event.nativeEvent.target.value
    })
  }

  btnClickHandler(event) {
    event.preventDefault()

    this.setState({
        submitted : true ,
    })

    if (this.state.NameHandler && this.state.EmailHandler && this.state.PhoneHandler) {
        this.setState ({
            allValid : true
        })

        setTimeout(() => {
            this.setState ({
                allValid : false
            })
        } , 3000)
    }
  }

  render() {
    return (
      <>  

      {this.state.allValid &&
      <div className='Login-successful-box'>
        you've logged in successfully 
      </div>
      }

      <div className='Login-wrapper'>

        <div className='Login-title'>Login</div>

        <div className='LoginInput-wrapper'>
            <input id='Name' type="text" placeholder="Name" value={this.state.NameHandler} onChange={(event) => this.NameInputHandler(event)}/>
            {this.state.submitted && !this.state.NameHandler &&
            <span>Required</span>
            }
        </div>
        <div className='LoginInput-wrapper'>
            <input id="Email" type="text" placeholder="Email" value={this.state.EmailHandler} onChange={(event) => this.EmailInputHandler(event)}/>
            {this.state.submitted && !this.state.EmailHandler &&
            <span>Required</span>
            }
        </div>
        <div className='LoginInput-wrapper'>
            <input id="phone" type="text" placeholder="phone" value={this.state.PhoneHandler} onChange={(event) => this.PhoneInputHandler(event)}/>
            {this.state.submitted && !this.state.PhoneHandler &&
            <span>Required</span>
            }
        </div>

        <div className='Login-btn-wrapper'>
            <button onClick={(event) => this.btnClickHandler(event)}>Confirm</button>
        </div>

      </div>
      </>  
    )
  }
}