import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Image from 'next/future/image';
import { Totoro, Bouba } from '../assets/images';
import Info from '../components/Info';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '50px',

        '& img:first-child': {
            order: '2',
            width: '65%',
            height: '350px',
            alignSelf: 'flex-end',
        },
        '& img:nth-child(2)': {
            order: '3',
            width: '120px',
            height: '170px',
            position: 'absolute',
            transform: 'translate(45px, 100px)',
        },

        '@media (min-width: 600px)': {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: '140px',
            width: '940px',
            marginBottom: '0',

            '& img': {
                position: 'absolute',
            },

            '& img:first-child': {
                height: '100%',
                width: 'auto',
                right: '220px',
                zIndex: '0',
                marginLeft: '110px',
                order: 'unset',
            },

            '& img:nth-child(2)': {
                width: '270px',
                height: '360px',
                bottom: '40px',
                left: '0',
                zIndex: '1',
                order: 'unset',
            },
        },
    },
    text: {
        zIndex: '2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        order: '1',

        '& h2': {
            fontSize: 'calc(10vw + 12px)',
        },

        '& .info': {
            alignSelf: 'flex-start',
            transform: 'translateY(402px)',
        },

        '@media (min-width: 600px)': {
            order: 'unset',
            alignItems: 'flex-end',

            '& h2': {
                fontSize: '150px',
            },

            '& .info': {
                alignSelf: 'unset',
                transform: 'unset',
            },
        },
    },
});

const Otaku = () => {
    const classes = useStyle();

    useEffect(() => {
        // totoro
        new proportionalStyle({
            reference: '#otaku',
            target: '#otaku > img:first-child',
            styles: {
                transform: 'translateX(${coef*100}px)',
            },
        });

        // bouba
        new proportionalStyle({
            reference: '#otaku',
            target: '#otaku > img:nth-child(2)',
            styles: {
                transform: 'translateX(${-coef*50}px)',
            },
        });

        // info
        new proportionalStyle({
            reference: '#otaku',
            target: '#otaku .info',
            styles: {
                transform: 'translateX(${coef*100}px)',
            },
        });
    }, []);

    return (
        <section className={classes.container} id="otaku">
            <Image className="bnw" src={Totoro} alt="Totoro" width={650} height={800} />
            <Image className="bnw" src={Bouba} alt="Bouba" width={270} height={360} />
            <div className={classes.text}>
                <h2>OTAKU</h2>
                <Info text="Bouba = meilleure peluche" />
            </div>
        </section>
    );
};

export default Otaku;
