import './ExternalResources.css'
import { useState } from 'react'

const ExternalResources = () => {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='iresources-main-body'>
            <div>
                {isLoading ? <div className='loader-container'>
                    <div className='loader'></div></div> :
                    <div className="resources-content-body">
                        <h1 className='main-title'>External Resources</h1>
                        <div className="resources-content-body-list-container">
                            <h2 className="resources-content-body-list-title">
                                Relevant Courses
                            </h2>
                            <ul className="resources-content-body-list">
                                <li>Sample course 1</li>
                                <li>Sample course 2</li>
                                <li>Sample course 3</li>
                            </ul>
                        </div>
                        <div className="resources-content-body-list-container">
                            <h2 className="resources-content-body-list-title">
                                Relevant Datasets
                            </h2>
                            <ul className="resources-content-body-list">
                                <li>Sample dataset 1</li>
                                <li>Sample dataset 2</li>
                                <li>Sample dataset 3</li>
                            </ul>
                        </div>
                        <div className="resources-content-body-list-container">
                            <h2 className="resources-content-body-list-title">
                                Relevant Tools
                            </h2>
                            <ul className="resources-content-body-list">
                                <li>Sample tool 1</li>
                                <li>Sample tool 2</li>
                                <li>Sample tool 3</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ExternalResources