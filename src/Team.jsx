import React from "react";


export default function( { info } )
{
    return !info ? <h3>Fetching...</h3> : 
    ( 
        <div>
            <h2>Name: { info.name }</h2>
            <p>Email: { info.email }</p>
            <p>Role: { info.role }</p>
        </div>  
    );  
}