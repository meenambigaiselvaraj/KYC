import React, { Component } from 'react';
import './Panel.css';
import Comp2 from '../registration/Comp2';
import { Link } from 'react-router'

class Panel extends Component {

    render() {
        return (
            <div>
                <br /><Link to="Comp2"><button> Submit</button></Link><br /><br />
            </div>
        )
    }
}

export default Panel;