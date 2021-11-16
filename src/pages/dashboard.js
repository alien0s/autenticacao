import React,{useState,useEffect} from 'react'
import Api from '../api'

export default function Dashboard(){

    const [data,setData] = useState([])

    useEffect(()=>{
        Api.get(`users`).then(res => {
            setData(res.data.data)
        })
    },[])
    
    return (
        <div id="dashboard_page">
            <h1>ReqRes Users</h1>
            <div className="box_cards">
            {
                data.map((index,i) => {
                    return(
                        <div className="card" key={i}>
                            <div className="box_image">
                                <img src={index.avatar}/>
                            </div>
                            <div className="box_texts">
                                <div className="box_texts_row">
                                    <span>{index.first_name} {index.last_name}</span>
                                    <p>{index.email}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}