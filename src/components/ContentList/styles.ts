import styled from 'styled-components/native';

interface Props {
  width: number;
}

export const Container = styled.View`
flex-direction: row;
background: #222;
padding-left: 10px;
padding-bottom: 16px;
width: ${(props: Props) => props.width}px;

`;

export const ContentImage = styled.Image`
  width: 95px;
  height: 70px;
`;

export const Type = styled.Text`
  color: #D0750C
`;

export const SubTitle = styled.Text`
  color: white;
  flex-wrap: wrap; 
  max-width: 270px;
`;
export const TextContainer = styled.View`
  margin-left: 16px;
  
  
`;
