import { useState } from 'react';
import '../style/App.scss';
import '../style/remixicon/remixicon.css'


function ChatComponent() {
    const [getText, setText] = useState("");
    const [getMesseges, setMesseges] = useState(
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

    function addMess(textPush)
    {
        if(textPush.trim() === '')
        {
            return
        }
        setMesseges([
            ...getMesseges, 
            {
                sender: "Me",
                time: new Date(),
                likes: 0,
                text: textPush
        }]);
        setText("")
    }
    function submit (e){
        e.preventDefault()
        addMess(getText)
    }
    return (
        <div className="chat">
            <div className="chat-head">

            </div>
            <div className="chat-body">
                <ul>
                    {getMesseges.map( (mess) => {
                        if(mess.sender === 'Me')
                        {
                            return <li className="my-messeges" key={mess.time}><p>{mess.text}</p></li>
                        }
                        else
                            return <li key={mess.time}><p>{mess.text}</p></li>
                    })}
                </ul>
            </div>
            <div className="chat-input">
                <form onSubmit={(event) => submit(event)}>
                <input placeholder="Написать сообщение..." value={getText} onChange={e => setText(e.target.value)}/>
                <div className="button" type='button' onClick={() => addMess(getText)}>
                        <p>Отправить</p>
                </div>
                <i className="ri-emotion-happy-line" />
                <i className="ri-attachment-2" />
                </form>
            </div>
        </div>
    );
}
export default ChatComponent;