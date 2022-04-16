import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  input[type="radio"] {
    + label {
      margin: 0;
      display: flex;
      padding-left: 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.text};

      a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
      }
    }
  }
`;
