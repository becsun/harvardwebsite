import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pic: {
        backgroundImage: 'url(https://res.cloudinary.com/do68wjft3/image/upload/v1673212017/pexels-alexander-krivitskiy-1399073_kz76zz.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
    },
    navBar: {
        textDecorationLine: 'none',
    }
}));

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.pic}>
        </div>
    );
}
export default HomePage;