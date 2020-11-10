import React from 'react'
import styled from 'styled-components'


const Questao = styled.div`

img{

    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;

}

span:hover{

    background-color: #498df3;
    cursor: pointer;


}

.invisivel{

    display: none;
}

.visivel{

    display: block;
}



`



export default props => {


    return (

        <Questao>

            <div className={props.visibilidade}>

                <div className="row">

                    <div className="col-12">


                        <div className="card">

                            <div className="card-header">

                                <img src={props.img} alt="" className="card-img-top" />
                                <h3 className="text-center text-danger card-title">Questão {props.numero_questao}</h3>
                                <h5 className="text-dark card-subtitle text-center">Marque a alternativa correta.</h5>

                            </div>

                            <div className="card-body">

                                <h2 className="text-warning">{props.titulo}</h2>

                                <h4 className="text-primary m-5 animate__animated"><span className="badge badge-dark w-25" onClick={props.onclickA}>{props.a}</span></h4>
                                <h4 className="text-primary m-5 animate__animated"><span className="badge badge-danger w-25" onClick={props.onclickB}>{props.b}</span></h4>
                                <h4 className="text-primary m-5 animate__animated"><span className="badge badge-primary w-25" onClick={props.onclickC}>{props.c}</span></h4>
                                <h4 className="text-primary m-5 animate__animated"><span className="badge badge-success w-25" onClick={props.onclickD}>{props.d}</span></h4>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Questao>
    )
}