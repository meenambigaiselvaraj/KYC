import React, { Component } from 'react';
import './Header.css';
//import { Link } from 'react-router'

class Header extends Component {

    constructor(props) {
      super(props);
       this.state = {
        data : this.props.userData
     };
  
   }
    componentWillMount(){
        console.log(this.state.data);
        
    }

    render() {
        return (
            <div>
                <h2>Registration Successful</h2>
                  
                    <pre>
                        <h3>
                            Name : {this.state.data.name}  <br /><br />
                            Mail Id:{this.state.data.email} <br /><br />
                            Phone Number: {this.state.data.phone} <br /><br />
                            Aadhar Number: {this.state.data.aadhar} <br /><br />
                            Pan Number: {this.state.data.pan} <br /><br />
                        </h3>
                    </pre>
               
            </div>
        )
    }
}


export default Header;