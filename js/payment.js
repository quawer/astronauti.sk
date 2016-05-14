$(document).ready(function() {
      $.getScript("https://js.braintreegateway.com/v2/braintree.js").done(function(){

        var clientToken;

          $.ajax({
            url: "php/generateClientToken.php",

            success: function (ret) {
              $('#payment-form').empty();
              clientToken = ret;
              braintree.setup(clientToken, 'dropin',{
                container: "payment-form",
                paymentMethodNonceReceived: function (event, nonce) {
                  $.ajax({
                    url: 'php/transactionCheckout.php?price='+price,
                    dataType: 'json',
                    method: 'POST',
                    data:{
                      payment_method_nonce: nonce
                    },
                    success: function(data) {
                      generateTicket(formData);
                    },
                    error: function(data){
                      console.log("error",data);
                      errorMessage();
                    }
                  });
                }
              });
            }
          });

        $('#checkout').submit(function(event){
          event.preventDefault();
        });

  });
});
