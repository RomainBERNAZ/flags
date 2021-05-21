import React, { useState, useEffect } from 'react'
import CountryMain from '../Country_Main/Country_Main'
import axios from 'axios'
import './Main_Filter.css'

const Main_Filter = () => {

    const [ array, setArray ] = useState([])

    const getInfo = async(e) =>  {

        if(e){
            await axios.get(`https://restcountries.eu/rest/v2/name/${e}`)
            .then(function (response) {
                setArray(response.data)
              })
              .catch(function (error) {
              })
              .then(function () {
              });
        }
        else{
            setArray([])
        }
    }

    const filterRegion = (e) => {
        array.filter( item =>  item.region === {e})
    }
    
    useEffect(() => {
    }, [])


    return (
    <div className="main-filter">
        <div className="filter-row">
            <div className="filter">
                <input id='input' type="text" placeholder="Search for a country ..."  onChange={(e) => getInfo(e.target.value)} />
            </div>

            <select name="" id="" onChange={(e) => filterRegion(e.target.value)}>
                <option defaultValue>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <CountryMain props={array} />
    </div>
    )
}

export default Main_Filter; 