import React from "react";
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import './app.scss';

const App = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div>
                    <Container maxWidth="sm" className="container">
                        <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color="textSecondary" gutterBottom>
                            This is a photo album, I am trying to make this text as long as possibl so that we can se how it look on browser
                        </Typography>
                    </Container>
                </div>
            </main>
            <footer className="footer">
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
            </footer>

        </div>
    );
}

export default App;