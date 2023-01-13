import styled from '@emotion/styled';

export const Container = styled.div`
  ${'' /* color: black; */}
  background-color: red;
`;

export const Card = styled.div`
  color: ${props => props.theme.colors.white};
`;

export const Ulion = styled.li`
  font-size: ${props => props.theme.colors.fontSize};
`;
