import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [showSections, setShowSections] = useState({ numbers: true, alphabets: true, highestAlphabet: true });

    const handleSubmit = async () => {
        try {
            const payload = JSON.parse(jsonInput);
            const res = await axios.post('https://your-backend-url/bfhl', payload);
            setResponse(res.data);
        } catch (error) {
            console.error('Invalid JSON input or API error', error);
        }
    };

    return (
        <div>
            <h1>Your Roll Number</h1>
            <textarea value={jsonInput} onChange={e => setJsonInput(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>

            {response && (
                <div>
                    {showSections.numbers && <div>Numbers: {response.numbers.join(', ')}</div>}
                    {showSections.alphabets && <div>Alphabets: {response.alphabets.join(', ')}</div>}
                    {showSections.highestAlphabet && <div>Highest Alphabet: {response.highest_alphabet.join(', ')}</div>}
                </div>
            )}
        </div>
    );
}

export default App;
