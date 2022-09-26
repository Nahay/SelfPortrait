import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    '@keyframes leaving': {
        from: {
            opacity: 1,
        },
        to: {
            zIndex: '-1',
            opacity: 0,
        },
    },
    '@keyframes entering': {
        from: {
            transform: 'scale(0)',
        },
        to: {
            transform: 'scale(1)',
        },
    },
    container: {
        position: 'fixed',
        zIndex: '100',
        width: '100vw',
        height: '100%',
        backgroundColor: 'var(--color-pink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        fontSize: '50px',
        color: '#fff',
        transition: '.5s',
        opacity: '1',

        '& p': {
            animation: '$entering .5s',
        },

        '& p:last-child': {
            fontSize: '20px',
            textAlign: 'center',
            marginTop: '5px',
        },

        '&.display': {
            transform: 'scale(2)',
            animation: '$leaving 1s forwards',
            animationDelay: '1s',
            transitionDelay: '1000ms',
        },

        '@media (min-width: 600px)': {
            fontSize: '80px',
            '& p:last-child': {
                fontSize: '35px',
                marginTop: '25px',
            },
        },
    },
});

const Loader = () => {
    const classes = useStyle();
    const [current, setCurrent] = useState(0);

    const data = [
        'Hello World', // 2002
        'Hello World', // 2003
        'Hello World', // 2004
        "Découverte de l'école", // 2005
        'Hey Nintendo DS', // 2006
        'Hey Nintendo DS', // 2007
        'Hey Nintendo DS', // 2008
        'Hey Nintendo DS', // 2009
        'Hey Nintendo DS', // 2010
        'Hey Nintendo DS', // 2011
        'Hey Nintendo DS', // 2012
        'Arrivée du ptit frère', // 2013
        'Arrivée du ptit frère', // 2014
        'Arrivée du ptit frère', // 2015
        'Le web arriva', // 2016
        'Addiction aux jeux', // 2017
        'Addiction aux jeux', // 2018
        'Addiction aux jeux', // 2019
        'Mastering Web', // 2020
        'Mastering Web', // 2021
        'Bienvenue', // 2022
    ];

    useEffect(() => {
        current !== data.length - 1 && increaseCurrent();
    }, [current]);

    const increaseCurrent = () => {
        let timer = 100;
        if ([0].includes(current)) timer = 1000;

        setTimeout(() => {
            setCurrent(current + 1);
        }, timer);
    };

    return (
        <div className={`${classes.container} ${current === data.length - 1 ? 'display' : ''}`}>
            <p>{2002 + current}</p>
            <p>{data[current]}</p>
        </div>
    );
};

export default Loader;
