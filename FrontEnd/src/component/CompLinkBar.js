import React, { Component } from 'react';
import { AppBar, Toolbar} from "@material-ui/core";

import CompLinks from "./CompLinks";
import CompSearch from "./CompSearch";
import CompDelete from "./CompDelete";

class CompLinkBar extends Component{
    render() {
        return(
            <div className="app-Linkbar">
                <AppBar position="static">
                    <Toolbar className="app-toolbar">
                        WeUsThem Email Interview Client
                        <CompLinks />
                        <CompDelete />
                        <CompSearch />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default CompLinkBar;