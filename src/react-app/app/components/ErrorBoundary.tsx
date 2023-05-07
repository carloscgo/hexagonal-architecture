// app/components/ErrorBoundary.tsx

import React, { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

interface ComponentState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
      super(props)
  
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI
  
      return { hasError: true, error }
    }

    componentDidCatch(error: any, errorInfo: any) {
      // You can use your own error logging service here
      console.log({ error, errorInfo })
    }

    render() {
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <h2>Oops, there is an error!</h2>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try again?
            </button>
          </div>
        )
      }
  
      // Return children components in case of no error
      return this.props.children
    }
  }
  
  export default ErrorBoundary
  