'use client'
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client, StompSubscription, Message } from '@stomp/stompjs';

const WebSocketComponent: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [client, setClient] = useState<Client | null>(null);
  
    useEffect(() => {
      // Crear la conexión SockJS y el cliente STOMP
      const socket = new SockJS('http://localhost:9090/ws'); // Asegúrate de que este URL coincide con tu endpoint de WebSocket
      const stompClient = new Client({
        webSocketFactory: () => socket,
        connectHeaders: {},
        debug: (str) => {
          console.log(str);
        },
        onConnect: () => {
          console.log('Connected');
          stompClient.subscribe('/topic/updates', (message: Message) => {
            if (message.body) {
              setMessages((prevMessages) => [...prevMessages, message.body]);
            }
          });
        },
        onStompError: (frame) => {
          console.error('STOMP error', frame);
        },
      });
  
      stompClient.activate();
      setClient(stompClient);
  
      // Limpiar la conexión cuando el componente se desmonte
      return () => {
        if (stompClient) {
          stompClient.deactivate();
        }
      };
    }, []);
  
    return (
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WebSocketComponent;



