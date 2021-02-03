import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from 'axios'
import { ScatterPlotTwoTone } from '@material-ui/icons'
import StatsRow from './StatsRow'
import {db} from './firebase'

const TOKEN = 'c0cornf48v6rlbakt7j0'
const BASE_URL = 'https://finnhub.io/api/v1/quote'

const testData = []
function Stats() {
    const [stockData, setStockData] = useState([])
    const [myStocks, setMyStocks] = useState([])
    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot =>{
            let promises = [];
            let tempData = [];
            snapshot.docs.map((doc) => {
                promises.push(getStockData(doc.data().ticker)
                .then(res =>{
                    tempData.push({
                        id: doc.id,
                        data: doc.data(),
                        info: res.data
                    })
                })
            )})
            Promise.all(promises).then(() => {
                setMyStocks(tempData)
            })
        })
    }

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error)=> {
                console.error('Error', error.message);
            });

    };

    useEffect(() => {
        const stockslist = ['AAPL','MSFT','GME','TSLA','DIS','FB','NIO']
        getMyStocks()
        let promises =[]
        stockslist.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    testData.push({
                        name: stock,
                        ...res.data
                    })
                })
            )
        });
        Promise.all(promises).then(() => {
            setStockData(testData);
            console.log(testData);
        })
    }, [])
    return (
        <div className='stats'>
           <div className='stats_container'>
                <div className='stats_header'>
                   <p>Stocks</p>
                </div>
                <div className='stats_content'>
                    <div className='stats_row'>
                        {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                shares = {stock.info.shares}
                                price ={stock.info.c}
                            />
                        ))}
                    </div>
                </div>
                <div className='stats_header stats_list'>
                    <p>Lists</p>
                </div>
                <div className='stats_content'>
                    <div className='stats_row'>
                        {stockData.map((stock) =>(
                            <StatsRow
                                key = {stock.name}
                                name = {stock.name}
                                openPrice={stock.o}
                                price={stock.c}/>
                        ))}
                    </div>
                </div> 
           </div>
        </div>
    )
}

export default Stats
