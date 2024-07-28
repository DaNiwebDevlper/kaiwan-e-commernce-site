import nodemailer from "nodemailer";

const AUTH_MAIL = "dnazir343@gmail.com";
const AUTH_PASSWORD = "kwfw cbwn fbdz tof";
const receiverEmail = "343danish@gmail.com";

async function sendDetailToGmail(data) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
            user: AUTH_MAIL,
            pass: AUTH_PASSWORD,
        },
        tls: {
            rejectUnauthorized: true,
        },
    });

    const productItems = data.cartItems.map((items, i) => {
        return `<div key={i}>
            <h4><span style="color:green;">Product Title:</span> ${items.title}</h4>
            <h4><span style="color:green;">Product Price:</span> ${items.price}</h4>
      </div>`;
    });

    let mailOptions = {
        from: AUTH_MAIL,
        to: receiverEmail,
        subject: "Kaiwan Pharmacy : SomeOne Buy some products",
        html: `<h3 style="color:green;">Kaiwan Pharmacy</h3><h4 style="color:red;">This User checkout some products </h4><h4 style="color:green;">Total checkout products or quantity: ${data.cartItems.length} </h4><h4><span style="color:green;" >Name: </span> ${data.name}  <span style="color:green;"> Email:</span> ${data.email}   <span style="color:green;">Order ID:</span> ${data.orderId}   <span style="color:green;">Phone Number:</span> ${data.phoneNo} </h4> <h4><span style="color:green;">Total Price:</span> ${data.totalPrice}   <span style="color:green;">Payment Mehod:</span> ${data.paymentMehod} </h4> <h4><span style="color:green;">CheckOut Product Items Here:</span> </h4>${productItems}`,
    };

    // send otp to email

    const sendMail = new Promise((resolve) => {
        transporter.sendMail(mailOptions, async function (error, info) {
            resolve({ error, info });
        });
    });

    const { error, info } = await sendMail;

    if (error) {
        console.log({ error });
    } else {
        console.log(info.response);
    }
}

export { sendDetailToGmail };