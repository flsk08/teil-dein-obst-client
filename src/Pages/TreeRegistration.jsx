import React, { useState } from "react";
import Select from "react-select";

import LogoComponent from "../components/LogoComponent";
import "../assets/styles/treeRegistration.css";

const fruits = [
  { value: "Apfel", label: "Apfel" },
  { value: "Birne", label: "Birne" },
  { value: "Aprikose", label: "Aprikose" },
  { value: "Kirsche", label: "Kirsche" },
  { value: "Johannisbeere", label: "Johannisbeere" },
  { value: "Heidelbeere", label: "Heidelbeere" },
  { value: "Erdbeere", label: "Erdbeere" },
  { value: "Sonstiges", label: "Sonstiges" },
];

export default function TreeRegistration() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div>
        <LogoComponent />
        <div className="tree-form-container">
          <form className="tree-form">
            <h3>Obstbaum zur Verfügung stellen</h3>
            <label>Obstsorte</label>
            <Select
              defaultValue={selectedOption}
              isMulti
              type="text"
              name="Obstsorte"
              placeholder="Auswählen"
              options={fruits}
              className="basic-multi-select"
              classNamePrefix="select"
              closeMenuOnSelect={false}
            />
            <label>Standort</label>
            <input
              className="tree-input-field"
              type="text"
              name="Strasse"
              placeholder="Straße"
            />
            <input
              className="tree-input-field"
              type="number"
              name="Hausnummer"
              placeholder="Hausnummer"
            />
            <input
              className="tree-input-field"
              type="number"
              name="PLZ"
              placeholder="Postleitzahl"
            />
            <input
              className="tree-input-field"
              type="text"
              name="Ort"
              placeholder="Ort"
            />
            <label>Erntezeitraum</label>
            <p>von</p>
            <input className="tree-input-field" type="date" name="start" />
            <p>bis</p>
            <input className="tree-input-field" type="date" name="end" />
            <label>Infos</label>
            <textarea
              className="tree-input-field"
              name="message"
              cols="30"
              rows="5"
              placeholder="Nähere Informationen zum Standort und der Zugänglickeit z.B. Pflücken nur nach Absprache möglich"
            ></textarea>
            <input type="file" />
            <input type="submit" className="submit btn" value="Hinzufügen" />
          </form>
        </div>
      </div>
    </>
  );
}
