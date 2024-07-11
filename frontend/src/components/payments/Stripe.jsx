import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from './CheckoutForm'



export default function Stripe({amount}) {
const [clientSecret, setClientSecret] = useState('')
const total = amount * 100
const { isLoggedIn } = useSelector(state => state.user)
const navigate = useNavigate ()
const stripePromise = loadStripe('pk_test_51OtXomAm5lduUsebrC4mRqwKteJsrbZKPmdsQ5AwbuECPYtfS3prqGs2COJd3HqVHFvr2SPND4twGhGK8nYUfWBn00QZHItcLd')
  
useEffect(()=>{
      if (!isLoggedIn) {
        navigate('/login')
      }else {
        const fetchClientSecret = async () => {
            try {
                const response = await axios.post('http://localhost:5050/v1/payment/pay', 
                { 
                    amount: total
                })
                setClientSecret(response.data.clientSecret)
            } catch (error) {
                console.log(error)
            }
        }
        fetchClientSecret()
    }


},[isLoggedIn])

return (
    <>
            {
                stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm />
                    </Elements>
                )
            }
        </>
  )
}
