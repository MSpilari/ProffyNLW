import React from 'react'

import Warning from '../../assets/images/icons/warning.svg'
import Search from '../../assets/images/icons/search.svg'
import './style.css'

interface BuscaProps{
    noReturn?: boolean
}

const Busca: React.FC<BuscaProps> = ({ noReturn }) => {
    if(noReturn){
        return(
            <div className='noReturnWrapper'>
                <h1><img src={Warning} alt="Warning"/> Ops !!</h1>
                <p>Desculpe, não encontramos um proffy de acordo com os parâmetros da sua pesquisa.</p>
                <h2>Tente novamente.</h2>
            </div>
        )
    }else{
        return(
            <div className='noReturnWrapper'>
                <img src={Search} alt="Search"/>
                <h1>Pesquise um Proffy nos campos acima.</h1>
            </div>
        )
    }
}

export default Busca