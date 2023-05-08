import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { BrowserRouter } from "./utils/routes";
import i18n from "./utils/i18n";

import "./index.css";
import "notyf/notyf.min.css";
import "flag-icons/css/flag-icons.min.css";

i18n();

const client = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <HelmetProvider>
          <QueryClientProvider client={client} data-testid="query-client-provider">
            <Layout data-testid="layout-component" />

            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
