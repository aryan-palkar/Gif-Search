import React, {useState, useEffect} from "react";

const apiKey = "KzIgBM6MqHiEIsR2rL1iWTkWCAiGKR2B";

const Giphy = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [fetchData, setFetchData] = useState(false);

    useEffect(async () => {
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`)
        response = await response.json()
        setData(response.data)
    }
    ,[]);

    useEffect(() => {

        async function fetchInput(){
            // input = input.replace(/ /g, "_");
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`);
            const data = await response.json();
            setData(data.data);
        }

        fetchInput()
    }, [fetchData])

    return(
        <div>        
            <div className="searchbox">
                <input 
                type="text" 
                className="searchbox-bar"
                placeholder="Search"
                value={input}
                onInput={e => setInput(e.target.value)}
                onKeyDown={e => {
                    if(e.key === "Enter"){
                        setFetchData(!fetchData)
                    }
                }}
                />
                <button 
                className="searchbox-button"
                onClick={e =>{
                    setFetchData(!fetchData)
                }}
                >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                </button>

            </div>
            <div className="giphy">
                {data.map( item => 
                <img src={item.images.fixed_height.url} alt="" key={item.id} />
                )}
            </div>
        </div>
    );
}

export default Giphy;