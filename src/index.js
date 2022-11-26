import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { originalTheme } from "./Themes/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<ThemeProvider theme={originalTheme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
