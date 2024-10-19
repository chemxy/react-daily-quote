import './App.css';
import {useEffect, useState} from "react";

function App() {

    /* sample quote response
    * [
  {
    "quote": "The will of man is his happiness.",
    "author": "Friedrich Schiller",
    "category": "happiness"
  }
]
    *
    * */

    const [quoteResponses, setQuoteResponses] = useState([]);
    useEffect(() => {
        const category = "happiness";
        fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,{
            headers: { 'X-Api-Key': 'lMR7MvBsNn9GjF8solFxRA==i1Eb7mTNQckR5Lnv  '}
        }).then(res => {
            return res.json();
        }).then(res => {
            console.log(res);
            setQuoteResponses(res);
        })
    }, []);

    return (
        <div className="App">
            {quoteResponses.map(quoteResponse => <div>
                <div>
                    {quoteResponse.quote}
                </div>
                <div>
                    {quoteResponse.author}
                </div>
                <div>
                    {quoteResponse.category}
                </div>
            </div>)}
        </div>
    );
}

export default App;
