import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { logout } from "../redux/actions";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";


const style = {
    flexGrow: 1
}
const NavBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={style}>
                       <Link to='/pageAdmin'>Admin StreamingFlix</Link>
                    </Typography>
                    <Button onClick={() => dispatch(logout(history))} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
