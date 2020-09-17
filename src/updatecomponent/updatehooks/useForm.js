import { useState, useEffect, React } from 'react';
import axios from 'axios';

//const useForm = (submitForm, validate) => {
const useForm = (validate, loadLoanDetailsFrom) => {

    let deafultLoanDetails = loadLoanDetailsFrom;

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

   // console.log("loanDetails  :: " + JSON.stringify(loanDetails))



    const handleChange = (e) => {

        console.log("handle change :: " + e)
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
            localStorage.setItem("auth", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW1wbGVVc2VyTmFtZSIsImlhdCI6MTYwMDMzMDg0OCwiZXhwIjoxNjAwMzMxODQ4fQ.idgrZZ9xWyKmKt4BkkyBuktbPacqdUzQPc_bdA6GkQU");
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

                    // goToSearchPage(updatedLoandetails);

                }).catch((error) => {
                    console.log("error from backend :: " + error.status);
                    alert("Update Loan details Failed . Please try again!!");

                });

        }

    }, [errors]);  //errors

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log('loan details submitted -->:', loanDetails);

        //handle errors
        setErrors(validate(loanDetails));

      //  console.log('errors : ', errors);
        setIsSubmitted(true);
       // console.log('is submitted ::' + isSubmited);

    }

    return { handleChange, handleSubmit, errors, resetAll };

};

export default useForm;