import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/metropolis/Inter-Bold.woff2?v=3.13') format('woff2');
    }
    
    @font-face {
      font-family: "Metropolis Bold";
      font-style: normal;
      font-weight: normal;
      font-display: swap;
      src: url("/fonts/metropolis/Metropolis-Bold.woff2?v=11") format("woff2"),
        url("/fonts/metropolis/Metropolis-Bold.woff?v=11") format("woff");
    }
    
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/metropolis/Inter-Regular.woff2?v=3.13') format('woff2'), url('/fonts/metropolis/Inter-Regular.woff?v=3.13') format('woff');
    }
    
    @font-face {
      font-family: "Metropolis Light";
      font-style: normal;
      font-weight: normal;
      font-display: swap;
      src: url("/fonts/metropolis/Metropolis-Light.woff2?v=11") format("woff2"),
        url("/fonts/metropolis/Metropolis-Light.woff?v=11") format("woff");
    }
    
    @font-face {
      font-family: "Metropolis Medium";
      font-style: normal;
      font-weight: normal;
      font-display: swap;
      src: url("/fonts/metropolis/Metropolis-Medium.woff2?v=11") format("woff2"),
        url("/fonts/metropolis/Metropolis-Medium.woff?v=11") format("woff");
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: italic;
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/metropolis/Inter-Italic.woff2?v=3.13') format('woff2'), url('/fonts/metropolis/Inter-LightItalic.woff?v=3.13') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/metropolis/Inter-SemiBold.woff2?v=3.13') format('woff2'), url('/fonts/metropolis/Inter-SemiBold.woff?v=3.13') format('woff');
    }
    
    
      `}
  />
)