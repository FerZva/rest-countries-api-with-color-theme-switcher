import { useFetch } from "./services/useFetch";
import { useState } from "react";

import { BsFillMoonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, StyleSheetManager } from 'styled-components';

import  { darkTheme }  from './Themes/Dark-style'
import { lightTheme } from './Themes/Light-style'
import './styles/defaultStyles.css'


import CountryDetail from "./components/CountryDetail";

import {
  StyledLink,
  Header,
  Container,
  FilterContainer,
  CountriesContainer,
  CountriesDescriptionCard,
  CountryInfo,
  Image,
  Dropdown,
  SearchBar,
  Input,
  CountryTitle
} from "./styles/style";
import "./styles/defaultStyles.css";

function App() {
  const { countries, loading } = useFetch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [isDarkTheme] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [isListVisible, setIsListVisible] = useState(true); // Nuevo estado
  const [isVisible] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  const handleLinkClick = () => {
    setIsListVisible(false); // Oculta la lista al hacer clic en un país
  };


  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isVisible'}>
      <ThemeProvider theme={theme} >
        <Container isVisible={isVisible}>
        <Header className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
          <h3>Where in the world?</h3>

          <div className="ToogleButton">
          <BsFillMoonFill />
            <label onClick={toggleTheme}>Dark mode</label>
          </div>
          
        </Header>
        {/* {showList ? ( */}
        <Routes>
          <Route
            path="/countries/:countryName"
            element={<CountryDetail setIsListVisible={setIsListVisible} />}
          />
          
        </Routes>
        {isListVisible && (
          <div>
              <FilterContainer>
              <SearchBar>
                <BiSearch />
                <Input
                  type="search"
                  placeholder="Buscar país..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchBar>

              <Dropdown
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">Filtrar por región</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </Dropdown>
            </FilterContainer>

            {loading ? (
            <p>Cargando...</p>
            ) : (
            <CountriesContainer>
              {countries
                .filter((country) =>
                  country.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter((country) =>
                  selectedRegion ? country.region === selectedRegion : true
                )
                .map((country, index) => (
                  <CountriesDescriptionCard>
                    <Image
                      key={index}
                      src={country.flag}
                      alt={`Flag of ${country.name}`}
                    />
                    <CountryInfo>
                      {/* <StyledLink to={`/countries/${country.name}`} onClick={handleLinkClick}> */}
                      <StyledLink to={`/countries/${country.name}`} onClick={handleLinkClick}>
                        <CountryTitle key={index} className="country-name">{country.name}</CountryTitle>
                      </StyledLink>
                
                      <label><p>Population:&nbsp;</p><li key={index}>{country.population}</li></label>
                      <label><p>Region:&nbsp;</p><li key={index}>{country.region}</li></label>
                      <label><p>Capital:&nbsp;</p><li key={index}>{country.capital}</li></label>
                    </CountryInfo>
                  </CountriesDescriptionCard>
                ))}
            </CountriesContainer>
          )}
          </div>
        )}
        </Container>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
