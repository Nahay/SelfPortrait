import Image from 'next/future/image';
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import * as i from '../assets/images';
import Info from '../components/Info';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '1125px',
        alignItems: 'center',

        '& h2': {
            fontSize: 'calc(10vw + 12px)',
        },

        '& .info': {
            position: 'absolute',
            top: '330px',
            right: '0',
            zIndex: '9',
        },

        '@media (min-width: 600px)': {
            width: '3400px',
            display: 'block',
            height: 'unset',

            '& h2': {
                fontSize: '150px',
                position: 'absolute',
                left: '0',
                bottom: '10%',
            },

            '& .info': {
                right: 'unset',
                top: '50%',
                left: '350px',
            },
        },
    },
    drawings: {
        '& img': {
            position: 'absolute',
        },

        '& img:nth-child(2)': {
            height: '240px',
            width: '160px',
            top: '140px',
            left: '5%',
            zIndex: '2',
        },
        '& img:nth-child(3)': {
            height: '240px',
            width: '160px',
            top: '140px',
            right: '5%',
            zIndex: '3',
        },
        '& img:nth-child(4)': {
            width: '50%',
            height: '120px',
            top: '430px',
            right: '0',
            zIndex: '4',
        },
        '& img:nth-child(5)': {
            height: 'fit-content',
            width: '60%',
            top: '450px',
            left: '0',
            zIndex: '10',
        },
        '& img:nth-child(6)': {
            width: '50%',
            height: 'fit-content',
            top: '600px',
            right: '0',
            zIndex: '7',
        },
        '& img:nth-child(7)': {
            width: '55%',
            height: 'fit-content',
            top: '745px',
            left: '0',
            zIndex: '6',
        },
        '& img:nth-child(8)': {
            width: '70%',
            height: 'fit-content',
            top: '940px',
            right: '0',
            zIndex: '7',
        },
        '@media (min-width: 600px)': {
            '& img:nth-child(2)': {
                width: '240px',
                height: 'fit-content',
                top: '10%',
                left: '650px',
            },
            '& img:nth-child(3)': {
                width: '240px',
                height: 'fit-content',
                top: 'unset',
                right: 'unset',
                bottom: '10%',
                left: '800px',
            },
            '& img:nth-child(4)': {
                width: '500px',
                height: '260px',
                right: 'unset',
                top: '5%',
                left: '1050px',
            },
            '& img:nth-child(5)': {
                height: '490px',
                width: '500px',
                zIndex: '5',
                top: 'unset',
                bottom: 0,
                left: '1100px',
            },
            '& img:nth-child(6)': {
                width: '560px',
                height: 'auto',
                maxHeight: '100%',
                right: 'unset',
                top: '0',
                left: '1650px',
                zIndex: '6',
            },
            '& img:nth-child(7)': {
                width: '520px',
                height: 'auto',
                maxHeight: '100%',
                top: 'unset',
                bottom: '0',
                left: '2250px',
                zIndex: '7',
            },
            '& img:nth-child(8)': {
                width: '648px',
                height: '440px',
                right: 'unset',
                top: '20%',
                left: '2650px',
                zIndex: '8',
            },
        },
    },
});

const Artiste = () => {
    const classes = useStyle();

    useEffect(() => {
        new proportionalStyle({
            reference: '#artiste',
            target: '#artiste .info',
            styles: {
                transform: 'translateX(${coef*150}px)',
            },
        });

        new proportionalStyle({
            reference: '#drawings',
            target: '#artiste img:nth-child(4)',
            styles: {
                transform: 'translateX(${coef*100}px)',
            },
        });

        new proportionalStyle({
            reference: '#dev',
            target: '#artiste img:nth-child(8)',
            styles: {
                transform: 'translateX(${coef*100}px)',
            },
        });
    }, []);

    return (
        <div className={classes.container} id="artiste">
            <h2>ARTISTE</h2>
            <div className={classes.drawings} id="drawings">
                <Info text="Euh... On a tous eu des débuts compliqués." />
                <Image className="bnw" src={i.Dessin1} width={240} height="auto" alt="Dessin" />
                <Image className="bnw" src={i.Dessin2} width={240} height="auto" alt="Dessin" />
                <Image className="bnw" src={i.Dessin3} width={500} height={196} alt="Dessin" />
                <Image className="bnw" src={i.Dessin4} width={500} height={500} alt="Dessin" />
                <Image className="bnw" src={i.Dessin5} alt="Dessin" />
                <Image className="bnw" src={i.Dessin6} alt="Dessin" />
                <Image className="bnw" src={i.Dessin7} width={650} height={438} alt="Dessin" />
            </div>
        </div>
    );
};

export default Artiste;
