import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState([
        {
            "title": ""
        }
    ])

    const [result, setResult] = useState([])

    // delete event handling
    const deleteImage = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Added to your cart successfully")
                }
                else {
                    alert("Error in purchasing")
                }
            }
        ).catch()
    }

    //input value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value }, [])
    }


    //search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )



    }

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Ornament Name</label>
                        <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-secondary" onClick={readValue}>Search</button>
                    </div>

                    
                        
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">

                                    {result.map(
                                        (value, index) => {
                                            return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                                <div class="card">
                                                    <img src={value.img} class="card-img-top" alt="..."></img>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.title}</h5>
                                                        <p class="card-text">{value.description}</p>
                                                        <a href="#" class="btn btn-primary">{value.price}</a>
                                                        <a href="#" class="btn btn-danger" onClick={() => { deleteImage(value._id) }}>Delete</a>
                                                    </div>
                                                </div>

                                            </div>
                                        }
                                    )}

                                </div>
                            </div>
                        
                    

                </div>
            </div>

        </div>
    )
}

export default Search