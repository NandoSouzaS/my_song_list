import React from 'react'
import {Tile} from '../../styles'
import { Btn } from '../../styles'
import deezer from './deezer.png'

export default props => {
    return(
        <Tile>
            <img src='' alt='cover'></img>
            <h1>nome</h1>
            <p>artista</p>
            <time>data</time>
            <time>duração</time>
            <Btn>
            <span> &#x2665;</span>
            <span><img src={deezer} alt='dezzer_logo'></img></span>    
            </Btn>
        </Tile>
    )
}