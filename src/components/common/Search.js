import React from 'react'
import searchLogo from './Search.png'
import './Search.css' 


class Search extends React.Component{
    constructor(){
        super();
        this.state={searchQuery:' '}
    }


onInputChangeHandler=(event)=>{
    this.setState({searchQuery:event.target.value})

}



render(){ 


return (
     <div className="Search">
        <span className="Search-icon"/>
            <img src={searchLogo} alt="search-logo" />
        
        <input   type='text' value={this.state.searchQuery} onChange={this.onInputChangeHandler}/>
    </div>
)
}
}

export default Search