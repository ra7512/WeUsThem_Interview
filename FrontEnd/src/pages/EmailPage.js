import React, { Component } from "react";
import CompEmail from '../component/CompEmail';

class EmailPage extends Component{

    state = {
        email: {}
    }

    componentDidMount() {
        const { location } = this.props;
        const { email } = location.state;

        this.setState({email});
    }

    render(){
        const { email }=this.state;
        return(
            <div>
                <CompEmail email ={email}/>
            </div>
        );
    }

}
export default EmailPage;