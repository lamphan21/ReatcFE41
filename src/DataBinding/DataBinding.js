import React, { Component } from 'react'

export default class DataBinding extends Component {

    hocvien = {
        ma: 1,
        hoTen: 'Nguyen Van A',
        hinhAnh: 'http://picsum.photos/200/300'
    }

    // phuong thuc renderImg do minh tao ra
    renderImg() {
        return <img src='http://picsum.photos/200/300' alt='123' />
    }

    // Phuong thuc render cua react cua component
    render() {
        let title = 'hello fe 41';
        return (
            
            <div>
                <div className='container'>
                    <div className='card text-left'>
                        <img width={100} height={100} className='card-img-top' src={this.hocvien.hinhAnh} alt='' />
                        <div className='card-body'>
                            <h4 className='card-title'>{this.hocvien.hoTen}</h4>
                        </div>
                    </div>
                </div>
                {/* binding bien */}
                <h1>{title}</h1>
                <input value={title} />
                {/* binding phuong thuc */}
                {this.renderImg()}
            </div>
        )
    }
}
