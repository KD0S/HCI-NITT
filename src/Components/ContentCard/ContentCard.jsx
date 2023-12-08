import './ContentCard.css'


const ContentCard = () => {
    return (
        <div className='cards'>
            <div className="card">
                <h2>About Us</h2>
                <p>The EEG Laboratory at the National Institute of Technology (NIT) Trichy, India, is dedicated to investigating various neuro-physical aspects and functionalities of the human brain and body. Our focus areas encompass the in-depth exploration of human emotions, emotional intelligence, cognitive load, imagined speech and motor imagery using brain signals (BCI).
                    <br />
                    <br />
                    Our research involves the processing of brain signals acquired through advanced neuro-imaging techniques such as Electroencephalogram (EEG) and sensors-based methods on human body. We employ cutting-edge time-frequency signal processing methods to extract valuable insights into the underlying functions of the brain.
                    <br />
                    <br />
                    The laboratory's expertise extends to the specialization in classification and prediction tasks of brain signals, leveraging advanced Machine Learning (ML) and Deep Learning (DL) techniques. Our dynamic team comprises Ph.D. and M. Tech students under the guidance of Dr. B Shameedha Begum, a distinguished faculty member in the Department of Computer Science Engineering (CSE) at NIT Trichy.
                </p>
            </div>
            <div className="card">
                <h2>Latest News</h2>
                <p>
                    <b>Conference Proceedings @IEEE Xplore</b>
                    <br />
                    <br />
                    Kannadasan K, Haresh M V, Ambati Rami Reddy, B. Shameedha Begum, “BCIRecog: AN Optimized BCI System for Imagined Speech Recognition”, IEEE 14th International Conference on Computing, Communication and Networking Technologies, IIT Delhi, 2023
                </p>
            </div>
        </div>
    )
}

export default ContentCard