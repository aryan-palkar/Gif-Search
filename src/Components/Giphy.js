import React, {useState, useEffect} from "react";

const apiKey = "KzIgBM6MqHiEIsR2rL1iWTkWCAiGKR2B";

const Giphy = () => {
    const [data, setData] = useState([]);

    useEffect(async () => {
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`)
        response = await response.json()
        setData(response.data)
    }
    ,[]);

    useEffect(() => {

    }, [data])

    return(
        <div className="giphy">
            {data.map( item => 
            <img src={item.images.fixed_height.url} alt="" key={item.id} />
            )}
        </div>
    );
}

export default Giphy;