import { useState } from 'react';
import '../style/App.scss';
import '../style/remixicon/remixicon.css'


function ChatComponent() {
    const [getMesseges] = useState(
        [
            {
                sender: "Юлия Дворецкова",
                time: new Date('2021-01-14T03:24:00'),
                likes: 1,
                text: "Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий."
            },
            {
                sender: "Me",
                time: new Date('2021-01-14T04:24:00'),
                likes: 1,
                text: "Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий."
            }
        ]
    )
    return (
        <div className="chat">
            <div className="chat-head">
                
            </div>
            <div className="chat-body">
                <ul>
                    {getMesseges.map( (mess) => {
                        if(mess.sender === 'Me')
                        {
                            return <li style={{color: "red"}} key={mess.time}>{mess.text}</li>
                        }
                        else
                            return <li key={mess.time}>{mess.text}</li>
                    })}
                </ul>
            </div>
            <div className="chat-input">
            <input placeholder="Написать сообщение..."/>
            <i class="ri-emotion-happy-line"></i>
            <i class="ri-attachment-2"></i>
            <div className="button" type='button'>
                <p>Отправить</p>
            </div>
            </div>
        </div>
    );
}
export default ChatComponent;