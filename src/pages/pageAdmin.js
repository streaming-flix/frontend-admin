import React from 'react';
import Navbar from '../components/Navbar';
import AppRouter from '../components/AppRouter';
import Container from '@material-ui/core/Container';

function pageAdmin() {
    return (
        <div>
            <Navbar/>
            <Container>
                <AppRouter/>
          </Container>
        </div>
    );
}

export default pageAdmin;
