import { createUseStyles } from 'react-jss';
import Info from '../components/Info';
import * as i from '../assets/images';
import { useEffect } from 'react';
import Image from 'next/image';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        gap: '15px',
        height: '500px',
        marginBottom: '40px',

        '& h2': {
            fontSize: 'calc(10vw + 12px)',
            color: '#fff',
        },
        '& > .info': {
            position: 'absolute',
            top: '80%',
            right: '5%',
        },
        '& > .info:nth-child(3)': {
            marginTop: '45px',
            marginRight: '20px',
        },
        '& img': {
            position: 'absolute',
            height: 'fit-content',
            zIndex: '2',
        },
        '& > img:nth-child(4)': {
            width: '200px',
            top: '140px',
            left: '5%',
        },
        '& > img:nth-child(5)': {
            display: 'none',
            bottom: '0',
            right: '45%',
            transform: 'rotate(80deg)',
        },
        '& > img:nth-child(6)': {
            display: 'none',
            bottom: '15%',
            left: '0',
            transform: 'rotate(-60deg)',
        },
        '& > img:nth-child(7)': {
            width: '70px',
            top: '35%',
            right: '20%',
            transform: 'rotate(90deg)',
        },

        '@media (min-width: 600px)': {
            alignItems: 'unset',
            justifyContent: 'center',
            width: '1000px',
            padding: '0 200px',
            marginBottom: '0',
            height: 'unset',

            '& h2': {
                fontSize: '120px',
            },

            '& > .info': {
                right: 'unset',
                top: '65%',
                left: '50%',
            },

            '& > .info:nth-child(3)': {
                marginTop: '70px',
                marginLeft: '70px',
                marginRight: '0',
            },

            '& > img:nth-child(4)': {
                top: '0',
                left: '0',
                width: '360px',
            },

            '& > img:nth-child(5)': {
                display: 'block',
            },

            '& > img:nth-child(6)': {
                display: 'block',
            },

            '& > img:nth-child(7)': {
                top: '10%',
                width: '195px',
            },
        },
    },
});

const Badminton = () => {
    const classes = useStyle();

    useEffect(() => {
        new proportionalStyle({
            reference: '#badminton',
            target: '#badminton > img:nth-child(4)',
            styles: {
                transform: 'rotate(${coef*100}deg)',
            },
        });
        new proportionalStyle({
            reference: '#badminton',
            target: '#badminton > img:nth-child(5)',
            styles: {
                transform: 'rotate(${coef*100-100}deg)',
            },
        });
        new proportionalStyle({
            reference: '#badminton',
            target: '#badminton > img:nth-child(6)',
            styles: {
                transform: 'translate(${-coef*100}px, ${-coef*100}px)',
            },
        });
        new proportionalStyle({
            reference: '#badminton',
            target: '#badminton > img:nth-child(7)',
            styles: {
                transform: 'rotate(${coef*100}deg) translate(${-coef*100}px, ${-coef*100}px)',
            },
        });
        new proportionalStyle({
            reference: '#badminton',
            target: '#badminton > .info:nth-child(2)',
            styles: {
                transform: 'translateX(${coef*50}px)',
            },
        });
        new proportionalStyle({
            reference: '#badminton',
            target: '#badminton > .info:nth-child(3)',
            styles: {
                transform: 'translateX(${coef*200}px)',
            },
        });
    }, []);

    return (
        <div className={classes.container} id="badminton">
            <h2>ADDICTE</h2>
            <Info text="Au sport, enfin juste au badminton." />
            <Info text="LILY.SPORTIVE = 0" />
            <Image className="bnw" src={i.Racket360} alt="Racket" width={360} height={360} />
            <Image className="bnw" src={i.Racket300} alt="Racket" width={300} height={300} />
            <Image className="bnw" src={i.Volant140} alt="Volant" width={140} height={126} />
            <Image className="bnw" src={i.NVolant195} alt="Volant" width={195} height={204} />
        </div>
    );
};

export default Badminton;
