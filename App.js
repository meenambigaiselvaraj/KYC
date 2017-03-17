import React, { Component } from 'react';
import './App.css';
import { Link, browserHistory } from 'react-router'
import Header from '../header/Header';
import { Button, Textfield ,Grid, Cell} from 'react-mdl';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registerSuccess: false
    };
  }

  page() {
     
    return;

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var aadhar = document.getElementById('aadhar').value;
    var pan = document.getElementById('pan').value;

    if (name === "") {
      alert('Enter your name');
      return false;
    }

     if ((name.length < 3) || (name.length > 20)) {
      alert("Name must be 3 to 20 Character");
      return
    }

     if (!isNaN(name)) {
      alert("Please Enter Only Characters");
      return
    }

       var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    var b = emailfilter.test(email);
    if (b === false) {
      alert("Please Enter a valid Mail ID");
      return
    }

    if ((phone === "") && ((phone.length < 10) || (phone.length < 10))) {
      alert("please Enter a Phone Number with 10 Digit (Like : 9566137117) ");
      return
    }

     if (isNaN(phone)) {
      alert("Enter the valid Phone Number (Like : 9566137117) ");
      return
    }

    if ((pan === "") && ((pan.length < 10) || (pan.length < 10))) {
      alert("please Enter a Pan Number with 10 Digit (Like : 9566137117) ");
      return
    }

    else if (isNaN(pan)) {
      alert("Enter the valid Pan Number (Like : 9566137117) ");
      return
    }

    if ((aadhar === "") && ((aadhar.length < 12) || (aadhar.length < 12))) {
      alert("please Enter a Aadhar Number with 12 Digit (Like : 956613711789) ");
      return
    }

     if (isNaN(aadhar)) {
      alert("Enter the valid Aadhar Number (Like : 956613711789) ");
      return
    }

    let getUserData = {
      "name": name,
      "email": email,
      "phone": phone,
      "aadhar": aadhar,
      "pan": pan
    };
    this.setState({ userData: getUserData });
    this.setState({ registerSuccess: true });

    // browserHistory.push("Header/" + name + "/" + email + "/" + phone + "/" + aadhar + "/" + pan);
  }

  sign() {
    console.log('signed up')
  }
  setData() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var aadhar = document.getElementById('aadhar');
    var pan = document.getElementById('pan');

    this.setState({ name, email, phone, aadhar, pan })
  }

  

  render() {
    if (this.state.registerSuccess === true) {
      return <Header userData={this.state.userData} />
    }
    return (
      <div className="appBody" >
           <div className="appHeader">
            <label > APPLICATION FORM </label> <br/>
            </div>
            <div className="appAlign" >
              <Grid >
            <Cell col={4}></Cell>
            <Cell className="appForm" col={4}>
        
            NAME     :<Textfield 
            
              onChange={() => { this.setState({ name:  }) }}
              label="Text..."
              style={{ width: '200px'}}
            /><br/>
            EMAIL ID :<Textfield
              onChange={() => { }}
              label="Text..."
              style={{ width: '200px' }}
            /><br/> 
            PHONE NO :<Textfield
              onChange={() => { }}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              label="Number..."
              style={{ width: '200px' }}
            /><br/>
            AADHAR NO:<Textfield
              onChange={() => { }}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              label="Number..."
              style={{ width: '200px' }}
            /><br/>
            PAN NO   :<Textfield
              onChange={() => { }}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              label="Number..."
              style={{ width: '200px' }}
            /><br/>
            
            <div className="appButton"><Button onClick={() => this.page()} raised colored class="appButton">Submit</Button>
            </div>
        </Cell>
        <Cell col={4}></Cell>
       </Grid> </div>
      </div>
   
    );
  }
}

export default App;
