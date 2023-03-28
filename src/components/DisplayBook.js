const DisplayBook = (props) => {
    return (
        <div className="results">
            <h2>
                {props.displayMessage}
            </h2>
            {/* <h2>I found the following book for you, which has a {props.bookLanguage} translation:</h2> */}
            <h3>{props.bookName}</h3>
            {/* Here we will render the results of the form and the API call. We'll use props to display the book's title. As stretch goals we'll display an image of the book cover, its reading level, rating, and/or genre. */}
        </div>
    )
}

export default DisplayBook;