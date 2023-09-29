import React from 'react';

import  { useFetch }  from './services/useFetch';
import { useState } from 'react';

import { BsFillMoonFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import CountryDetail from './components/CountryDetail';
import CountryList from './components/CountryList';
import ThemeSwitcher from './components/ThemeSwitcher';

import { Header, FilterContainer, CountriesContainer, CountriesDescriptionCard, Image } from './styles/style';
import   './styles/defaultStyles.css'


function App() {
  const { countries, loading } = useFetch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  
  return (
    <Router>
      <body className="App">
      <Header>
        <h3>Where in the world?</h3>

        <div>
          <BsFillMoonFill />
          <span>Dark mode</span>
        </div>
      </Header>

      <FilterContainer>
            <input
              type="text"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">Filtrar por región</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </FilterContainer>

      
        {loading ? (
          <p>Cargando...</p>
        ) : (
            <CountriesContainer>
              {countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())).filter((country) => selectedRegion ? country.region === selectedRegion : true).map((country, index) => (
                <CountriesDescriptionCard>
                  <Image key={index} src={country.flag} alt={`Flag of ${country.name}`} />
                  <Link to="/"><h3 key={index}>{country.name}</h3></Link>
                  <li key={index}>{country.population}</li>
                  <li key={index}>{country.region}</li>
                  <li key={index}>{country.capital}</li>
                </CountriesDescriptionCard>
              ))}

              <Switch>
                <Route path='/'>
                  <CountryDetail />
                </Route>
              </Switch>
            </CountriesContainer>
        )}
      
      </body>
    </Router>
  );
}

export default App;