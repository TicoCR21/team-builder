import React from "react";

export default function( { name, email, role, change, submit } )
{   
    return(
        <form onSubmit={submit}>
            <label>
                
                Name: 
                <input 
                    type        = "text" 
                    placeholder = "Enter Name" 
                    name        = "name"
                    value       = { name }
                    onChange    = { change }
                />

            </label>

            <br/>

            <label>
                
                Email:
                <input 
                    type        = "email"
                    placeholder = "Enter Email"
                    name        = "email"
                    value       = { email }
                    onChange    = { change } 
                />

            </label>

            <br/>

            <label>
                Role:
                <select name = "role" value = { role } onChange = { change } >
                    <option value="">Role?</option>
                    <option value="ADC">ADC</option>
                    <option value="Support">Support</option>
                    <option value="Jungler">Jungler</option>
                    <option value="Top">Top</option>
                    <option value="Mid">Mid</option>    
                </select>
            </label>

            <br/>
            
            <button type="submit"> Submit </button>
        </form>
    );
}