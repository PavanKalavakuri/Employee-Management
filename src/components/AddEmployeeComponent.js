import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateEmployee = async (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId };

        try {
            if (id) {
                await EmployeeService.updateEmployee(id, employee);
            } else {
                await EmployeeService.createEmployee(employee);
            }
            navigate('/employees');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then((response) => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmailId(response.data.emailId);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const title = () => {
        return id ? <h2 className="text-center">Update Employee</h2> : <h2 className="text-center">Add Employee</h2>;
    };

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <button className="btn btn-danger" onClick={() => navigate('/employees')}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;