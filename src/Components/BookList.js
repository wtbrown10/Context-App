import React, { Component } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div className='book-list' style={{ color: ThemeContext.syntax, background: ThemeContext.bg}}>
                
                <ul>
                <li style={{ background: theme.ui }}>The way of kings</li>
                <li style={{ background: theme.ui }}>the Name of the wind</li>
                <li style={{ background: theme.ui }}>The Final empire</li>
                </ul>
                
            </div>
        )
    }
}
