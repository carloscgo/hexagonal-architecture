import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { BrowserRouter } from "./utils/routes";

import './index.css'
import "notyf/notyf.min.css";

const client = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <HelmetProvider>
          <QueryClientProvider client={client}>
            <Layout />

            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
