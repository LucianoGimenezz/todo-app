import React from "react";
import '../styles/Load.css';

function Load(){
    return(
        // <section className='Load'>
        //     <h2 className="Load__icon">Estamos cargando....</h2>
        // </section>
        <div className="content">
            <div className="container">
                <div className="container__loader"></div>
            </div>
        </div>
    )
}

export {Load};