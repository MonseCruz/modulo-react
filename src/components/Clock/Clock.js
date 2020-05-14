import React, {Component} from 'react'

function Clock(){
    return(
        <div>
            <p>Hola la hora en este momento es: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default Clock