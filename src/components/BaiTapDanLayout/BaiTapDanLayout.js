import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTSmartphone from './BTSmartphone'
import BTLaptop from './BTLaptop'
import BTPromotion from './BTPromotion'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTSlider />
                <BTSmartphone />
                <BTLaptop />
                <BTPromotion />
            </div>
        )
    }
}
