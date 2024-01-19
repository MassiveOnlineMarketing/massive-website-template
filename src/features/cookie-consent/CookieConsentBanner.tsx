"use client"

import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import CookieSettings from './CookieSettings';

// ui
import { Button } from '@/components/ui/button';
import { Heading, Paragraph } from '@/components/typography/typography';

export type CookieKeys = "consentGiven" | "marketing" | "analytics" | "statistics";
export type ConsentKeys = "marketing" | "analytics" | "statistics";


function CookieConsentBanner() {
  const [cookies, setCookie, removeCookie] = useCookies(['consentGiven', 'marketing', 'analytics', 'statistics']);

  // Check if the consent component should be displayed
  const [showConsent, setShowConsent] = useState<null | boolean>(null);

  // Consent state for UI elements
  const [consent, setConsent] = useState<Record<ConsentKeys, boolean>>({
    marketing: cookies.marketing || false,
    analytics: cookies.analytics || false,
    statistics: cookies.statistics || false,
  });


  useEffect(() => {
    // Determine if the banner should be shown based on the consentGiven cookie
    if (cookies.consentGiven === undefined) {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, [cookies]);



  // handleConsentChange is called when the user changes the consent
  const handleConsentChange = (segment: CookieKeys, newValue: boolean) => {
    setConsent(prevState => ({ ...prevState, [segment]: newValue }));
  };

  // acceptAllCookies is called when the user clicks the accept all button
  const acceptAllCookies = () => {
    for (const segment in consent) {
      setCookie(segment as CookieKeys, true, { path: '/' });
    }
    setCookie('consentGiven', true, { path: '/' });
    setShowConsent(false);
  };





  const savePreferences = () => {
    for (const segment in consent) {
      setCookie(segment as CookieKeys, consent[segment as ConsentKeys], { path: '/' });
    }
    setCookie('consentGiven', true, { path: '/' });
    setShowConsent(false);
  };

  const resetPreferences = () => {
    for (const segment in consent) {
      removeCookie(segment as CookieKeys, { path: '/' });
    }
    removeCookie('consentGiven', { path: '/' });
    setConsent({
      marketing: false,
      analytics: false,
      statistics: false,
    });
  };



  // If the consent component should not be initialy shown, return null
  if (showConsent === null || !showConsent) return null;

  // else
  return (
    <div className='p-8 m-2 fixed border-primary border-l-4 bg-white shadow-sm bottom-2 z-50 rounded-md w-full max-w-[1300px] left-[49.6%] -translate-x-1/2'
      // style={{ maxWidth: 'calc(100% - 1rem)' }}
      id='cookieConsent-banner'>
      <Heading level='h4' size='lg' colorScheme='dark'>{COOKIE_CONSENT_BANNER.heading}</Heading>
      <div className='flex flex-col md:flex-row justify-between w-full bottom-2'>
        <Paragraph className='max-w-[800px] mr-auto'>{COOKIE_CONSENT_BANNER.description}</Paragraph>
        {/* <p>Je kunt je cookie-instellingen op elk moment wijzigen. Lees ons Cookiebeleid voor meer informatie.</p> */}
        <div id='cookieConcent-Buttons' className='flex gap-6 pt-4 md:pt-0 items-center'>
          <Button size='md' variant='primary' onClick={acceptAllCookies}>{COOKIE_CONSENT_BANNER.accept}</Button>
          <Button size='md' variant='link' onClick={acceptAllCookies}>{COOKIE_CONSENT_BANNER.necessary}</Button>
          <CookieSettings
            consent={consent}
            onSave={savePreferences}
            onReset={resetPreferences}
            onConsentChange={handleConsentChange}
          >
            <Button variant='primary'>{COOKIE_CONSENT_BANNER.settings}</Button>
          </CookieSettings>
        </div>
      </div>
    </div>
  );
}

const COOKIE_CONSENT_BANNER = {
  heading: 'Cookie Voorkeur',
  description: "Bij Massive maken we gebruik van cookies om de goede werking en beveiliging van onze websites mogelijk te maken en je de best mogelijke gebruikerservaring te bieden. Door op 'Accepteren' te klikken, stem je in met het gebruik van deze cookies voor advertenties en analyses.",
  accept: 'Accepteren',
  necessary: 'Alleen noodzakelijke',
  settings: 'Instellingen',
}

export default CookieConsentBanner;
