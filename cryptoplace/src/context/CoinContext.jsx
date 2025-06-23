// import { createContext, useEffect, useState } from "react";

// export const CoinContext = createContext();

// const CoinContextProvider = (props)=>{

//     const [allCoin, setAllCoin] = useState([]);
//     const [currency, setCurrency] = useState({

//        name: "usd",
//        symbol: "$"

//     })
//     const fetchAllCoin = async ()=>{
//         const options = {
//             method: 'GET',
//             headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-YER3JZj3TF8niLsGv5M8mFFm'}
//           };
          
//           fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
//             .then(response => response.json())
//             .then(response => setAllCoin(response))
//             .catch(err => console.error(err));
//     }

// useEffect(()=>{
//     fetchAllCoin();
// },[currency])

//     const contextValue = {
//         allCoin, currency, setCurrency
//     }

//     return (
//         <CoinContext.Provider value={contextValue}> 
//             {props.children}
//         </CoinContext.Provider>
//     )
// }

// export default CoinContextProvider

import { createContext, useState, useEffect } from 'react';

export const CoinContext = createContext(); // ✅ named export

const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: 'usd',
    symbol: '$'
  });

  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-YER3JZj3TF8niLsGv5M8mFFm'
      }
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      setAllCoin(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  return (
    <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
