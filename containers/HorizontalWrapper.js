import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import proportionalStyle from '../utils/ProportionalStyle';
import Gourmet from '../containers/Gourmet';
import Name from '../components/Name';
import Separation from '../components/Separation';
import Otaku from '../containers/Otaku';
import Musique from '../containers/Musique';
import Badminton from '../containers/Badminton';
import JeuxVideos from '../containers/JeuxVideos';
import Artiste from '../containers/Artiste';
import Dev from '../containers/Dev';

const useStyle = createUseStyles({
    container: {
        width: '100%',
        fontFamily: 'Aboreto',

        '@media (min-width: 600px)': {
            height: '100%',
            width: 'fit-content',
        },
    },
    jesuistoutca: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: '0 5%',

        '& p': {
            fontSize: 'calc(10vw + 10px)',
            whiteSpace: 'nowrap',
        },

        '& p:last-child': {
            alignSelf: 'flex-end',
        },

        '@media (min-width: 600px)': {
            width: 'fit-content',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '0',
            '& p': {
                fontSize: '150px',
            },
            '& p:last-child': {
                marginLeft: '150px',
            },
        },
    },
    yearContainer: {
        '& div': {
            marginBottom: '10px',
        },
        '& span': {
            fontSize: '40px',
        },

        '@media (min-width: 600px)': {
            position: 'relative',
            marginRight: '250px',

            '& div': {
                marginRight: '10px',
            },
            '& span': {
                fontSize: '90px',
                transform: 'rotate(-90deg)',
                position: 'absolute',
                bottom: '70px',
                right: '-150px',
            },
        },
    },
});

const HorizontalWrapper = () => {
    const classes = useStyle();

    useEffect(() => {
        // je suis
        new proportionalStyle({
            reference: '#jesuistoutca > p:last-child',
            target: '#jesuistoutca > p:first-child',
            styles: {
                transform: 'translateX(${-coef*550}px)',
            },
        });

        // comme ça
        new proportionalStyle({
            reference: '#jesuistoutca > p:last-child',
            target: '#jesuistoutca > p:last-child',
            styles: {
                transform: 'translateX(${-coef*200}px)',
            },
        });
    }, []);

    return (
        <div className="app">
            <div className={`${classes.container} container`}>
                <Name />
                <section className={classes.jesuistoutca} id="jesuistoutca">
                    <p>JE SUIS</p>
                    <p>TOUT çA</p>
                </section>
                <div className={classes.yearContainer} id="year">
                    <Separation />
                    <span className={classes.year}>2002</span>
                </div>
                <Gourmet />
                <Otaku />
                <Separation />
                <Musique />
                <Separation />
                <Badminton />
                <JeuxVideos />
                <Separation />
                <Artiste />
                <Separation />
                <Dev />
            </div>
        </div>
    );
};

export default HorizontalWrapper;
