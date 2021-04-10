import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return <h1>We are so sorry</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
