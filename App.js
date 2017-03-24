import React, { Component } from 'react';
import './App.css';
//import { Link, browserHistory } from 'react-router'
import Header from '../header/Header';
import { Button, Textfield, Grid, Cell, Dialog, DialogTitle } from 'react-mdl';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      aadhar: "",
      pan: "",
      registerSuccess: false
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  page() {

    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.phone);
    console.log(this.state.aadhar);
    console.log(this.state.pan);

    if (this.state.name === "") {
      alert('Enter your name');
      return false;
    }

    if (((this.state.name).length < 3) || ((this.state.name).length > 20)) {
      alert("Name must be 3 to 20 Character");
      return
    }

    var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    var b = emailfilter.test(this.state.email);
    if (b === false) {
      alert("Please Enter a valid Mail ID");
      return
    }

    if ((this.state.phone).length === "")  {
      <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Phone Number Should Not Be Empty)</DialogTitle>
        </Dialog>
      </div>
      return
    }
    if((this.state.phone).length > 10 ){
      <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>please Enter a Phone Number with 10 Digit (Like : 9566137789</DialogTitle>
        </Dialog>
      </div>
      return
    }
     if((this.state.phone).length < 10 ){
       <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>please Enter a Phone Number with 10 Digit (Like : 9566137789)</DialogTitle>
        </Dialog>
      </div>
      return
    }
    if ((this.state.aadhar).length === "")  {
      <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Aadhar Number Should Not Be Empty</DialogTitle>
        </Dialog>
      </div>
      return
    }
    if((this.state.aadhar).length > 12 ){
      <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>please Enter a Aadhar Number with 12 Digit (Like : 956613237789)</DialogTitle>
        </Dialog>
      </div>
      return
    }
     if((this.state.aadhar).length < 12 ){
       <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>please Enter a Aadhar Number with 10 Digit (Like : 956612337789)</DialogTitle>
        </Dialog>
      </div>
      return
    }
    if ((this.state.pan).length === "")  {
      <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Pan Number Should Not Be Empty</DialogTitle>
        </Dialog>
      </div>
      return
    }
    if((this.state.pan).length > 10 ){
     <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>please Enter a Pan Number with 10 Digit (Like : 9566137789)</DialogTitle>
        </Dialog>
      </div>
  
    }
     if((this.state.pan).length < 10 ){
       <div> <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>please Enter a Pan Number with 10 Digit (Like : 9566137789)</DialogTitle>
        </Dialog>
      </div>
      return
    }

    

    let getUserData = {
      "name": this.state.name,
      "email": this.state.email,
      "phone": this.state.phone,
      "aadhar": this.state.aadhar,
      "pan": this.state.pan,
     
    };
    this.setState({ userData: getUserData });
    this.setState({ registerSuccess: true });

    // browserHistory.push("Header/" + name + "/" + email + "/" + phone + "/" + aadhar + "/" + pan);
  }

  render() {
    if (this.state.registerSuccess === true) {
      return <Header userData={this.state.userData} />
    }

    return (

      <div className="appBody" >
        <div className="appHeader">
          <label > APPLICATION FORM </label> <br />
        </div>
        <div className="appAlign" >
          <Grid >
            <Cell col={4}></Cell>
            <Cell className="appForm" col={4}>

              <Textfield
                onChange={(valName) => { this.setState({ name: valName.target.value }) } }
                label="Name"
                floatingLabel
                pattern="-?[a-z]*(\.[A-Z]+)?"
                error="Name should be Alphabetic!"
                style={{ width: '280px' }}
                value={this.state.name}
                /><br />
              <Textfield
                onChange={(valEmail) => { this.setState({ email: valEmail.target.value }) } }
                label="Email"
                floatingLabel
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                error="Email should contain '@' and '.' symbol"
                style={{ width: '280px' }}
                value={this.state.email}
                /><br />
              <Textfield
                onChange={(valPhone) => { this.setState({ phone: valPhone.target.value }) } }
                label="Phone Number"
                floatingLabel
                //pattern="-?[0-9]*(\.[0-9]+)?"
                //error="Input is not a number!"
                pattern="(^\d{10}$)"  
                error="Phone Numbr must be 10 digit!"
                style={{ width: '280px' }}
                value={this.state.phone}
                /><br />
              <Textfield
                onChange={(valAadhar) => { this.setState({ aadhar: valAadhar.target.value }) } }
                label="Aadhar Number"
                floatingLabel
                pattern="^\d{12}$"  
                error="Aadhar Numbr must be 12 digit!"
                // pattern="-?[0-9]*(\.[0-9]+)?"
                // error="Input is not a number!"
                style={{ width: '280px' }}
                value={this.state.aadhar}
                /><br />
              <Textfield
                onChange={(valPan) => { this.setState({ pan: valPan.target.value }) } }
                label="Pan Number"
                floatingLabel
                pattern="^\d{10}$"  
                error="Pan Numbr must be 10 digit!"
                // pattern="-?[0-9]*(\.[0-9]+)?"
                // error="Input is not a number!"
                style={{ width: '280px' }}
                value={this.state.pan}
                /><br />

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



