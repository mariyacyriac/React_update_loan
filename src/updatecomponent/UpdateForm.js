

import React, { useState, useEffect } from 'react';
import useForm from './updatehooks/useForm';
import validate from './updatehooks/validateUpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateForm = (props) => {

    //const { handleChange, handleSubmit, errors ,resetAll, setDefaultVAlues} = useForm(validate); //, resetAll

   // console.log("props.location  from  test :::: " + JSON.stringify(props.location)); 

    const [loadLoanDetailsFrom, setLoadLoanDetailsFrom] = useState(
        props.location.loanDetailProps.loandetails
    );

    const { handleChange, handleSubmit, errors ,resetAll, setDefaultVAlues} = useForm(validate, loadLoanDetailsFrom);

  //  console.log("loadLoanDetailsFrom ::: " + JSON.stringify(loadLoanDetailsFrom));

    return (
        <div>
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">Loan Details Update Form</div>
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Borrower name</label>
                                <input
                                    type="text"
                                    name="borrowerName"
                                    value={loadLoanDetailsFrom.borrowerName}
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Adderss line 1</label>
                                <input
                                    type="text"
                                    name="addressLine1"
                                    value={loadLoanDetailsFrom.addressLine1}
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Adderss line 2</label>
                                <input
                                    type="text"
                                    name="addressLine2"
                                    value={loadLoanDetailsFrom.addressLine2}
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={loadLoanDetailsFrom.city}
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Zipcode</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={loadLoanDetailsFrom.zipCode}
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Legal Documents</label>
                                <input
                                    type="text"
                                    name="legalDocuments"
                                    value={loadLoanDetailsFrom.legalDocuments}
                                    className="form-control"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label>Loan Number</label>
                                <input
                                    type="text"
                                    name="loanNumber"
                                    value={loadLoanDetailsFrom.loanNumber}
                                    className="form-control"
                                    disabled
                                />
                            </div>




                            <div className="form-group">
                                <label>Loan Amount</label>
                                <input
                                    type="text"
                                    name="loanAmount"
                                    placeholder="Enter Loan amount"
                                    defaultValue={loadLoanDetailsFrom.loanAmount}
                                    className="form-control"
                                    onChange={handleChange}
                                />
                                <p className="text-danger">{errors.loanAmount}</p>

                            </div>
                            <div className="form-group">
                                <label>Loan Term</label>
                                <input
                                    type="text"
                                    name="loanTerm"
                                    placeholder="Enter Loan term "
                                    defaultValue={loadLoanDetailsFrom.loanTerm}
                                    className="form-control"
                                    onChange={handleChange}

                                />
                                <p className="text-danger">{errors.loanTerm}</p>


                            </div>
                            <div className="form-group">
                                <label>Lien Type</label>
                                <input
                                    type="text"
                                    name="lienType"
                                    placeholder="Enter Lien type"
                                    defaultValue={loadLoanDetailsFrom.lienType}
                                    className="form-control"
                                    onChange={handleChange}

                                />
                                <p className="text-danger">{errors.lienType}</p>

                            </div>

                            <div className="form-group">
                                <label>Lien ID</label>
                                <input
                                    type="text"
                                    name="lienId"
                                    placeholder="Enter lien id "
                                    defaultValue={loadLoanDetailsFrom.lienId}
                                    className="form-control"
                                   onChange={handleChange}

                                />
                                <p className="text-danger">{errors.lienId}</p>

                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary" style={{ margin: "5px" }}>Submit</button>
                                <button className="btn btn-danger" style={{ margin: "5px" }}  >Cancel</button>

                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );

};

export default UpdateForm;