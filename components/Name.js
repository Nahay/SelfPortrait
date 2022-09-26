import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        fontFamily: 'Aboreto',
        width: '100%',
        height: '100vh',

        '@media (min-width: 600px)': {
            position: 'relative',
            width: '100vw',
            height: 'unset',
        },
    },
    name: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        fontSize: 'calc(10vw + 100px)',

        '& span': {
            transition: '.3s all',
            transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',
        },

        '@media (min-width: 600px)': {
            fontSize: '200px',
        },
    },
});

const Name = () => {
    const classes = useStyle();

    useEffect(() => {
        new proportionalStyle({
            reference: '#jesuistoutca',
            target: '#name-1',
            styles: {
                transform: 'translateY(${-coef*50}px)',
            },
        });

        new proportionalStyle({
            reference: '#jesuistoutca',
            target: '#name-2',
            styles: {
                transform: 'translateY(${coef*50}px)',
            },
        });

        new proportionalStyle({
            reference: '#jesuistoutca',
            target: '#name-3',
            styles: {
                transform: 'translateY(${-coef*50}px)',
            },
        });

        new proportionalStyle({
            reference: '#jesuistoutca',
            target: '#name-4',
            styles: {
                transform: 'translateY(${coef*50}px)',
            },
        });
    }, []);

    return (
        <section className={classes.container} id="name">
            <div className={classes.name}>
                <span id="name-1">L</span>
                <span id="name-2">I</span>
                <span id="name-3">L</span>
                <span id="name-4">Y</span>
            </div>
        </section>
    );
};

export default Name;
