import React from 'react'
import styled from 'styled-components'




export default props => {

    return (

        <div>

            <h1 className="text-center text-primary">{props.resultado} resposta(s) correta(s).</h1>

            <footer className="text-dark m-5 text-center">Desenvolvido por <a href="https://www.instagram.com/leoportooficial/">@leoportooficial</a></footer>


        </div>
    )
}