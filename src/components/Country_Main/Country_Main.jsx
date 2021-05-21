import React from 'react'
import './Country_Main.css'



const Country_Main = ( array ) => {
        
    const tab = array.props
    
    return (
            <div className="country-main">
                { array ? 
                    tab.map( item => {
                        return(
                            <div className="country" key={item.numericCode}>
                                <img src={item.flag} alt="" />
                                <h3>{item.name}</h3>
                                <p>Population : {item.population}</p>
                                <p>Region : {item.region}</p>
                                <p>Capitale : {item.capital}</p>
                        </div>
                        )
                    })
                    :''
                }
             
            </div>
        )
    }

 export default Country_Main;