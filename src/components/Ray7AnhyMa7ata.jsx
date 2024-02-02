import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { first_level_stations, second_level_stations, third_level_stations } from './Stations';




function Ray7AnhyMa7ata(props){

    function onchangedestinationstation(event){
        props.setdestination(event.target.value);
    }
        return(
            <>
                <label>عايز تروح محطة ايه؟</label>
                <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangedestinationstation}>
                <option disabled className='OptionTitle'>محطات الخط الاول</option>
                    {(first_level_stations.slice(1)).map(
                        (station)=>(<option value={station.id}>{station.name}</option>)
                    )}
                
                        
                        <option disabled className='OptionTitle'>محطات الخط التاني</option>
                        {(second_level_stations.slice(1)).map(
                        (station)=>(<option value={station.id}>{station.name}</option>)
                    )}


                    <option disabled className='OptionTitle'>محطات الخط التالت</option>
                    {(third_level_stations.slice(1)).map(
                        (station)=>(<option value={station.id}>{station.name}</option>)
                    )}
                </select>
            </>
                )
}
export default Ray7AnhyMa7ata
