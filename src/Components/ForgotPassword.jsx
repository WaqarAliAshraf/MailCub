import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
const [email, setEmail] = useState('');
const [emailFound, setEmailFound] = useState(false);
const [newPassword, setNewPassword] = useState('');
const database = ['user1@gmail.com', 'user2@gmail.com'];

const handleSubmit = (e) => {
e.preventDefault();
setEmailFound(database.includes(email));
};

const handleResetPassword = () => {

console.log(`Reset password for ${email} to ${newPassword}`);
};

return (
<>
    <div className="container-fluid">
        <div className="row align-items-center ">
            <div className="  col-7">
                <div className="image">
                   <Link to="/login"> <img src={Logo} alt="" className='img-fluid logo' /></Link>
                </div>
                {/* ============= Form ============= */}
                <div className="container mt-3 relax">
                    <div className="main-form  w-50">
                        <form onSubmit={handleSubmit}>
                            <h2>Forgot Your Password? </h2>
                            <h6 className='text-success'> Enter your registered email to Reset your password</h6>
                            <div className='mb-3 mt-4'>
                                <TextField label="Enter Email" type="email" value={email} onChange={(e)=>
                                    setEmail(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                    required
                                    />
                            </div>
                            <Button sx={{ backgroundColor: "#00A95A"}} type="submit" variant="contained" fullWidth>Submit</Button>

                            {emailFound && (
                            <div className='mt-4'>
                                <h6 className='text-success'>Enter new password</h6>
                                <div className='mb-3'>
                                    <TextField label="New Password" type="password" value={newPassword} onChange={(e)=>
                                        setNewPassword(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        />
                                </div>
                                <Button  type='submit' sx={{ backgroundColor: "#00A95A"}} onClick={handleResetPassword}  fullWidth variant="contained">Reset Password</Button>
                            </div>
                            )}
                            {(!emailFound && email) && <p className='m-2'>No Email Found</p>}

                        </form>
                    </div>
                </div>
            </div>
            {/* ============ Right side Background ============== */}
            <div className=" col-sm-12 col-lg-5 d-flex d-none d-lg-flex back">
            </div>
        </div>
    </div>
</>
);
};

export default ForgotPassword;