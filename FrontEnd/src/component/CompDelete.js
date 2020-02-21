import React , { Component } from "react"
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

class CompDelete extends Component{
    render() {
        return(
            <div className="app-delete">
                <IconButton className =" navbar-icon">
                    <DeleteIcon />
                </IconButton>

            </div>
        );
    }
}
export default CompDelete;