import { etudiant } from "./data.jsx";
import { useState } from "react";
import './bootstrap.css';

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredEtudiant, setFilteredEtudiant] = useState(etudiant);

  function handleInputChange(e) {
    setSearchItem(e.target.value);
    const filteredItem = etudiant.filter(
      (item) =>
        item.lastname.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.firstname.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredEtudiant(filteredItem);
  }

  return (
    <div className="container mt-5">
      <div>
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
          className="form-control"
        />
      </div>
      <div>
        {filteredEtudiant.map((item, index) => (
          <div key={index} className="bg-primary m-2 text-light p-2 rounded">
            {item.firstname} {item.lastname}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
