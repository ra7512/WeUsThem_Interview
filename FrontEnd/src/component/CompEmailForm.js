import React, { Component } from 'react';
import  { TextField, Button } from '@material-ui/core';

class CompEmailForm extends Component{
    handleChange(event){
        this.props.handleUpdate(event);
    }
    render() {
        const {
            email, title, body, handleSubmit
        } = this.props;

        return (
            <form>
                <TextField
                    id="email"
                    name="email"
                    label="recipient"
                    fullWidth
                    onChange={this.handleChange.bind(this)}
                    value={email}
                />
                <br/>
                <TextField
                    id="subject"
                    name="subject"
                    label="Subject"
                    fullWidth
                    onChange={this.handleChange.bind(this)}
                    value={title}
                />
                <br/>
                <TextField
                    id="body"
                    name="body"
                    label="Body"
                    fullWidth
                    onChange={this.handleChange.bind(this)}
                    value={body}
                />
                <Button className="submit" onClick={handleSubmit}>Submit</Button>
            </form>
        );
    }
}
export default CompEmailForm;