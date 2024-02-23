import React from 'react';
import { Widget, addLinkSnippet, addResponseMessage } from 'react-chat-widget';
import { useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

export default function Chat()
{ 

    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
      }, []);
    const handleNewUserMessage = async (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
      
        try {
            const response = await fetch("http://localhost:5000/chat", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ question: 'newMessage' }),
            });
          
            if (response.ok) {
              const data = await response.json();
              console.log('data///////', data);
              addResponseMessage(data.bot_response);
              addLinkSnippet({link:data.product_info.product_url, target: '_blank'});
            } else {
              console.error('Error:', response.status, response.statusText);
              addResponseMessage('Bot is not working');
            }
          } catch (error) {
            console.error('Fetch Error:', error);
            addResponseMessage('Bot is not working');
          }
        }

          
        


        

        // Now send the message throught the backend API
      
    return(
    <div className="App">
    <Widget
     handleNewUserMessage={handleNewUserMessage}
     title="Fashion Finesse Bot"
          subtitle="Discover, Decide, Delight"
    />
  </div>
)

}