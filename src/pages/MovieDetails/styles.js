import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction: column;
`

export const BackButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
  font-size: 30px;
  margin-bottom: 20px;
`

export const ContainerDetails = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const ContainerImg = styled.div`
  >img{
    width:100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

`;

export const ContainerInfo = styled.div`
  width:100%;
  padding:20px;
  @media (max-width: 700px) {
    padding:0px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  >h1{
    font-size: 40px;
  }

  >span{
    font-size: 18px;
  }
`;

export const Overview = styled.p`
  font-size: 16px;
  margin-top:20px;
`;

export const SectionInfo = styled.div`

  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size:16px;
`;

export const ListGenres = styled.div`
  >span{
      font-weight: bold;
      margin-bottom:20px;
    }
  >ul{
    margin-top:10px;
    >li{
      margin-bottom:4px;
    }
  }
`;

export const ListProductionCompanies = styled.div`

  >span{
    font-weight: bold;
  }
  >ul{
    margin-top:10px;
    >li{
      margin-bottom:4px;
    }
  }
`;

