import React, { useState } from 'react'
import { fetchQuote } from '../../api/quoteAPI'

const QuoteComponent = () => {
    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false) 
    
    const fetchQ = async () => {
        setLoading(true)
        try {
            const response = await fetchQuote() 
            setQuote(response.data)
        } catch (error) {
            console.error('Ошибка при получении цитаты', error)
        } finally {
            setLoading(false)
        }
    }
    
    
    return (
        <div>
            <h2>Quotes</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {quote.fact}
                </div>
            )}
            <button onClick={fetchQ}>Get Quote</button>
        </div>
    )
}

export default QuoteComponent