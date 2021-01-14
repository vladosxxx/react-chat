import { useState, useEffect } from 'react';

import '../style/App.scss';
import '../style/remixicon/remixicon.css'

const people = [
    "Валерий Алексеев",
    "Алексей Мусаханов",
    "Юлия Дворецкова",
    "Софья Загидулина",
    "Артём Гаврилкенко",
    "Константин Филатов"
]

function PeopleComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <div className="people">
            <div className="search">
                <form className="form-wrapper cf">
                    <input
                        className="input-search"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        />
                    {searchTerm === "" ? <i className="ri-close-line del" style={{display: "none"}}/> : <i className="ri-close-line del" onClick={() => setSearchTerm("")}/>}
                    <i className="ri-search-line" type="button"/>
                    <i className="ri-edit-box-line" />
                </form>
            </div>
            <div className="all-people">
                <p>Люди</p>
                <ul>
                    {searchResults.map((man) =>
                        <li key={man}>{man}</li>
                    )}
                </ul>

            </div>
        </div>
    
    );
}
export default PeopleComponent;