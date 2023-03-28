import {useState} from 'react';

const Form = (props) => {
    const [langChoice, setLangChoice] = useState('');
    const handleChoice = (e) => {
        setLangChoice(e.target.value);
    }

    return (
        // Create select form. We will use props to pass the details of the form back to BookInfo. The primary option in the form will be 'language'.
        <form onSubmit={(e) => props.getFormLang(e, langChoice)}>
            <label htmlFor="bookLanguage">Select a language:</label>
            <select name="bookLanguage" id="bookLanguage" value={langChoice} onChange={handleChoice}>
                <option value="" disabled>Pick one:</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
                <option value="Russian">Russian</option>
            </select>
            <button type="submit">Find me a book</button>
        </form>
    )
}

export default Form;