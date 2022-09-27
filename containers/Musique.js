import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { songs } from '../utils/songsIndex';
import MusicPlayer from '../components/MusicPlayer';
import proportionalStyle from '../utils/ProportionalStyle';

const useStyle = createUseStyles({
    container: {
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',

        '@media (min-width: 600px)': {
            flexDirection: 'row',
        },
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px',

        '& h2': {
            fontSize: 'calc(10vw + 7px)',
            color: 'var(--color-pink)',
        },

        '& p': {
            fontFamily: 'Poppins',
            fontSize: '12px',
        },

        '@media (min-width: 600px)': {
            width: 'fit-content',
            flexDirection: 'row-reverse',
            transition: '.5s all',
            transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.165, 0.84, 0.44, 1)',
            transform: 'rotate(-180deg) translateY(-620px)',
            marginBottom: '0',

            '& h2': {
                fontSize: '120px',
                writingMode: 'vertical-lr',
            },

            '& p': {
                fontSize: '20px',
                writingMode: 'vertical-lr',
            },
        },
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        height: '250px',
        justifyContent: 'space-around',
        alignItems: 'center',

        '@media (min-width: 600px)': {
            alignItems: 'flex-start',
            paddingLeft: '120px',
            height: '100%',
        },
    },
});

const Musique = () => {
    const classes = useStyle();

    useEffect(() => {
        new proportionalStyle({
            reference: '#musique',
            target: '#musique > .title',
            styles: {
                transform: 'rotate(-180deg) translateY(${coef*500-400}px)',
            },
        });

        let container = document.querySelector("#musique");
        let cursor = document.querySelector('#musique-cursor');
        
        const onMouseMove = (e) =>{
            cursor.style.left = (e.pageX + 20) + 'px';
            cursor.style.top = (e.pageY + 15) + 'px';
        }

        const toggleOpacity = (val) => cursor.style.opacity = val;

        container.addEventListener('mouseover', () => toggleOpacity(1));
        container.addEventListener('mouseout', () => toggleOpacity(0));
        container.addEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <div className={classes.container} id="musique">
            <div className={`${classes.text} title`}>
                <h2>MUSICOPHILE</h2>
                <p>Sauf du reggae</p>
            </div>
            <div className={classes.list}>
                {songs.map((e, i) => (
                    <MusicPlayer opt={{ ...e, index: i }} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Musique;
