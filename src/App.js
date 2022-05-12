import { useState } from "react";
import "./App.css";
import { Grafica } from "./components/Grafica";
import { SelectComponent } from "./components/Select";

function App() {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { value } = e;
    handleGraf(value);
  };

  const handleGraf = async (value) => {
    const resp = await fetch(
      `http://api.marketstack.com/v1/eod?access_key=e1e4a0bf61e4a0ad2369c68e00689c82&symbols=${value}&limit=7`
    );

    const dataApi = await resp.json();

    setData(dataApi.data);
  };

  return (
    <div className="center">
      <div className="card border border-5 p-3" style={{ width: "600px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">App Gráfica</h3>
          <SelectComponent handleChange={handleChange} />

          <div className="mt-4">
            {data.length === 0 ? (
              <div className="alert alert-light" role="alert">
                <h5 className="text-center">No hay datos consultados</h5>
              </div>
            ) : (
              <Grafica data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
