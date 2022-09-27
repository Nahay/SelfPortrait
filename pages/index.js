import Head from 'next/head';

import Loader from '../components/Loader';
import HorizontalWrapper from '../containers/HorizontalWrapper';

export default function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#232323" />
                <link rel="manifest" href="./manifest.json" />
                <link rel="icon" href="./favicon.ico" />
                <link rel="apple-touch-icon" href="./apple-touch-icon.png" />

                <meta property="og:title" content="Lily Barberou | Mon Autoportrait" />
                <meta property="og:description" content="Présentation de mon autoportrait sous forme de site internet" />
                <meta property="og:image" content="https://raw.githubusercontent.com/Nahay/Assets/master/Selfportrait/banner.png" />
                <meta property="og:url" content="https://autoportrait.lilybarberou.fr/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Takestla" />
                <meta name="twitter:title" content="Lily Barberou | Mon Autoportrait" />
                <meta name="twitter:description" content="Présentation de mon autoportrait sous forme de site internet" />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/Nahay/Assets/master/Selfportrait/banner.png" />

                <meta name="description" content="Présentation de mon autoportrait sous forme de site internet" />
                <title>Lily Barberou | Mon Autoportrait</title>
            </Head>

            {/* <Loader /> */}
            <HorizontalWrapper />
        </div>
    );
}
