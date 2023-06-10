import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItems = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
  button {
    padding: 3px 10px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 3px;
    cursor: pointer;
  }
`;
