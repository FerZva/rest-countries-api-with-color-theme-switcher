// CountryDetails.tsx
import React from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import { useFetch } from '../services/useFetch';
import { CountriesList, ReturnButtton, CountriesDetailsContainer, CountriesInfoContainer, CountryInfoTitle, CountryInfoDetails, CountryBorders, BorderCountry, BorderCountryResult } from '../styles/style'; 

import { FaArrowLeftLong } from "react-icons/fa6";

interface CountryDetailProps {
  setIsListVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryDetails: React.FC<CountryDetailProps> = ({ setIsListVisible }) => {
  const { countryName } = useParams<{ countryName: string }>();
  const { countries } = useFetch();
  const history = useNavigate();

  // Buscar el país por su nombre en la lista de países
  const country = countries.find((c) => c.name === countryName);

  if (!country) {
    return <div>Country not found</div>;
  }

// Define el tipo para country.currencies
type Currency = {
  name: string;
  symbol: string;
};

  const mapCurrencies = () => (
    country.currencies
      ? Object.entries(country.currencies).map(([code, currency]) => `${(currency as Currency).name} (${code})`).join(', ')
      : 'N/A'
  );

  const mapLanguages = () => (
    country.languages
      ? Object.values(country.languages).join(', ')
      : 'N/A'
  );

  return (
    <CountriesList>
      <ReturnButtton onClick={() => { setIsListVisible(true); history('/'); }}>
            <FaArrowLeftLong />
            Back
      </ReturnButtton>
      <CountriesDetailsContainer className='CountriesDetailsContainer'>
        <div className='country-detailsContainer-flag'>
          <img src={country.flag} alt={`${country.name} Flag`} width="200" className='country-details-flag' />
        </div>

        <CountriesInfoContainer>
          <CountryInfoTitle>
            <h1>{country.name}</h1>
          </CountryInfoTitle>

          <CountryInfoDetails>
            <div>
              <p className='CountryInfoLabel'>Native Name: <span className='countryInfoLabelFont'>{country.nativeName || 'N/A'}</span></p>
              <p className='CountryInfoLabel'>Population: <span className='countryInfoLabelFont'>{new Intl.NumberFormat().format(country.population)}</span></p>
              <p className='CountryInfoLabel'>Región: <span className='countryInfoLabelFont'>{country.region}</span></p>
              <p className='CountryInfoLabel'>Sub Region: <span className='countryInfoLabelFont'>{country.subregion}</span></p>
              <p className='CountryInfoLabel'>Capital: <span className='countryInfoLabelFont'>{country.capital}</span></p>
            </div>

            <div>
              <p className='CountryInfoLabel'>Top Level Domain: <span className='countryInfoLabelFont'>{country.topLevelDomain ? country.topLevelDomain.join(', ') : 'N/A'}</span></p>
              <p className='CountryInfoLabel'>Currencies: <span className='countryInfoLabelFont'>{mapCurrencies()}</span></p>
              <p className='CountryInfoLabel'>Languages: <span className='countryInfoLabelFont'>{mapLanguages()}</span></p>
            </div>
          </CountryInfoDetails>

        

          <CountryBorders>
              <p>Border Countries:</p>
              {country.borders ? (
                 <BorderCountry>
                 {country.borders.map((border) => (
                   <BorderCountryResult key={border}>{border}</BorderCountryResult>
                 ))}
                  
                </BorderCountry>
              ) : (<p>No border countries founds</p>)}
             
          </CountryBorders>
         
        </CountriesInfoContainer>

      </CountriesDetailsContainer>
    </CountriesList>
  );
};

export default CountryDetails;
