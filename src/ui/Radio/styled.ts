import styled from "styled-components";

export const Wrapper = styled.div`
  input[type="radio"] {
    margin: 0;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;

    + label {
      margin: 0;
      display: inline-block;
      padding-left: 1.375rem;
      padding-top: 0.0625rem;
      position: relative;
      cursor: pointer;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.text};
      z-index: 1;

      a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
      }

      &::before {
        position: absolute;
        top: 0.25rem;
        left: 0;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.background};
        content: "";
        border: 2px solid ${({ theme }) => theme.border};
        transition: all 0.1s;
      }

      &::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 50%;
        top: 0.5625rem;
        left: 0.3125rem;
        background-color: ${({ theme }) => theme.background};
      }

      &:hover {
        &::before {
          border-color: ${({ theme }) => theme.primary};
        }
      }
    }

    &:disabled {
      + label {
        opacity: 0.6;
        cursor: auto;

        &:hover {
          &::before {
            border-color: ${({ theme }) => theme.border};
          }
        }
      }
    }

    &:focus {
      + label {
        &::before {
          box-shadow: 0 0 0 3px
            ${({ theme }) =>
              theme.primary.replace(
                /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
                "rgba$1,0.2)",
              )};
        }
      }
    }

    &:checked {
      + label {
        &::before {
          background-color: ${({ theme }) => theme.primary};
          border-color: ${({ theme }) => theme.primary};
        }

        &::after {
          display: inline-block;
        }
      }
    }
  }
`;
