import { DefaultTheme } from 'styled-components';

export const size = {
  pc: '75em', // 1200px
  tab: '56.25em', // 900px
  mobile: '31.25em', // 500px
  // mobileS: '23.125em', // 370px
};

const theme: DefaultTheme = {
  window: {
    pc: `@media screen and (max-width: ${size.pc}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    // mobileS: `@media screen and (max-width: ${size.mobileS}px)`,
  },
};

export default theme;
