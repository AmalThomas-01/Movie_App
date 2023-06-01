import React from "react";
import { InputText } from 'primereact/inputtext';
const SearchBox=(props)=>{
    return(
        <div className="py-6">
            <InputText placeholder="Type film" value={props.value}
                onChange={(event)=>props.setSearchValue(event.target.value)}
                />
        </div>
    )
}

export default SearchBox;