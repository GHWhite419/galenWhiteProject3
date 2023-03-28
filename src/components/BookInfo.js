import { useState, useEffect } from 'react';
import DisplayBook from './DisplayBook.js';
import Form from './Form.js';
import axios from 'axios';

const BookInfo = () => {

    // Create API call using axios. We'll use state to capture the book's data as well as the language the user selected. We'll also use side effect since we're fetching external information.

    const [getBook, setBook] = useState('');
    const [getLanguage, setLanguage] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        axios({
            url: `https://openlibrary.org/search.json?q=language:${getLanguage.toLowerCase().slice(0, 3)}`,
            method: 'GET',
            dataResponse: 'json',
            params: {
                limit: 30,
            }
        })
            .then((resp) => {
                const randomNum = Math.floor(Math.random() * resp.data.docs.length);
                const bookTitle = resp.data.docs[randomNum];
                setBook(bookTitle);
            }).then(() => {
                setMessage(
                    `I found the following book for you, which has a ${getLanguage} translation:`
                )
            })
        // .then will conditionally display the results on the page, along with a little message.
        // Add a throw/catch method which will render on the page instead of the above message. 
    }, [getLanguage]);

    const getFormLang = (e, formLanguage) => {
        e.preventDefault();
        setLanguage(formLanguage);
    }

    return (
        <>
            <Form getFormLang={getFormLang}
            />
            <DisplayBook
                displayMessage={message}
                bookName={getBook.title}
                // bookLanguage={getLanguage}
            />
        </>
    )
}

export default BookInfo;