import React from 'react'
import Header from '../../components/Header'
import './home.css'


function Home(){
    return(
        <div className="Container">
            <div>
                <Header 
                  title={'Kodemia modulo 3'}
                  description={'Aqui aprenderemos React JS'}
                />
            </div>
        </div>
    );
}

export default Home;