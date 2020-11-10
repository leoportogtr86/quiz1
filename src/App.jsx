import React, { useState } from 'react'
import Questao from './components/Questao'
import Resultado from './components/Resultado'

export default () => {


    const [count, setCount] = useState(0)
    const [visibilidade1, setVisibilidade1] = useState('visivel')
    const [visibilidade2, setVisibilidade2] = useState('invisivel')
    const [visibilidade3, setVisibilidade3] = useState('invisivel')
    const [visibilidade4, setVisibilidade4] = useState('invisivel')
    const [visibilidade5, setVisibilidade5] = useState('invisivel')
    const [visibilidade6, setVisibilidade6] = useState('invisivel')
    const [visibilidade7, setVisibilidade7] = useState('invisivel')
    const [visibilidade8, setVisibilidade8] = useState('invisivel')
    const [visibilidade9, setVisibilidade9] = useState('invisivel')
    const [visibilidade10, setVisibilidade10] = useState('invisivel')


    //-------------------------------------------------------------------------
    function certa1() {

        console.log('acertou')

        setCount(count + 1)
        console.log(count)


        setVisibilidade1('invisivel')
        setVisibilidade2('visivel')



    }

    function errada1() {

        console.log('errou')
        setVisibilidade1('invisivel')
        setVisibilidade2('visivel')

    }




    //-------------------------------------------------------------------------
    function certa2() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)




        setVisibilidade2('invisivel')
        setVisibilidade3('visivel')

    }

    function errada2() {

        console.log('errou')
        setVisibilidade2('invisivel')
        setVisibilidade3('visivel')

    }

    //---------------------------------------------------------------------

    function certa3() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade3('invisivel')
        setVisibilidade4('visivel')



    }

    function errada3() {

        console.log('errou')
        setVisibilidade3('invisivel')
        setVisibilidade4('visivel')

    }

    //---------------------------------------------------------------------

    function certa4() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade4('invisivel')
        setVisibilidade5('visivel')

    }

    function errada4() {

        console.log('errou')
        setVisibilidade4('invisivel')
        setVisibilidade5('visivel')

    }

    //---------------------------------------------------------------------

    function certa5() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade5('invisivel')
        setVisibilidade6('visivel')

    }

    function errada5() {

        console.log('errou')
        setVisibilidade5('invisivel')
        setVisibilidade6('visivel')

    }

    //---------------------------------------------------------------------

    function certa6() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade6('invisivel')
        setVisibilidade7('visivel')

    }

    function errada6() {

        console.log('errou')

        setVisibilidade6('invisivel')
        setVisibilidade7('visivel')

    }

    //---------------------------------------------------------------------

    function certa7() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade7('invisivel')
        setVisibilidade8('visivel')

    }
    function errada7() {

        console.log('errou')
        setVisibilidade7('invisivel')
        setVisibilidade8('visivel')

    }

    //---------------------------------------------------------------------

    function certa8() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade8('invisivel')
        setVisibilidade9('visivel')

    }

    function errada8() {

        console.log('errou')
        setVisibilidade8('invisivel')
        setVisibilidade9('visivel')

    }

    //---------------------------------------------------------------------

    function certa9() {

        console.log('acertou')
        setCount(count + 1)
        console.log(count)

        setVisibilidade9('invisivel')
        setVisibilidade10('visivel')

    }

    function errada9() {

        console.log('errou')
        setVisibilidade9('invisivel')
        setVisibilidade10('visivel')

    }

    //---------------------------------------------------------------------

    function certa10() {

        console.log('acertou')

        setCount(count + 1)
        console.log(count)

        setVisibilidade10('invisivel')

    }

    function errada10() {

        console.log('errou')
        setVisibilidade10('invisivel')

    }

    //---------------------------------------------------------------------
    return (


        < div >

            <h1 className="text-center text-danger">Quiz de Intervalos</h1>
            <Questao
                numero_questao="1"
                titulo="Terça maior de C"
                a="1) D"
                b="2) Eb"
                c="3) G"
                d="4) E"
                img="https://www.flaticon.com/svg/static/icons/svg/2979/2979332.svg"

                onclickA={errada1}
                onclickB={errada1}
                onclickC={errada1}
                onclickD={certa1}
                visibilidade={`container m-5 ${visibilidade1}`}

            />


            <Questao
                numero_questao="2"
                titulo="Quarta justa de G "
                a="1) F"
                b="2) C"
                c="3) C#"
                d="4) B"
                img="https://www.flaticon.com/svg/static/icons/svg/3659/3659784.svg"

                onclickA={errada2}
                onclickB={certa2}
                onclickC={errada2}
                onclickD={errada2}
                visibilidade={`container m-5 ${visibilidade2}`}

            />

            <Questao
                numero_questao="3"
                titulo="Sexta maior de D"
                a="1) G"
                b="2) Cb"
                c="3) C#"
                d="4) B"
                img="https://www.flaticon.com/svg/static/icons/svg/3655/3655261.svg"

                onclickA={errada3}
                onclickB={errada3}
                onclickC={errada3}
                onclickD={certa3}
                visibilidade={`container m-5 ${visibilidade3}`}

            />

            <Questao
                numero_questao="4"
                titulo="Segunda maior de C#"
                a="1) D"
                b="2) C"
                c="3) D#"
                d="4) F"
                img="https://www.flaticon.com/svg/static/icons/svg/3706/3706710.svg"

                onclickA={errada4}
                onclickB={errada4}
                onclickC={certa4}
                onclickD={errada4}
                visibilidade={`container m-5 ${visibilidade4}`}

            />

            <Questao
                numero_questao="5"
                titulo="Quinta justa de F"
                a="1) G"
                b="2) C"
                c="3) Bb"
                d="4) D"
                img="https://www.flaticon.com/svg/static/icons/svg/3699/3699979.svg"

                onclickA={errada5}
                onclickB={certa5}
                onclickC={errada5}
                onclickD={errada5}
                visibilidade={`container m-5 ${visibilidade5}`}

            />

            <Questao
                numero_questao="6"
                titulo="Sétima maior de A"
                a="1) G#"
                b="2) B"
                c="3) D#"
                d="4) E"
                img="https://www.flaticon.com/svg/static/icons/svg/2983/2983940.svg"

                onclickA={certa6}
                onclickB={errada6}
                onclickC={errada6}
                onclickD={errada6}
                visibilidade={`container m-5 ${visibilidade6}`}

            />

            <Questao
                numero_questao="7"
                titulo="Sétima menor de Bb"
                a="1) F"
                b="2) G"
                c="3) Ab"
                d="4) B"
                img="https://www.flaticon.com/svg/static/icons/svg/3655/3655230.svg"

                onclickA={errada7}
                onclickB={errada7}
                onclickC={certa7}
                onclickD={errada7}
                visibilidade={`container m-5 ${visibilidade7}`}

            />

            <Questao
                numero_questao="8"
                titulo="Terça menor de F"
                a="1) D"
                b="2) Ab"
                c="3) C#"
                d="4) E"
                img="https://www.flaticon.com/svg/static/icons/svg/1682/1682586.svg"

                onclickA={errada8}
                onclickB={certa8}
                onclickC={errada8}
                onclickD={errada8}
                visibilidade={`container m-5 ${visibilidade8}`}

            />

            <Questao
                numero_questao="9"
                titulo="Oitava justa de Eb"
                a="1) Eb"
                b="2) D#"
                c="3) F"
                d="4) Gb"
                img="https://www.flaticon.com/svg/static/icons/svg/934/934116.svg"

                onclickA={certa9}
                onclickB={certa9}
                onclickC={errada9}
                onclickD={errada9}
                visibilidade={`container m-5 ${visibilidade9}`}

            />

            <Questao
                numero_questao="10"
                titulo="Terça maior de G"
                a="1) Bb"
                b="2) C"
                c="3) D"
                d="4) B"
                img="https://www.flaticon.com/svg/static/icons/svg/2907/2907253.svg"

                onclickA={errada10}
                onclickB={errada10}
                onclickC={errada10}
                onclickD={certa10}
                visibilidade={`container m-5 ${visibilidade10}`}

            />

            <Resultado

                resultado={count}
            />
        </div >
    )
}