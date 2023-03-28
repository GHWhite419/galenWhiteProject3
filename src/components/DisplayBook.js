const DisplayBook = (props) => {
    return (
        <section className="results">
            <h2>
                {props.displayMessage}
            </h2>
            {/* <h2>I found the following book for you, which has a {props.bookLanguage} translation:</h2> */}
            <h3>{props.bookName}</h3>
        </section>
    )
}

export default DisplayBook;