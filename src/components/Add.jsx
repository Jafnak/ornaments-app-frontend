import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const [data, setData] = useState([
        {
            "title": String,
            "description": String,
            "price": String,
            "img": String
        }
    ])

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value }, [])
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add", data).then(
            (response) => {
                console.log(response.data)
            }
        ).catch().finally()
    }

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="formlabel">Ornament name</label>
                        <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" value={data.description} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Image</label>
                        <input type="text" className="form-control" name="img" value={data.img} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Price</label>
                        <input htmlFor="text" className="form-control" name="price" value={data.price} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-secondary" onClick={readValue}>Add</button>
                    </div>

                    

                </div>
            </div>

        </div>


    )
}

export default Add