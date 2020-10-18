import styled from 'styled-components/native';

interface Props {
  myWidth: number;
}

interface DotProps {
  indice: number;
  active: number;
}

export const ImageItem = styled.ImageBackground`
  height: 210px;
  width: ${(props: Props) => props.myWidth}px;
  justify-content: flex-end;
  
`;

export const CarouselView = styled.ScrollView`
  width: ${(props: Props) => props.myWidth}px;
  height: 210px;
`;

export const Dot = styled.View`
width: 7px;
height: 7px;
background: ${(props: DotProps) => (props.active === props.indice ? 'white' : '#888')}
border-radius: 5px;
margin: 5px 5px 10px 5px;
`;

export const DotContainer = styled.View`
flex-direction: row;
position: absolute;
bottom: 0;
align-self: center;
`;

export const TextContainer = styled.View`
  margin-bottom: 35px;
  margin-left: 16px;
`;

export const ItemType = styled.Text`
  color: #D0750C;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemSubTitle = styled.Text`
color: white;  
  font-size: 20px;
`;
