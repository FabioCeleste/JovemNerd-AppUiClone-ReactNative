import styled from 'styled-components/native';

interface props {
    active: number;
    index: number;

}

export const Container = styled.View`
  background: #000000;
  
`;

export const Options = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 55px;
    
`;

export const Option = styled.Text`
    color: ${(props: props) => (props.active === props.index ? '#fff' : '#88878D')};
    font-size: 14px;
    font-weight: bold;
    
        `;

export const BottomBar = styled.View`
    height: 3px;
    width: 25%;
    background: #DC7F08;
    
`;

export const ButtonOption = styled.TouchableOpacity`
    
    
`;
