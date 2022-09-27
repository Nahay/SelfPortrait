import { createUseStyles } from 'react-jss';
import Info from '../components/Info';
import { Pho } from '../assets/images';
import Image from 'next/future/image';
import { useEffect } from 'react';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '50px',

        '& img': {
            width: '100%',
            maxHeight: '450px',
            marginTop: '170px',
        },

        '& img:nth-child(2)': {
            display: 'none',
        },

        '@media (min-width: 600px)': {
            width: 'fit-content',

            '& img': {
                maxHeight: 'unset',
                marginTop: '0',
                width: 'fit-content',
                height: '90%',
            },

            '& img:nth-child(2)': {
                display: 'block',
                marginLeft: '150px',
            },
        },
    },
    text: {
        position: 'absolute',
        zIndex: '2',
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        marginTop: '7%',

        '@media (min-width: 600px)': {
            gap: '15px',
        },
    },
});

const JeuxVideos = () => {
    const classes = useStyle();

    useEffect(() => {
        new proportionalStyle({
            reference: '#jeux-videos',
            target: '#jeux-videos > div > .info:first-child',
            styles: {
                transform: 'translateX(${coef*200}px)',
            },
        });

        new proportionalStyle({
            reference: '#jeux-videos',
            target: '#jeux-videos > div > .info:last-child',
            styles: {
                transform: 'translateX(${-coef*100}px)',
            },
        });
    }, []);

    return (
        <div className={classes.container} id="jeux-videos">
            <div className={classes.text}>
                <Info text="Aux jeux vidéos, tous. Sauf les FPS." />
                <Info text="LILY.GEEK = 100" />
            </div>
            <Image className="bnw" src={Pho} alt="En train de jouer" width="auto" height="100%" />
            <Image className="bnw" src={Pho} alt="Game Over" width="auto" height="100%" />
        </div>
    );
};

export default JeuxVideos;
