// import logo from './logo.svg';
import './style/App.scss';
import './style/remixicon/remixicon.css'
import PeopleComponent from "./components/PeopleComponent";
import ChatComponent from './components/ChatComponent';

function App() {
  return (
    <div className="App">
        <div className="head">
            <i className="ri-checkbox-line"/>
            <a href="/" className="logo">LOGO</a>
            <ul>
                <li>Команда</li>
                <li>Задачи</li>
                <li>Календарь</li>
            </ul>
            <ul className="second-ul">
                <li>
                    <i className="ri-message-2-line" />
                </li>
                <li>
                    <i className="ri-notification-2-line"/>
                </li>
                <li>

                </li>
            </ul>
        </div>
        <div className="search-block">
            <PeopleComponent />
        </div>
        <div className="chat-block">
            <ChatComponent />
        </div>
    </div>
  );
}

export default App;
