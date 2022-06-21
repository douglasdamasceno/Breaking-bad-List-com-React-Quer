import styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    background-color:#fff;
    padding:16px 24px ;
    border: 1px solid #e6e6e6;
    height:350px;
    width:200px;
`;
export const Name = styled.h4`
    margin: 5px 0px;
    font-size:16px;
    font-weight: bold;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
    color:#000;
    span{
        font-family:'Courier New', Courier, monospace ;
    }
`;
export const Nickname = styled.h4`
    margin: 5px 0px;
    font-size:16px;
    font-weight: bold;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
    color:#000;
    span{
        font-family:'Courier New', Courier, monospace ;
    }
    color:#000;
`;
export const Birthday = styled.h6`
    margin: 5px 0px;
    font-size:16px;
    font-weight: bold;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
    color:#000;
    span{
        font-family:'Courier New', Courier, monospace ;
    }
    color:#000;
`;
export const Img = styled.img`
    width:100%;
    height:270px;
    object-fit:fill;
`;