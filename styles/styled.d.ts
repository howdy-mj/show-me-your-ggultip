import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    window: {
      pc: string;
      tab: string;
      mobile: string;
    };
  }
}
