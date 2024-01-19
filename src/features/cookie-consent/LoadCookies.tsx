'use client'

import { useEffect, useState } from "react"
import Script from "next/script"

import { useCookies } from "react-cookie"

function LoadCookies() {
    const [cookies] = useCookies(['marketing', 'analytics', 'statistics']);
    const [scripts, setScripts] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            let newScripts: string[] = [];

            if (cookies.marketing) {

            }
            if (cookies.analytics) {

            }
            if (cookies.statistics) {

            } else {

            }

            //* Always load these scripts
            newScripts.push('/clarity.js');
            newScripts.push('/google-analytics.js');

            setScripts(newScripts);
            setLoaded(true); 
        }
    }, [cookies, loaded]);

    return (
        <>
            {/* Load scripts from list */}
            {scripts.map(script => (
                <Script key={script} src={script} strategy="afterInteractive" />
            ))}

            {/* Google tag manager script */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`} strategy="afterInteractive" />
        </>
    );
}

export default LoadCookies;
