import React, { Component} from "react";

import CompEmailForm from "../component/CompEmailForm";

class CreateEmailPage extends Component{
    state = {
        email: "",
        title: "",
        body: ""
    }

    handleUpdate(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        const{ email, title, body } = this.state;
        const obj = {
            receiver: email,
            sender: "tester@gmail.com",
            title,
            body
        }
        console.log(obj)
    }

    render() {
        const { email, title, body } = this.state;
        return(
            <div>
                <CompEmailForm
                    email ={email}
                    title = {title}
                    body = {body}
                    handleUpdate = {this.handleUpdate.bind(this)}
                    handleSubmit = {this.handleSubmit.bind(this)}
                />
            </div>
        )
    }
}
export default CreateEmailPage;