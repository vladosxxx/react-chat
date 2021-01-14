import { useState } from 'react';
import '../style/App.scss';
import '../style/remixicon/remixicon.css'

function PeopleComponent() {
    const [getPeople] = useState(
        [
            "Валерий Алексеев",
            "Алексей Мусаханов",
            "Юлия Дворецкова",
            "Софья Загидулина",
            "Артём Гаврилкенко",
            "Константин Филатов"
        ]
    )
    return (
        <div className="people">
            <div className="search">
                <form className="form-wrapper cf">
                    <input className="input-search" type="text"/>
                    <i className="ri-close-line del" />
                    <i className="ri-search-line" type="submit"/>
                    <i class="ri-edit-box-line" />
                </form>
            </div>
            <div className="all-people">
                <p>Люди</p>
            <ul>
                {getPeople.map((man) => 
                    <li key={man}>{man}</li>
                )}
            </ul>

            </div>
        </div>
    
    );
}
export default PeopleComponent;