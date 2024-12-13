import React, { useState } from 'react';
import './App.css';


const useInputValidation = (validateFunction) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setError(validateFunction(newValue));
    };

    return {
        value,
        error,
        onChange: handleChange,
    };
};


const validUname = (uname) => {
    if (uname.length > 4) {
        return 'Username must be 4 characters or less.';
    }
    return '';
};

const validEmail = (email) => {
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address.';
    }
    return '';
};

const validPassword = (password) => {
    if (password.length < 6) {
        return 'Password must be 6 characters long.';
    }
    return '';
};

const validateRePassword = (password, retypePassword) => {
    if (password !== retypePassword) {
        return 'Passwords do not match.';
    }
    return '';
};

const validateEmpty = (value) => {
    if (!value.trim()) {
        return 'This field is required.';
    }
    return '';
};

const RegistrationForm = () => {
    const username = useInputValidation(validUname);
    const email = useInputValidation(validEmail);
    const password = useInputValidation(validPassword);
    const [retypePassword, setRetypePassword] = useState('');
    const [retypePasswordError, setRetypePasswordError] = useState('');
    const firstName = useInputValidation(validateEmpty);
    const lastName = useInputValidation(validateEmpty);
    const phoneNumber = useInputValidation(validateEmpty);
    const address = useInputValidation(validateEmpty);
    const town = useInputValidation(validateEmpty);
    const region = useInputValidation(validateEmpty);
    const postcode = useInputValidation(validateEmpty);
    const country = useInputValidation(validateEmpty);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const retypePasswordError = validateRePassword(password.value, retypePassword);
        setRetypePasswordError(retypePasswordError);

       
        if (
            !username.error &&
            !email.error &&
            !password.error &&
            !retypePasswordError &&
            !firstName.error &&
            !lastName.error &&
            !phoneNumber.error &&
            !address.error &&
            !town.error &&
            !region.error &&
            !postcode.error &&
            !country.error
        ) {
            console.log('Form Submitted:', {
                username: username.value,
                email: email.value,
                password: password.value,
                firstName: firstName.value,
                lastName: lastName.value,
                phoneNumber: phoneNumber.value,
                address: address.value,
                town: town.value,
                region: region.value,
                postcode: postcode.value,
                country: country.value,
            });
            alert('Form submitted successfully!');
        } else {
            console.log('Form contains errors.');
            alert('Please fix the errors before submitting.');
        }
    };

    return (
        <div className="App">
            <h1>USER REGISTRATION</h1>
            <h5>Fields marked <sup>*</sup> are required.</h5>
            <form action="#" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="email">Email <sup>*</sup></label></td>
                        <td><input type="text" id="email" value={email.value} onChange={email.onChange} />
                            {email.error && <small style={{ color: 'red' }}>{email.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="password">Password <sup>*</sup></label></td>
                        <td><input type="password" id="password" value={password.value} onChange={password.onChange} />
                            {password.error && <small style={{ color: 'red' }}>{password.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="repassword">Retype Password <sup>*</sup></label></td>
                        <td><input type="password" id="repassword" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                            {retypePasswordError && <small style={{ color: 'red' }}>{retypePasswordError}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="firstname">First Name <sup>*</sup></label></td>
                        <td><input type="text" id="firstname" value={firstName.value} onChange={firstName.onChange} />
                            {firstName.error && <small style={{ color: 'red' }}>{firstName.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="lastname">Last Name <sup>*</sup></label></td>
                        <td><input type="text" id="lastname" value={lastName.value} onChange={lastName.onChange} />
                            {lastName.error && <small style={{ color: 'red' }}>{lastName.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="phonenum">Phone Number <sup>*</sup></label></td>
                        <td><input type="text" id="phonenum" value={phoneNumber.value} onChange={phoneNumber.onChange} />
                            {phoneNumber.error && <small style={{ color: 'red' }}>{phoneNumber.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="add">Address <sup>*</sup></label></td>
                        <td><input type="text" id="add" value={address.value} onChange={address.onChange} />
                            {address.error && <small style={{ color: 'red' }}>{address.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="town">Town</label></td>
                        <td><input type="text" id="town" value={town.value} onChange={town.onChange} />
                            {town.error && <small style={{ color: 'red' }}>{town.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="region">Region <sup>*</sup></label></td>
                        <td><input type="text" id="region" value={region.value} onChange={region.onChange} />
                            {region.error && <small style={{ color: 'red' }}>{region.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="zip">PostCode / Zip <sup>*</sup></label></td>
                        <td><input type="text" id="zip" value={postcode.value} onChange={postcode.onChange} />
                            {postcode.error && <small style={{ color: 'red' }}>{postcode.error}</small>}
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="country">Country <sup>*</sup></label></td>
                        <td><select name="country" id="country" value={country.value} onChange={country.onChange}>
                            <option value="" disabled>Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                        </td>
                    </tr>
                </table>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
