import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Cursos from '../../../async';

const stripePromise = loadStripe('pk_test_51OnBygA8BQqCYJudQqNYmq7yAK11FAPW3eDGjCi6zIuXPn4F7HpkD9EmLuTGLzKXLFAVZJd74NSyy2E8VopTh6Bz00Y5QP8u9e');

const CheckOutForm = ({ precioArg, precioUsd, nombre, slogan }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Detalles del Curso:</h2>
            <p>Nombre: {nombre}</p>
            <p>Slogan: {slogan}</p>
            <p>Precio en USD: ${precioUsd}</p>
            <p>Precio en ARG: ${precioArg}</p>
            <CardElement />
            <button type="submit">Comprar</button>
        </form>
    );
};

const Pago = ({  }) => { 
    let courseId = useParams()  
    console.log(courseId.id)  
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
