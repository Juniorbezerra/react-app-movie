import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 10px 10px ;
  background-color: #fff;
  text-decoration: none;
  color: #000;
  >img{
   width: 100%;
 }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 100%;
  font-weight: 700;
  padding: 10px;
  `;
