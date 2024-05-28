export const addMicrosoftClarity = (): string | TrustedHTML => {
    const microsoftClarityKey = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_KEY;
    const isProd = process.env.NEXT_PUBLIC_MODE === 'production';
    
    if (isProd && microsoftClarityKey) {
        return ` (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${microsoftClarityKey}");`;
    }

    return '';
}
