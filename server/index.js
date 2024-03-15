const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = new Stripe('sk_test_51OnBygA8BQqCYJudBGh28fc0sES4QoRPTWCVaHNyzPEP37y3UB7fFE7Qqmekkxh2qpeCdCRBr8tk5q8rwQ1cjBb100fJiXpvNl');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
    const { id, amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Curso de SoftSkills',
            payment_method: id,
            confirm: true,
            return_url: 'http://localhost:3000/payment/success' 
        });
        res.send({ message: "Successful Payment" });
    } catch (error) {
        console.error(error);
        res.json({message:error.raw.message});
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});