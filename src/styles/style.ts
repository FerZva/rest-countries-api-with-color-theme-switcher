import styled, { css  } from "styled-components";
import { Link } from "react-router-dom";

const Querys = css`
  @media screen and (max-width: 718px) {
    padding: 2rem 1rem;
  }

  /* Media query para pantallas más grandes */
  @media screen and (max-width: 1150px) {
    /* Estilos específicos para pantallas más grandes */
    flex-wrap: wrap;
  }
`;

const FilterQuerys = css`
   @media screen and (max-width: 788px) {
    display: flex;
    flex-wrap: wrap;
   }
`; 

const HeaderQuerys = css`
   @media screen and (max-width: 788px) {
    padding: 1.50rem 1rem;
   }
`; 

const BorderQuerys = css`
   @media screen and (max-width: 370px) {
    flex-wrap: wrap; 
    text-align: left;
    align-content: start;
    padding: 0;
   }
`;

const BorderCountryResultQuery = css`
    margin-left: 0px;
`;


interface ContainerProps {
    isVisible: boolean;
  }

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
  margin-bottom: 1rem;
  font-size: 1.125rem;
`;

export const SearchBar = styled.div`
  border-radius: 0.3125rem;
  width: 26.5rem;
  background-color: ${(props) => props.theme.SecBackground};
  color: ${(props) => props.theme.color};
  border: 1px solid black;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border: 1px solid ${(props) => props.theme.SecBackground};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.SecBackground};
  color: ${(props) => props.theme.color};
  border: none;
  min-height: 100%;
  width: 100%;
  margin-left: 1.5rem;
`;


export const Dropdown = styled.select`
    background-color: ${(props) => props.theme.SecBackground};
    border: 1px solid ${(props) => props.theme.SecBackground};
    color: ${(props) => props.theme.color};
    width: 11rem; 
    height: 3.5rem;
    border-radius: 0.3125rem;
    padding: 0 1.5rem;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`;


export const Header = styled.header`
    background-color: ${(props) => props.theme.SecBackground};
    width: 100%;
    padding: 1.50rem 5rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    ${HeaderQuerys}
`;

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 3rem 5rem;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    ${FilterQuerys}
`;

export const CountriesContainer = styled.main`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;    
    flex-direction: row;
    width: 100%;
    padding: 0 5rem;
    ${Querys}
`;

export const CountriesDescriptionCard = styled.div`
    max-width: 16.5rem;
    height: 21rem;
    margin-bottom: 4.19rem;
    background-color: ${(props) => props.theme.SecBackground};
    border-radius: 0.3125rem;
    overflow: hidden;
    color: ${(props) => props.theme.color};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
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

// Country Stiled components
export const CountriesList = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 5rem;
    ${Querys}
`;

export const ReturnButtton = styled.button`
    width: 8.5rem;
    height: 2.5rem;
    padding: 0.62rem;
    border-style: none;
    background-color: ${(props) => props.theme.SecBackground};
    border-radius: 0.3125rem;
    color: ${(props) => props.theme.color};
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const CountriesDetailsContainer = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${Querys}
`;

export const CountriesInfoContainer = styled.div` //////////
    width: 100%;
    padding: 2rem 7.52rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr 1fr;
    align-self: start;
    ${Querys}
`;

export const CountryInfoTitle = styled.div`
    width: 100%;
    grid-column: 1 / 3;
    grid-row: span 1;
    align-self: start;
`;

export const CountryInfoDetails = styled.div`
    width: 100%;
    grid-column: 1 / 3;
    grid-row: span 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: start;
`;

export const CountryBorders = styled.div`
    width: 100%;
    grid-column: 1 / 3;
    grid-row: span 1;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    ${BorderQuerys}
`;

export const CountryTitle = styled.h3`
    color: ${(props) => props.theme.color};
    margin-bottom: 1rem;
    font-weight: 800;
`;

export const CountryInfo = styled.div`
    padding: 1.5rem;
`;

export const BorderCountry = styled.h3`
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
`;

export const BorderCountryResult = styled.h3`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.SecBackground};
    margin: 0 0.50rem;
    padding: 0.25rem 1rem;
    border-radius: 0.3125rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    ${BorderCountryResultQuery}
`;
