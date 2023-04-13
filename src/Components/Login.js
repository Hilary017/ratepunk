import { useState } from 'react';
import classes from './Login.module.css';


const Login = () => {
    const [error, setError] = useState(false)
    const [butn, setButn] = useState(true);
    const [mailIsValid, setMailIsValid] = useState(false);

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
                        <input type="text" placeholder="https://ratepunk.com/referral" className={classes.success_input}></input>
                        <button className={classes.success_url}>Copy URL</button>
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