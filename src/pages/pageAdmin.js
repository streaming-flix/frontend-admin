import React from 'react';
import Navbar from '../components/Navbar';
import adminPage from '../components/ListUserComponent';
// import Container from '@material-ui/core/Container';

function pageAdmin() {
    return (
        <div>
            <Navbar/>
            <adminPage/>
        </div>
    );
}

export default pageAdmin;
