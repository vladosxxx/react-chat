// import logo from './logo.svg';
import '../style/App.scss';
import '../style/remixicon/remixicon.css'

function PeopleComponent() {
    return (
        <div className="search">
            <input className="input-search" type="text" /><input className="del" type="submit"/>
        </div>
    );
}
export default PeopleComponent;