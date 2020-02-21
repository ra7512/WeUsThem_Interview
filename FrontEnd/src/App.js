import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import CompLinkBar from "./component/CompLinkBar";
import CompCreateButton from "./component/CompCreateButton";

import EmailPage from "./pages/EmailPage";
import InboxPage from "./pages/InboxPage";
import SentEmailPage from "./pages/SentEmailPage";
import ArchiveEmailsPage from "./pages/ArchiveEmailsPage";
import CreateEmailPage from "./pages/CreateEmailPage";

class App extends Component {
  render (){
    return(
    <Router>
      <CompLinkBar />
      <div className="app-body">
        <Switch>
          <Route excat path="/" component={InboxPage} />
          <Route path="/emails/:email_id" component={EmailPage}/>
          <Route path="/sentEmail" component={SentEmailPage}/>
          <Route path="/archive" component={ArchiveEmailsPage}/>
          <Router path="/createEmail" component={CreateEmailPage}/>
        </Switch>
      </div>
      <CompCreateButton />
    </Router>
  );
  }
}

export default App;
