import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContainer, CountriesDescriptionCard, Image,  } from '../styles/style'; // Importa tus estilos

import  { useFetch }  from '../services/useFetch';

function CountryList() {
  const { countries } = useFetch(); // Reemplaza esto con tus datos
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  return (
    <div>
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
        {/* Opciones de filtro por región */}
      </select>
      <CountriesContainer>
        {countries
          .filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((country) =>
            selectedRegion ? country.region === selectedRegion : true
          )
          .map((country) => (
            <CountriesDescriptionCard key={country.id}>
              <Link to={`/country/${country.id}`}>
                <h3>{country.name}</h3>
              </Link>
              <Image src={country.flag} alt={`Flag of ${country.name}`} />
              <li>{country.population}</li>
              <li>{country.region}</li>
              <li>{country.capital}</li>
            </CountriesDescriptionCard>
          ))}
      </CountriesContainer>
    </div>
  );
}

export default CountryList;
