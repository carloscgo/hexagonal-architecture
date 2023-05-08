/**
 * Jest Setup
 */

import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'
import { renderHook, act as actFromReactHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import ErrorBoundary from "./app/components/ErrorBoundary";
import React, { ReactNode } from 'react';
import 'whatwg-fetch';
import 'isomorphic-fetch';
import Layout from './app/components/Layout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
  children: ReactNode;
}

const client = new QueryClient();

const HelmetProviderWrapper = ({ children }: Props) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  )
}

const ErrorBoundaryWrapper = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  )
}

const BrowserRouterWrapper = ({ children }: Props) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

const LayoutWrapper = () => {
  return (
    <Layout data-testid="layout-component" />
  )
}

const AppWrapper = ({ children }: Props) => {
  return (
    <BrowserRouterWrapper>
      <ErrorBoundaryWrapper>
        <HelmetProviderWrapper>
          <QueryClientProvider client={client} data-testid="query-client-provider">
            {children}

            <LayoutWrapper data-testid="layout-component" />

            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProviderWrapper>
      </ErrorBoundaryWrapper>
    </BrowserRouterWrapper>
  )
}

export {
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
  renderHook,
  actFromReactHook,
  userEvent,
  ErrorBoundary,
  HelmetProvider,
  AppWrapper,
}
