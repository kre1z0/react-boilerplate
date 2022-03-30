import React, { Component } from "react";

import { ErrorBoundaryContainer, ReloadPage } from "./styled";

import { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error): void {
    console.error(error);
  }

  public render(): React.ReactNode {
    return !this.state.hasError ? (
      this.props.children
    ) : (
      <ErrorBoundaryContainer>
        <h1>Что-то пошло не так</h1>
        <ReloadPage
          onClick={() => {
            location.reload();
          }}
        >
          Перезагрузите страницу
        </ReloadPage>
      </ErrorBoundaryContainer>
    );
  }
}
