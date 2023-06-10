import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const ListItems = styled.li`
  font-size: 24px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
