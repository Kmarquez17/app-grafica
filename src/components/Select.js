import React, { useState, useEffect } from "react";
import Select from "react-select";

export const SelectComponent = ({ handleChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fecthAPI = async (URL) => {
      const resp = await fetch(URL);
      const dataApi = await resp.json();

      const newOptions = dataApi.data.map(({ name, symbol }) => {
        return {
          value: symbol,
          label: name,
        };
      });
      setOptions(newOptions);
    };

    fecthAPI(
      "http://api.marketstack.com/v1/tickers?access_key=e1e4a0bf61e4a0ad2369c68e00689c82&limit=50"
    );
  }, []);

  return (
    <div>
      <Select placeholder='Seleccione una empresa' options={options} onChange={handleChange} />
    </div>
  );
};
