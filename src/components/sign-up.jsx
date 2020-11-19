import React from 'react'
import '../scss/sign-up.scss';
import CountDown from './count-down';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const SignUp = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        Swal.fire({
            title: 'Success!',
            text: `Thanks for the message ${data.name}. We will get in touch with you in the next few days.`,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }
    return (
        <div className="sign-up">
            <div className="img-background-wrap">
            </div>
            <div className="left-panel">
                <div className="main-title">
                    <p>Work smarter. Save time.</p>
                </div>
                <div className="main-text">
                    <p>Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon. </p>
                </div>
                <div className="count-down-sign-up">

                    <CountDown />
                </div>
            </div>
            <div className="form">


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrap">
                        <input type="text" placeholder="Name" name="name" ref={register({ required: true })} />
                        {errors.name && <span className="err-message">This cannot be empty</span>}
                    </div>

                    <div className="input-wrap">
                        <input type="text" name="email" placeholder="Email" ref={register({ required: true })}
                        />                {errors.email && <span className="err-message">This cannot be empty</span>}
                    </div>
                    <div className="input-wrap">
                        <select type="text" name="plan" ref={register({ required: true })}>
                            <option value="basic">Basic FREE</option>
                            <option value="pro">Pro 9.99$</option>
                            <option value="ultimate">Ultimate 19.99$</option>
                        </select>
                    </div>
                    <div className="input-wrap">
                        <input type="text" name="phone" placeholder="Phone Number" ref={register({ required: true })} />
                        {errors.phone && <span className="err-message">This cannot be empty</span>}
                    </div>

                    <div className="input-wrap">

                        <input type="text" name="company" placeholder="Company" ref={register({ required: true })} />
                        {errors.company && <span className="err-message">This cannot be empty</span>}
                    </div>



                    <button type="submit" className="form-submit">Get On The List</button>
                </form>
            </div>
        </div>

    );
}


export default SignUp;