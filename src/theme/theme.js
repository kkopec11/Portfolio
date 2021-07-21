import { ThemeProvider } from 'styled-components';

import theme from "./styles";
import GlobalStyles from '../styles/globalStyles';

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;