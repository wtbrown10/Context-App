import React, {useContext} from 'react'
import { BookContext } from '../Context/BookContext'
import {ThemeContext} from '../Context/ThemeContext'


export default function BookList() {

    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className='book-list' style={{ color: ThemeContext.syntax, background: ThemeContext.bg}}>
                
                <ul>
                    {books.map(book => {
                        return (
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                        )
                    } )}
                </ul>
                
            </div>
    )
}

 