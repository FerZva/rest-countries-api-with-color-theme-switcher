import { useState, useEffect } from 'react';

interface Country {
  currencies: any;
  id: string;
  name: string;
  population: number;
  capital: string;
  region: string;
  flag: string;
  nativeName: string;
  subregion: string;
  borders: string[];
  topLevelDomain: { code: string; name: string; symbol: string }[];
  languages: { name: string }[];
}

export function useFetch() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const formattedCountries: Country[] = data.map((country: any, index: number) => ({
          id: index.toString(),
          name: country.name.common,
          population: country.population,
          capital: country.capital ? country.capital[0] : 'N/A',
          region: country.region || 'N/A',
          flag: country.flags.png || '',
          nativeName: country.nativeName,
          subregion: country.subregion,
          borders: country.borders,
          topLevelDomain: country.topLevelDomain,
          currencies: country.currencies,
          languages: country.languages,
        }));
        setCountries(formattedCountries);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return { countries, loading };
}
