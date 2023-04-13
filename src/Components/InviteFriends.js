import './InviteFriends.css'

const InviteFriends = () => {
    return <div className="invite--sect">
        {/* <div className='invite--friend'>
            <img src="./invite.svg" alt="" className='invite-img'/>
            <div className='invite-text'>
                <p className='invite--p'>STEP 1</p>
                <h3 className='invite--h'>INVITE FRIENDS</h3>
                <p className='refer-text'>Refer friends with your unique referral link</p>
            </div>
        </div> */}
        <div className='collect--coin'>
            <img src="./invite.svg" alt="" className='coin--img' />
            <div className='coin--collect'>
                <p className='coin-p'>STEP 1</p>
                <h3 className='coin-h'>INVITE FRIENDS</h3>
                <p className='refer-text'>To get started, we would like you to refer friends with your unique referral link</p>
            </div>
        </div>
        <div className='collect--coin coin--sect'>
            <img src="./collect-coins.svg" alt="" className='coin--img' />
            <div className='coin--collect'>
                <p className='coin-p'>STEP 2</p>
                <h3 className='coin-h'>COLLECT COINS</h3>
                <p className='refer-text'>Get 1 coin for each friend that installs our extension using your referral link</p>
            </div>
        </div>
        <div className='collect--coin'>
            <img src="./voucher.svg" alt="" className='coin--img' />
            <div className='coin--collect'>
                <p className='coin-p'>STEP 3</p>
                <h3 className='coin-h'>GET VOUCHER</h3>
                <p className='refer-text'>Redeem for a $20 hotel booking voucher once you collect 20 coins</p>
            </div>
        </div>
        {/* <div className='get-voucher'>
            <img src="./voucher.svg" alt="" className='voucher-img' />
            <div className='invite-text'>
                <p className='voucher-p'>STEP 3</p>
                <h3 className='voucher-h'>GET VOUCHER</h3>
                <p className='refer-text'>Redeem for a $20 hotel booking voucher once you collect 20 coins</p>
            </div>
        </div> */}
</div>
}

export default InviteFriends;