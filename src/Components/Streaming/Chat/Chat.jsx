import React, { useState } from "react";
import './Chat.css';  // Certifique-se de ajustar o CSS

const Chat = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mensagem enviada: ", message);
        setMessage(""); // Limpa o campo após o envio
    };

    return (
        <div className="background">
            <div className="chat">
                <div className="chat-box">
                    <div className="boxi">
                        <h3>Chat</h3>
                        <div className="person-a">
                            <div className="icon_chat"></div>
                            <div className="message">
                                Vai Edoardo!, você é o melhor piloto do mundo!
                            </div>
                        </div>

                        <div className="person-a">
                            <div className="icon_chat"></div>
                            <div className="message">
                                Aposto em você!
                            </div>
                        </div>

                        <div className="person-a">
                            <div className="icon_chat"></div>
                            <div className="message">
                                Meu Fanboost vai para você!
                            </div>
                        </div>

                        <div className="person-a">
                            <div className="icon_chat"></div>
                            <div className="message last">
                                <svg className="cat" viewBox="0 0 512 512">
                                    <path style={{ fill: "#FFC850" }} d="M444.379,3.741c10.828-8.798,27.018-1.092,27.018,12.859v222.01l-182.26-107.699L444.379,3.741z" />
                                    <path style={{ fill: "#EBAF4B" }} d="M454.828,228.819l-110.973-65.574l92.462-104.241c6.465-7.288,18.511-2.716,18.511,7.027V228.819z" />
                                    <ellipse style={{ fill: "#FFDC64" }} cx="255.999" cy="292.46" rx="231.97" ry="219.54" />
                                    <path style={{ fill: "#FF8087" }} d="M289.137,429.155v16.569c0,18.302-14.836,33.138-33.138,33.138l0,0c-18.302,0-33.138-14.836-33.138-33.138v-16.569l33.138-16.569L289.137,429.155z" />
                                </svg>
                            </div> 
                        </div> 
                    </div>
                </div>

                {/* Campo de Input de Chat */}
                <div className="chat-input-container">
                    <div className="input-wrapper">
                        <button className="emoji-button">
                            😊 {/* Aqui pode ser um ícone de emoji */}
                        </button>
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button className="send-button" onClick={handleSubmit}>
                            ➤ {/* Ícone de envio, pode ser substituído por SVG */}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chat;