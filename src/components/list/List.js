import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
// import Loading from '../common/Loading';
import Pagination from './Pagination';
import Table from './Table';



class List extends React.Component{
    constructor() {
        super();
        this.state={
            page:1,
            totalPages:0,
            loading:false,
            currencies:[],
        error:null
        };
        // this.handlePaginationClick=this.handlePaginationClick.bind(this)

    }

    handlePaginationClick=(direction)=>{
    //    handlePaginationClick(direction) {

        
        let nextPage=this.state.page
        


        nextPage=direction==="next"?nextPage+1:nextPage-1

        this.setState({page:nextPage},()=>{
            console.log("hi amit")
            this.fetchCurrencies()
        })
        
    }
    componentDidMount() {
        this.fetchCurrencies();
    }

    fetchCurrencies()
    {
        // this.state={loading:true}
        const{page}=this.state
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
        .then(handleResponse)
        .then((data)=>{
            console.log(data)
            const{currencies,totalPages}=data;
            this.setState({
                currencies,
                // loading:false,
                totalPages
            })
        })
        

    }

render() {

const {page,totalPages,currencies}=this.state

// if(loading) {
//     return (
//         <div className="loading-container"><Loading /></div>
//     )
// }
    return(

    <div>
        <Table currencies={currencies}/>
        <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>
    </div>
    )
}



}
export default List