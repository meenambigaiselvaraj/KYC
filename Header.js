import React, { Component } from 'react';
import './Header.css';
import { Button, Textfield, Grid, Cell } from 'react-mdl';
//import { Link } from 'react-router'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.userData
        };

    }
    componentWillMount() {
        console.log(this.state.data);

    }

    render() {
        return (
            <div className="headerBody" >

                <div className="headerTab">
                    <label > Registration Successful</label> <br />
                </div>

                <Grid >
                    <Cell col={4}></Cell>
                    <Cell className="appForm" col={4}>

                        <div className="tableBody">

                            <tbody>
                                <h5>
                                    <tr>
                                        <td className="mdl-data-table__cell--non-numeric">Name</td>
                                        <td>{this.state.data.name}</td>


                                    </tr>
                                    <tr>
                                        <td className="mdl-data-table__cell--non-numeric">Emailid</td>
                                        <td>{this.state.data.email}</td>

                                    </tr>
                                    <tr>
                                        <td className="mdl-data-table__cell--non-numeric">Phone No:</td>
                                        <td>{this.state.data.phone}</td>

                                    </tr>
                                    <tr>
                                        <td className="mdl-data-table__cell--non-numeric">Aadhar No:</td>
                                        <td>{this.state.data.aadhar}</td>

                                    </tr>
                                    <tr>
                                        <td className="mdl-data-table__cell--non-numeric">Pan No:</td>
                                        <td>{this.state.data.pan}</td>

                                    </tr>
                                </h5>
                            </tbody>

                        </div>

                    </Cell>
                    <Cell col={4}></Cell>
                </Grid>

            </div>
        );
    }
}

export default Header;