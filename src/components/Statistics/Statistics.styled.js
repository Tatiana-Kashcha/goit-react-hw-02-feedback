import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const ListItems = styled.li`
  /* width: 100px;
  padding-top: 15px;
  padding-bottom: 15px; */

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
