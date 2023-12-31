import React, { useState } from 'react';
import { useAppContext } from './AppContext'; // Import the context

import axios from 'axios';
import './UserRegistration.css'; // Import the CSS file

const UserRegistration = () => {

    const { updateUser } = useAppContext(); // Use the context hook
    const [user, setUser] = useState('');
    const [order, setOrder] = useState('');

    
    const [orderData, setOrderData] = useState({
        menu: '',
        qty: '',
        price: ''
    });

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        address: '',
        city: '',
        zipCode: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleOrderChange = (e) => {
        const { name, value } = e.target;
        setOrderData({
            ...orderData,
            [name]: value
        });
    };    

    const handleOrderSubmit = async (e) => {
        console.log('Order Sumit');
        e.preventDefault();
        try {
            setOrder('order');
            // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint of your backend API
            const response = await axios.post('http://localhost:2222/api/orders', orderData);

            // Handle the response as needed, e.g., show a success message or redirect
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            // Handle errors, e.g., display an error message to the user
            console.error('Error submitting form:', error);
        }
    }


    const handleSubmit = async (e) => {
        console.log('user service');
        e.preventDefault();
        try {

            // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint of your backend API
            const response = await axios.post('http://localhost:8080/addUser', formData);

            // Handle the response as needed, e.g., show a success message or redirect
            console.log('Form submitted successfully:', response.data);
            setUser(response.data);
        } catch (error) {
            // Handle errors, e.g., display an error message to the user
            console.error('Error submitting form:', error);
        }
    };


    return (
        <div className="registration-container">
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>Username:</label></td>
                            <td><input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>Password:</label></td>
                            <td><input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>Address:</label></td>
                            <td><input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>City:</label></td>
                            <td><input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>Zip Code:</label></td>
                            <td><input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                        <tr>
                            <td><label>Phone:</label></td>
                            <td><input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="small-input"
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
            {user ? (<div>
                <h2>Food Order</h2>
                <p>Welcome, {user}!</p>
                <form onSubmit={handleOrderSubmit}>
                    <label>
                        Menu :
                        <input type="text" name="menu" value={orderData.menu} onChange={handleOrderChange} />
                    </label>
                    <br />
                    <label>
                        Price :
                        <input type="text" name="price" value={orderData.price} onChange={handleOrderChange} />
                    </label>
                    <br />
                    <label>
                        Qty :
                        <input type="text" name="qty" value={orderData.qty} onChange={handleOrderChange} />
                    </label>
                    <br />

                    <button type="submit" onClick={handleOrderSubmit}>Place Order</button>
                </form>
            </div>) : null}
            {order ? (<label>Order Placed successfully</label>) : null}
        </div>
    );
};

export default UserRegistration;
