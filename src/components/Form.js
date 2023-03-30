import {useState} from 'react';

const Form = (props) => {
    const [langChoice, setLangChoice] = useState('Placeholder');
    const handleChoice = (e) => {
        setLangChoice(e.target.value);
    }

    return (
        <form onSubmit={(e) => props.getFormLang(e, langChoice)}>
            <label htmlFor="bookLanguage">Select a language:</label>
            <select name="bookLanguage" id="bookLanguage" value={langChoice} onChange={handleChoice}>
                <option value="Placeholder" disabled>Pick one:</option>
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