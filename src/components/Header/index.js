import React from 'react'
import {Header} from './../../styles'
import SearchBar from './SearchBar'

export default props => {
    return(
        <Header>
            <h1>My Song List</h1>
            <SearchBar />
        </Header>
    )
}