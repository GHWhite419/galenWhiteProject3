import { useState, useEffect } from 'react';
import DisplayBook from './DisplayBook.js';
import Form from './Form.js';
import axios from 'axios';

const BookInfo = () => {

    // Create API call using axios. We'll use state to capture the book's data as well as the language the user selected. We'll also use side effect since we're fetching external information.

    // const [book, setBook] = useState({});
    // const [language, setLanguage] = useState(null);



    useEffect(() => {
        axios({
            url: 'https://openlibrary.org/search.json?q=language:rus',
            method: 'GET',
            dataResponse: 'json',
            params: {
                limit: 30,
                // subject_type
            }
        })
            .then((resp) => {
                console.log(resp.data.docs);
                const randomBook = () => {
                    const randomNum = Math.floor(Math.random() * resp.data.docs.length);
                    // console.log(resp.data.docs[randomNum])
                    console.log(resp.data.docs[randomNum].title)
                }
                randomBook();
            })
    }, [])

    return (
        <>
            <Form />
            {/* This component will be used to display the form in which the user will select their preferred language. */}
            <DisplayBook />
            {/* Here we'll define a prop for the book's title, which will be displayed in the app using this component. */}
        </>
    )
}

export default BookInfo;