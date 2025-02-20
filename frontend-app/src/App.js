import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Ошибка:", error));
    }, []);

    return (
        <div>
            <h1>Данные с Flask API</h1>
            {data ? (
                <div>
                    <p>{data.message}</p>
                    <ul>
                        {data.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
}

export default App;
