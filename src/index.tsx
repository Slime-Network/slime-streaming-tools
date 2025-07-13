import { CssBaseline } from '@mui/material';
import { green } from '@mui/material/colors';
import {
	Experimental_CssVarsProvider as CssVarsProvider,
	experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { CHAIN_ID, PROJECT_ID, RELAY_URL } from './slime-shared/constants/env';
import { SlimeApiContextProvider } from './slime-shared/contexts/SlimeApiContext';
import { MarketplaceApiContextProvider } from './slime-shared/contexts/MarketplaceApiContext';
import { WalletConnectProvider } from './slime-shared/contexts/WalletConnectContext';
import { WalletConnectRpcProvider } from './slime-shared/contexts/WalletConnectRpcContext';

const theme = extendTheme({
	colorSchemes: {
		dark: {
			// palette for dark mode
			palette: {
				primary: {
					main: green[500],
				},
				secondary: {
					main: green[500],
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<CssVarsProvider theme={theme}>
			<WalletConnectProvider projectId={PROJECT_ID} relayUrl={RELAY_URL} chainId={CHAIN_ID}>
				<WalletConnectRpcProvider>
					<SlimeApiContextProvider>
						<MarketplaceApiContextProvider>
							<CssBaseline />
							<App />
						</MarketplaceApiContextProvider>
					</SlimeApiContextProvider>
				</WalletConnectRpcProvider>
			</WalletConnectProvider>
		</CssVarsProvider>
	</React.StrictMode>
);
