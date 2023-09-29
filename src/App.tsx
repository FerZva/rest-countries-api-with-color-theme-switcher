import  { useFetch }  from './services/useFetch';
import { useState } from 'react';

import { BsFillMoonFill } from "react-icons/bs";

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
                  <h3 key={index}>{country.name}</h3>
                  <li key={index}>{country.population}</li>
                  <li key={index}>{country.region}</li>
                  <li key={index}>{country.capital}</li>
                </CountriesDescriptionCard>
              ))}
          </CountriesContainer>
        )}
      
    </body>
  );
}

export default App;