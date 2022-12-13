import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    align-items: center;
    /* padding: 3em; */
    background: #003A62;
    margin: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 100vh;  
    /* max-width: 100%;  */
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    padding-top: 3em;

`;

export const Button = styled.button`
    background-color: #CF8F15;
    font-size: 1rem;
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    &:hover {
    background-color: #8F591B;
    font-weight: bold;
    }
`;

export const Area = styled.section`
    display: flex;
    flex-direction: row;
    margin: 2rem;
    
    
label {
    color: #FFFFFF;
    margin-right: 1rem;
    
}
`





