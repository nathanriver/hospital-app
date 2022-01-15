import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:5000/api/hospitals";

const Home = () => {
  const [hospitals, setHospitals] = useState([]);
  const [query, setQuery] = useState("");

  const getHospitals = async (query) => {
    const { data } = await axios.get(URL, {
      params: {
        query,
      },
    });
    return data;
  };

  const handleQueryChange = async (e) => {
    setQuery(e.target.value);
    const result = await getHospitals(e.target.value);
    setHospitals(result);
  };

  const handleHospitalOnClick = (hospital) => {
    alert(JSON.stringify(hospital));
  };

  useEffect(() => {
    const init = async () => {
      const result = await getHospitals();
      setHospitals(result);
    };
    init();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hospital App</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="query"
          style={{ fontWeight: "700", fontSize: "0.875rem" }}
        >
          Search Hospital
        </label>
        <input
          id="query"
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e)}
        />
      </div>
      {hospitals.map((hospital, i) => (
        <>
          <div key={i} onClick={() => handleHospitalOnClick(hospital)}>
            {hospital.name}
          </div>
          <hr />
        </>
      ))}
    </>
  );
};

export default Home;
