import { Global as GlobalTheme } from "@emotion/react";

const Fonts = () => {
  return (
    <GlobalTheme
      styles={`
    @font-face {
      font-family: 'Blender Pro';
      src: url('/fonts/Blender-Pro-Heavy.ttf');
      src:
        local('Blender-Pro-Heavy'),
        local('Blender-Pro-Heavy'),
        url('/fonts/Blender-Pro-Heavy.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Museo Sans Cyrl';
      src: url('/fonts/Museo-Sans-Cyrl/museosanscyrl-300.ttf');
      src: local('museosanscyrl-300'), local('museosanscyrl-Medium'),
          url('/fonts/Museo-Sans-Cyrl/museosanscyrl-300.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Museo Sans Cyrl';
      src: url('/fonts/Museo-Sans-Cyrl/museosanscyrl-500.ttf');
      src: local('museosanscyrl-500'), local('museosanscyrl-normal'),
          url('/fonts/Museo-Sans-Cyrl/museosanscyrl-500.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    
    @font-face {
      font-family: 'Cera Pro';
      src: url('/fonts/CeraPro/CeraPro-Bold.eot');
      src:
        local('Cera Pro Bold'),
        local('CeraPro-Bold'),
        url('/fonts/CeraPro/CeraPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/CeraPro/CeraPro-Bold.woff2') format('woff2'),
        url('/fonts/CeraPro/CeraPro-Bold.woff') format('woff'),
        url('/fonts/CeraPro/CeraPro-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    `}
    />
  );
};

export default Fonts;
