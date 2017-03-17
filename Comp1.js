import React, {Component} from 'react';

class Comp1 extends Component{
    signup(){
        console.log('signed up')
    }
    render(){
        return(
            <div>
                <form>
                    <pre>
                    Name :          <input type="text" name="name"></input> <br/>
                    Mail id :       <input type="email" name="email"></input> <br/>
                    Phone number :  <input type="text" name="Phone"></input><br/>
                    <input type="submit" onClick={ () => this.signup() } name="submit"></input>
                    </pre>
                </form>
            </div>
        )
    }
}

export default Comp1;