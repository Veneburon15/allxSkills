import React from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Cursos from '../../../async';
import axios from 'axios'; 
import Swal from 'sweetalert2'

const stripePromise = loadStripe('pk_test_51OnBygA8BQqCYJudQqNYmq7yAK11FAPW3eDGjCi6zIuXPn4F7HpkD9EmLuTGLzKXLFAVZJd74NSyy2E8VopTh6Bz00Y5QP8u9e');

const CheckOutForm = ({ precioArg, precioUsd, nombre, slogan }) => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
          }); 
          if (!error) {
            const { id } = paymentMethod;
            try { 

              const { data } = await axios.post(
                "http://localhost:3001/api/checkout",
                {
                  id,
                  amount: precioUsd*100, 
                }
              );
              console.log(data);
      
              elements.getElement(CardElement).clear();
              Swal.fire({
                title: "¡Gracias por su compra!",
                text: "You clicked the button!",
                icon: "success"
              });
             } catch (error) {
              console.log(error);
            }
          }
    };

    return ( 
        <div>
                <h2>Detalles del Curso:</h2>
                <p>Nombre: {nombre}</p>
                <p>Slogan: {slogan}</p>
                <p>Precio en USD: ${precioUsd}</p>
                <p>Precio en ARG: ${precioArg}</p> 
            <form onSubmit={handleSubmit}>  
                <label htmlFor="email">Ingrese su email</label>
                <input type="email" name="email" id="" style={{backgroundColor : "white"}} />
                <CardElement />
                <button type="submit">Comprar</button>
            </form> 
        </div>
    );
};

const Pago = ({  }) => { 
    let courseId = useParams()  
    let curso
    for (let i = 0; i <Cursos.length; i++) {
        if(courseId.id == Cursos[i].id) {
            curso = Cursos[i]
        }
    } 
    
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm precioArg={curso.precioArg} precioUsd={curso.precioUsd} nombre={curso.nombre} slogan={curso.slogan} />
        </Elements>
    );
};

export default Pago;