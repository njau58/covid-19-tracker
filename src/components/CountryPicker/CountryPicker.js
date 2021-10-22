import React,{useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'

import {fetchCountries} from '../../api'


const CountryPicker = ({handleCountryChange}) => {

    const [countries,setCountries] = useState([])
 


    useEffect(()=>{

        const fetchAPI = async()=>{

            let response = await fetchCountries()
            setCountries(response)
            
 

        }
        fetchAPI()

    },[setCountries])



 




    return (
       <FormControl className={styles.formControl}>
           <NativeSelect  onChange={(e)=>handleCountryChange(e.target.value)
    }>
           <option value="">Global</option>

             {countries.map((country, index)=>{

                 return <option key={index} value={country}>{country}</option>
             })}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker
