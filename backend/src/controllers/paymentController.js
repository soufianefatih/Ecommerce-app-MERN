const stripe = require("stripe");
const Stripe = new stripe('sk_test_51OtXomAm5lduUsebHT2rWeUwNs1zocVeaEJn8aq3lhrIL4wA0EulpBTGJxGJsLux5K27ltWfpeh0zKIRX79a5GLs00Bap6Rjv9');

  
/**-----------------------------------------------
 * @desc    payment
 * @route   /v1/pay
 * @method  Post
 * @access  private
 ------------------------------------------------*/
  
 exports.payment = async (req, res) => {

    const { amount } = req.body;
    const paymentItent = await Stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    });

    res.send({
        clientSecret: paymentItent.client_secret
    });
   
   };
   