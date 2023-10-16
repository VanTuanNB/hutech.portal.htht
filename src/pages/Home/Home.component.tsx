import { ReactElement, useEffect, useState } from "react";
import Button from "../../components/Button/Button.component";
import { IDataResponse } from "./interfaces/home.interface";

export default function HomePage(): ReactElement {
    const [ data, setData ] = useState<IDataResponse[]>([]); 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error) 
    }, []);
    return <div>
        <h1>Home Page Component</h1>
        <Button text="Phat" numberOfUnits={1}/>
        <ul>
            {  data && data.length && data.map(item => <li key={item.id}>{item.title}</li>) }
        </ul>
    </div>
}

// hooks: useState, useEffect, useCallback, useMemo, ....