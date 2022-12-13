import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    /* align-items: center; */
    /* padding: 3em; */
    background: #003A62;
    margin: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 100%;  
    /* max-width: 100vh;   */
    
    
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    padding: 3em;

`;

export const Button = styled.button`
    background-color: #CF8F15;
    font-size: 1rem;
    padding: 6px 15rem;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    margin-left: 11em;
    
    &:hover {
    background-color: #8F591B;
    font-weight: bold;
    }
`;

export const Item = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    white-space: nowrap;
    margin-right: 8rem;
    margin-left: 8rem;

label{
    padding-right: 1rem;
    padding-left: 1rem;
}    
`;

export const Area = styled.section`
    display: flex;
    flex-direction: row;
    margin: 4rem;
    white-space: nowrap;
    margin-right: 8rem;
    margin-left: 13rem;
    
label {
    color: #FFFFFF;
    margin-right: 1rem;
    white-space: nowrap;
}
input{
    max-width: 60%; 
}
`;





