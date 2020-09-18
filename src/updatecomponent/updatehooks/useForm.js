import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
//import SearchComponent from './SearchComponent';


//const useForm = (submitForm, validate) => {
const useForm = (validate, loadLoanDetailsFrom) => {

    let deafultLoanDetails = loadLoanDetailsFrom;

    const [redirect, setRedirect] = useState(false);
    const  history = useHistory();

    // const [loanDetails, setLoanDetails] = useState({
    //     loanAmount: '',
    //     loanTerm: '',
    //     lienType: '',
    //     lienId: '',
    //     loanNumber: ''
    // })

    const [loanDetails, setLoanDetails] = useState({
        ...deafultLoanDetails
    })

    const handleChange = (e) => {
      //  console.log("handle change :: " + e)
        const { name, value } = e.target;
        setLoanDetails({
            ...loanDetails,
            [name]: value
        });
    }


    const resetAll = () => {
        setLoanDetails({
            deafultLoanDetails
        });
    }

    let [errors, setErrors] = useState({});
    let [isSubmited, setIsSubmitted] = useState(false);
    let [isSuccess, setIsSuccess] = useState(false);


    useEffect(() => {

        console.log("useEffect");

        if (Object.keys(errors).length === 0 && isSubmited) {
            setIsSubmitted(false);
            // console.log("submitted ::: going to save in db");
            localStorage.setItem("auth", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW1wbGVVc2VyTmFtZSIsImlhdCI6MTYwMDQwNDU3MiwiZXhwIjoxNjAwNDA1NTcyfQ.AIDKG4BN4qtVeCVAP5Mzvcl00L3-aCh2wvmWtsuHJ0Y");
            let authcode = localStorage.getItem("auth");
            console.log("token from local storage :: " + authcode);

            axios.put(`http://localhost:8089/loan-api/update/loandetails`, loanDetails, {
                headers: {
                    'Authorization': `Bearer ${authcode}`
                }
            })
                .then((updatedLoandetails) => {

                    console.log("Updated loan details from db :: " + JSON.stringify(updatedLoandetails))

                    isSuccess = true;
                    alert(JSON.stringify(updatedLoandetails.data.message));
                    history.push("/Search");

                }).catch((error) => {
                    setIsSuccess(false); //
                    console.log("error from backend :: " + error.status);
                    alert("Update Loan details Failed . Please try again!!");

                });

        }

    }, [errors]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        //handle errors
        setErrors(validate(loanDetails));
        setIsSubmitted(true);

    }
    
    return { handleChange, handleSubmit, errors, resetAll };

};

export default useForm;