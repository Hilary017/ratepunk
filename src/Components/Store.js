import './Store.css'

const Store = () => {
    return <div className="store-sect">
        <a href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk' className='store-link'>
            <button className='chrome--store'>
                <img src='./chrome.svg' className='store-img chrome--img' alt='Chrome' />
                {/* <div className='chrome--sect second--sect'>
                    <p className='web--store'>available in the</p>
                    <p className='chro--store'>chrome web store</p>
                </div> */}
                <div className='chrome--sect'>
                    <p className='chrome-sect-p'>available in the</p>
                    <p className='app--store'>apple app store</p>
                </div>
            </button>
        </a>
        <a href='https://apps.apple.com/app/ratepunk/id1607823726' className='store-link'>
            <button className='chrome--store'>
                <img src='./apple.svg' className='store-img apple-img' alt='Chrome' />
                <div className='chrome--sect'>
                    <p className='chrome-sect-p'>available in the</p>
                    <p className='app--store'>apple app store</p>
                </div>
            </button>
        </a>
        <button className='chrome--store chrome-reviews'>
            <div>
                <div className='store-star'>
                    <p className='star-p'>&#9733;</p>
                    <p className='star-p'>&#9733;</p>
                    <p className='star-p'>&#9733;</p>
                    <p className='star-p'>&#9733;</p>
                    <p className='star-p'>&#9733;</p>
                </div>
            </div> <p className='store-p'>Chrome Store reviews</p>
        </button>
    </div>
}

export default Store;