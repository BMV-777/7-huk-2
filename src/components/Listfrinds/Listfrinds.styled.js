import styled from 'styled-components';

export const Container = styled.div`
  ${'' /* color: black; */}

  ${'' /* background-color: orange; */}
`;

export const Cards = styled.div`
  width: 100vh;
  height: 50px;
  gap: 10px;
  display: flex;
  align-items: center;
  ${'' /* outline: 2px solid black; */}
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  margin-top: 10px;
  > img {
    border-radius: 25%;
    display: inline-flex;
  }
  :hover {
    background-color: lightblue;
  }
`;

export const Span = styled.span`
  color: ${p => (p.isOnline ? 'green' : ' red')};
  margin-left: 10px;
`;
