import styled from 'styled-components';

export const Container = styled.div`
  margin-top:20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px 20px;
`;

export const ContainerPagination = styled.div`
  
  font-size: 14px;
  align-items: center;
  font-weight: bold;
  display: flex;
  width: 100%;
  margin-top:10px;
  margin-bottom: 10px;
  justify-content: space-between;
 
  >button{
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;

    &:disabled{
      background-color: #939393;
      cursor: not-allowed;
    }

  }

`;