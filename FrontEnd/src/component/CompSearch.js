import  React, { Component } from 'react';
import {IconButton,InputBase} from "@material-ui/core";
import { Search } from '@material-ui/icons';

class CompSearch extends Component{
    render() {
        return(
            <div className="app-Search">
                <IconButton className =" navbar-icon">
                    <Search />
                </IconButton>
                <InputBase placeholder="Search" className="search" />
            </div>

        );
    }
}
export default CompSearch;