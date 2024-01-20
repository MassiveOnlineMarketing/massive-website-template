'use client'

import Script from "next/script"

import { useCookies } from "react-cookie"

function LoadCookies() {
    const [cookies] = useCookies(['marketing', 'analytics', 'statistics']);

    const CLARITY_TAG = 'jicivy07ui';

    return (
        <>
            {/* * Always load */}
            {/* Google tag analytics script */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`} strategy="afterInteractive" />
            <Script id="gtag" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', '${process.env.G_TAG}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>

            {/* Microsoft Clarity */}
            <Script id="clarity" strategy="afterInteractive">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", '${CLARITY_TAG}' );
                `}
            </Script>




            {/* * Load scripts based on cookies */}
            {/* {cookies.marketing && (
                <Script id="marketing" strategy="afterInteractive">
                    {`  
                        // Marketing script
                    `}
                </Script>
            )} */}

            {/* {cookies.analytics && (
                <Script id="analytics" strategy="afterInteractive">
                    {`
                        // Analytics script
                    `}
                </Script>
            )} */}

            {/* {cookies.statistics && (
                <Script id="statistics" strategy="afterInteractive">
                    {`
                        // Statistics script
                    `}
                </Script>
            )} */}

        </>
    );
}

export default LoadCookies;
