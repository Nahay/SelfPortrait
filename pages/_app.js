import '../styles/globals.scss';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const style = document.getElementById('server-side-styles');
        if (style && style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, []);
    return <Component {...pageProps} />;
}
