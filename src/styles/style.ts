import styled from "styled-components";

// export const Flex = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center; 
// `;

export const Header = styled.header`
    width: 100%;
    padding: 1.50rem 5rem;
    display: flex;
    justify-content: space-between;
    background-color: Gray;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 3rem 5rem;
`;

export const CountriesContainer = styled.main`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    background-color: green;
    padding: 0 5rem;
`;

export const CountriesDescriptionCard = styled.div`
    max-width: 16.5rem;
    background-color: blue;
    height: 21rem;
    margin-bottom: 4.19rem;
`;

export const DropdownFilter = styled.div`
    max-width: 100px;
    min-height: 50px;
`;

export const Image = styled.img `
    min-width: 16.5rem;
    max-width: 100%;
    height: 10rem;
`;