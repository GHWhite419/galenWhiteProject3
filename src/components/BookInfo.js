import { useState, useEffect } from 'react';
import DisplayBook from './DisplayBook.js';
import Form from './Form.js';
import axios from 'axios';

const BookInfo = () => {
    const [getBook, setBook] = useState('');
    const [getLanguage, setLanguage] = useState('');
    const [message, setMessage] = useState('');

    const getFormLang = (e, languageSelect) => {
        e.preventDefault();
        setMessage('Give me a moment to find you a book...');
        setBook('');
        setLanguage(languageSelect);
        axios({
            url: `https://openlibrary.org/search.json?q=language:${getLanguage.toLowerCase().slice(0, 3)}`,
            method: 'GET',
            dataResponse: 'json',
            params: {
                limit: 30,
            }
        })
            .then((resp) => {
                console.log(resp);
                const randomNum = Math.floor(Math.random() * resp.data.docs.length);
                const bookTitle = resp.data.docs[randomNum];
                setBook(bookTitle);
                setMessage(
                    `I found the following book for you, which has a ${languageSelect} translation:`
                )
            })
            .catch((error) => {
                setMessage(
                    "Oops, I couldn't find a book for you. Try again!"
                )
            })
        // .then will conditionally display the results on the page, along with a little message.
        // Add a throw/catch method which will render on the page instead of the above message. 
    }

    // useEffect(() => {
    // }, [getLanguage]);


    return (
        <>
            <Form getFormLang={getFormLang}
            />
            <DisplayBook
                displayMessage={message}
                bookName={getBook.title}
            />
        </>
    )
}

export default BookInfo;