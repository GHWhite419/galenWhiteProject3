const DisplayBook = (props) => {
    return (
        <section className="results">
            <h2>
                {props.displayMessage}
            </h2>
            <h3>{props.bookName}</h3>
        </section>
    )
}

export default DisplayBook;