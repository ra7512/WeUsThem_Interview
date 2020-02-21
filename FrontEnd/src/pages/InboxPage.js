import React, { Component } from 'react';
import CompEmailList from '../component/CompEmailList';

class InboxPage extends  Component{
    state = {emails: [] }

    render(){
        const { emails } = this.state;
        return(
            <div>
                <CompEmailList
                    emails ={emails}
                />
            </div>
        );
    }
}
export default InboxPage;