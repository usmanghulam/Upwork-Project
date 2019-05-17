import React, { Component } from 'react';

class app extends Component {
    state = {
        total: '',
        data : []
    }
    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = e => {
        var items = {
            date: this.state.date,
            cost: this.state.cost,
            quantity: this.state.quantity,
            total: this.state.cost * this.state.quantity
        }
        this.setState({
            data : [...this.state.data,items],
            total: this.state.cost * this.state.quantity
        })
    }
    editHandler = index => {
        let cost = prompt("Update Cost",this.state.data[index].cost)
        let quantity = prompt("Update Quantity",this.state.data[index].quantity)

        let editItem = this.state.data;
        editItem[index].cost = cost;
        editItem[index].quantity = quantity;
        this.setState({
            data : editItem
        })
    }
    deleteHandler = index => {
        let deleteItems = this.state.data;
        deleteItems.splice(index,1)
        this.setState({
            data : deleteItems
        })
    }
    render() {
        let dataArr = this.state.data;
        let renderData = dataArr.map((res,index)=> {
            return (
               <tr key={index}>
                   <td>Your ITEM</td>
                   <td>{res.date}</td>
                   <td>{res.cost}</td>
                   <td>{res.quantity}</td>
                   <td><button type="button" onClick={()=> this.editHandler(index)} className="btn btn-success">EDIT</button></td>
                   <td><button type="button" onClick={()=> this.deleteHandler(index)} className="btn btn-danger">Delete</button></td>
               </tr>
            )
        })
        return (
            <React.Fragment>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h1 className="pb-5">Invoice</h1>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <h5>Invoice Number</h5>
                                        <p>000000</p>
                                    </div>
                                    <div className="pt-5">
                                        <h5>Billed to</h5>
                                        <p>Client Name</p>
                                        <p>Street, Address</p>
                                        <p>City, State, Country</p>
                                        <p>Zip code</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="">
                                        <h5>Date of Issue</h5>
                                        <input onChange={this.changeHandler} type="date" name="date" />
                                    </div>
                                    <div className="pt-5">
                                        <h5>Your Company Name</h5>
                                        <p>123 Your Street</p>
                                        <p>645-433-777</p>
                                        <p>demo@gmail.com</p>
                                        <p>www.demo.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 offseet-2 pt-5 mt-5">
                            <div className="row">
                                <div className="col-2">
                                    <h5 className="pt-4">ITEMS</h5>
                                </div>
                                <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="usr">Unit Cost:</label>
                                    <input onChange={this.changeHandler} type="text" name="cost" placeholder="COST" className="form-control" id="usr" />
                                </div>
                                </div>
                                <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="q">Quantity:</label>
                                    <input onChange={this.changeHandler} type="number" name="quantity" placeholder="Quantity" className="form-control" id="q" />
                                </div>
                                </div>
                                <div className="col-2">
                                    <h5>Total</h5>
                                    <span>{this.state.total}</span>
                                </div>
                                <button className="btn btn-block btn-secondary" type="button" onClick={this.submitHandler}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="container">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Unit.Cost</th>
                    <th>Quantity</th>
                    <th><b>EDIT Invoices</b></th>
                    <th><b>Delete Invoices</b></th>
                    </tr>
                </thead>
                <tbody> 
                    {renderData}
                </tbody>
                </table>
            </div>
        </React.Fragment>
        );
    }
}

export default app;