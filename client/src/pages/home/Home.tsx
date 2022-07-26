import React, { useEffect } from 'react'
import { useLoginLink } from '../../api/GetLoginLink'

function Home() {
    const link = useLoginLink()

    const handleLoginClick = () => {
        console.log(link)
        window.open(link, '_self')
    }

    return (
        <div>
            <button disabled={!link} onClick={handleLoginClick}>
                Login to Zoho
            </button>
        </div>
    )
}

export default Home
