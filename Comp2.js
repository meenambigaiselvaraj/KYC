import React, { Component } from 'react';

class Comp2 extends Component {
    signin() {
        console.log('signed in')
    }
    render() {
        return (
            <div>
                <form>
                    <pre>
                        Mail id :   <input type="email" name="email"></input> <br />
                        Password :  <input type="password" name="password"></input><br />
                        <input type="submit" onClick={() => this.signin()} name="submit"></input>
                    </pre>
                </form>
            </div>
        )
    }
}

export default Comp2;