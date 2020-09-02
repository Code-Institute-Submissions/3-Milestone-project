import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: 575.98px) {
    thead,
    .list,
    .small-hide {
      display: none;
    }

    table,
    tbody,
    th,
    td,
    tr {
      display: block;
      text-align: center;
    }
  }

  h1 {
    color: grey;
    font-weight: 500;
    padding: 10px;
  }

  h2 {
    color: grey;
    font-weight: bold;
    font-size: 15px;
  }

  th {
    color: grey;
    font-weight: bold;
    color: white;
    font-size: 15px;
  }

  button {
    font-weight: bold;
  }

  input {
    height: 35px;
  }
`;
