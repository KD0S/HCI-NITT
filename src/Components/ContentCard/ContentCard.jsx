import './ContentCard.css'

import { data } from './ContentDetails'

const ContentCard = () => {
    return (
        <div className='cards'>
            {data.map((item, idx) =>
                <div className="card" key={idx}>
                    <h2>{item.heading}</h2>
                    <p>{item.body}</p>
                </div>
            )}
        </div>
    )
}

export default ContentCard