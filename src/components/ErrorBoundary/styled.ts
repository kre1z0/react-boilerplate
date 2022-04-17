import styled from "styled-components";

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const ReloadPage = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
`;
