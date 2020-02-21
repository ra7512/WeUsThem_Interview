import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Edit } from "@material-ui/icons";
import { IconButton} from "@material-ui/core";

class CompCreateButton extends Component{
    render(){
        return(
            <div>
                <Link to="/create">
                    <IconButton className="editButton">
                        <Edit />
                    </IconButton>
                </Link>
            </div>
        );
    }
}
export default CompCreateButton;