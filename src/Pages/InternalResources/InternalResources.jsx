import { useState } from 'react'
import { Header } from '../../Components/Header/Header'
import './InternalResources.css'
import Footer from '../../Components/Footer/Footer'


const InternalResources = () => {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='resources-main'>
            <Header></Header>
            <div>
                {isLoading ? <div className='loader-container'>
                    <div className='loader'></div></div> :
                    <div className="resources-content-body">
                        <h1 className='main-title'>Internal Resources</h1>
                        <div className="resources-content-body-list-container">
                            <h2 className="resources-content-body-list-title">
                                Courses
                            </h2>
                            <ul className="resources-content-body-list">
                                <li>Sample course 1</li>
                                <li>Sample course 2</li>
                                <li>Sample course 3</li>
                            </ul>
                        </div>
                        <div className="resources-content-body-list-container">
                            <h2 className="resources-content-body-list-title">
                                Presentations
                            </h2>
                            <ul className="resources-content-body-list">
                                <li>Sample Presentation 1</li>
                                <li>Sample Presentation 2</li>
                                <li>Sample Presentation 3</li>
                            </ul>
                        </div>
                        <div className="resources-content-body-list-container">
                            <h2 className="resources-content-body-list-title">
                                Hardware
                            </h2>
                            <ul className="resources-content-body-list">
                                <li>Sample hardware 1</li>
                                <li>Sample hardware 2</li>
                                <li>Sample hardware 3</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default InternalResources