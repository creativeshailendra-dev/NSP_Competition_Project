async function payNow() {

  try {

    console.log("Payment Button Clicked");

    const response = await fetch(
      "http://localhost:5000/create-order",
      {
        method: "POST",
      }
    );

    const order = await response.json();

    console.log(order);

    const options = {

      key: "rzp_test_SoNhTVtWE1hPlA",

      amount: order.amount,

      currency: order.currency,

      name: "National Skill Portal",

      description: "Registration Fee",

      order_id: order.id,

      handler: function (response) {

        alert("Payment Successful");

        console.log(response);

      },

      theme: {
        color: "#ff6b00"
      }

    };

    const rzp = new Razorpay(options);

    rzp.open();

  } catch (error) {

    console.log(error);

    alert("Payment Failed");

  }

}