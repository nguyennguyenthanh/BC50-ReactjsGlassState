import React, { Component } from 'react';
import data from "./data.json";

export default class Glasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGlasses: data,
            urlImg: "./glassesImage/v1.png",
        }
    }
    handlChangeGlass(urlImg){
        this.setState({
            urlImg,
        })
    }
    renderListGlass() {
        const { listGlasses } = this.state;
        return listGlasses.map((glass) => {
            return (         
                    <a key={glass.id}>
                    <img  className='my-5 mx-4' src={glass.url} alt="hinh anh" />
                    <button className='btn btn-warning' onClick={()=>{this.handlChangeGlass(glass.url)}}>Try it</button>
                    </a>                    
            );
        });
    }
    render() {
        return (
            <>
                {/* Header */}
                <header>
                    <div className="text-center bg-dark text-white py-4">
                        TRY GLASSES APP ONLINE
                    </div>
                </header>
                {/* Carousel */}
                <div className="carousel row container-fluid">
                    <div className="col-sm-6 mt-5">
                        <div className="card1 card">
                            <img className='putGlass1' src={this.state.urlImg} alt="Anh minh hoa" />
                            <img className="card-img-top" src="./glassesImage/model.jpg" alt="hinh anh" />
                            <div className="card-body text-center">
                                <h4 className="card-title">FENDI F8650</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card2 card">
                            <img className='putGlass2' src={this.state.urlImg} alt="Anh minh hoa" />
                            <img className="card-img-top" src="./glassesImage/model.jpg" alt="hinh anh" />
                            <div className="card-body text-center">
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row card3 card">
                            <div className="col-sm-12">
                                {this.renderListGlass()}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
