import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        
        <h1>
          Error Boundary Test Page <p> Something as gone Wrong! </p>
        </h1>
      );
    }

    return this.props.children;
  }
}
