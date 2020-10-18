import styled from 'styled-components/native';

export const Container = styled.View`
    background: #000;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;
export const LeftHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 16px;    
`;
export const RightHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
`;

export const TextHeader = styled.Text`
    color: white;
    margin-left: 24px;
    font-size: 20px;
    font-weight: bold;
`;

export const TextBunker = styled.Text`
    color: #DC7F08;
`;
