import { useState } from 'react';
import classes from './Login.module.css';


const Login = () => {
    const [error, setError] = useState(false)
    const [butn, setButn] = useState(true);
    const [mailIsValid, setMailIsValid] = useState(false);
    const [copied, setCopied] = useState(false);

    const checkInput = (event) => {
        event.preventDefault();
        const reg = /^\S+@\S+\.\S+$/
        const inputValue = document.getElementById('input').value;
        const emailIsValid = reg.test(inputValue);
        console.log(inputValue);
        
        fetch('https://fe-task-47b65-default-rtdb.firebaseio.com/email.json',
            {
                method: 'PUT',
                body: JSON.stringify(inputValue),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        fetch('https://api.jsonbin.io/v3/b/6371e91b0e6a79321e490753', {
            method: 'POST',
            body: inputValue
        });

        if(!emailIsValid) {
            setError(true)
            setMailIsValid(false)
        } else {
            setError(false)
            setButn(false)
            setMailIsValid(true)
        }

        document.getElementById('input').value = "";
    }

    const copyTextHandler = () => {
        setTimeout(() => {
            setCopied(true);
        }, 200)

        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }

    return <div className={classes.refer_friends}>
                <h3 className={classes.welcome_text}>REFER FRIENDS AND GET REWARDS</h3>
                <p className={classes.welcome_p}>Refer your friends to us and earn hotel booking
                        vouchers. We'll give you 1 coin for each friend 
                        that installs our extension. Minimum cash-out 
                        at 20 coins</p>
                
                {error && <p className={classes.error_p}>invalid email address</p>}
                {mailIsValid ? 
                <div className={classes.success__sect}>
                    <div className={classes.confirm_mail}>
                        <img src='./success.svg' className={classes.success_img} />
                        <p className={classes.successful_text}>Your email is confirmed!</p>
                    </div>
                    <div className={classes.mail_confirm}>
                        <input type="text" placeholder="https://ratepunk.com/referral" className={classes.success_input} value="https://ratepunk.com/referral"></input>
                        {!copied && <button className={classes.success_url} onClick={copyTextHandler}>Copy URL</button>}
                        {copied && <p className={classes.copy_text}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                                <g id="Group_12260" data-name="Group 12260" transform="translate(-464 -473)">
                                    <circle id="Ellipse_221" data-name="Ellipse 221" cx="16" cy="16" r="16" transform="translate(464 473)" fill="#8cd943"/>
                                    <path id="Ellipse_221_-_Outline" data-name="Ellipse 221 - Outline" d="M16,1A15,15,0,0,0,5.393,26.607,15,15,0,1,0,26.607,5.393,14.9,14.9,0,0,0,16,1m0-1A16,16,0,1,1,0,16,16,16,0,0,1,16,0Z" transform="translate(464 473)" fill="#1f343e"/>
                                    <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M5.434,16.274l-5.2-5.2a.8.8,0,0,1,0-1.131L1.366,8.812a.8.8,0,0,1,1.131,0l3.5,3.5,7.5-7.5a.8.8,0,0,1,1.131,0l1.131,1.131a.8.8,0,0,1,0,1.131l-9.2,9.2A.8.8,0,0,1,5.434,16.274Z" transform="translate(472 478.457)" fill="#fff"/>
                                    <path id="Icon_awesome-check_-_Outline" data-name="Icon awesome-check - Outline" d="M6,16.509a.8.8,0,0,0,.566-.234l9.2-9.2a.8.8,0,0,0,0-1.131L14.634,4.812a.8.8,0,0,0-1.131,0L6,12.314l-3.5-3.5a.8.8,0,0,0-1.131,0L.234,9.943a.8.8,0,0,0,0,1.131l5.2,5.2A.8.8,0,0,0,6,16.509m0,1a1.788,1.788,0,0,1-1.273-.527l-5.2-5.2a1.8,1.8,0,0,1,0-2.546L.659,8.1A1.8,1.8,0,0,1,3.2,8.1L6,10.9l6.8-6.8a1.8,1.8,0,0,1,2.546,0l1.131,1.131a1.8,1.8,0,0,1,0,2.546l-9.2,9.2A1.788,1.788,0,0,1,6,17.509Z" transform="translate(472 478.457)" fill="#1f343e"/>
                                </g>
                            </svg> 
                            <span>Copied</span></p>}
                    </div>
                </div> : 
                <div className={classes.input_sect}>
                    <img src="./email.svg" alt="An email" className={classes.input_img} />
                    <input type="email" pattern='' placeholder="Enter your email address" id='input' className={classes.input_field}></input>
                </div>
                }
            <div className={classes.referral_sect}>
                {butn && <button className={classes.referral_btn} onClick={checkInput}>Get Referral Link</button>}
            </div>
            <p className={classes.limit_p}>Limits on max rewards apply</p>
        </div>
}

export default Login;