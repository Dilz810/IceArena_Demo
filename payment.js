async function handlePayment(totalAmount) {
    // Check if Payment Request API is supported
    if (!window.PaymentRequest) {
        alert('Your browser does not support the Payment Request API');
        return;
    }

    // Define supported payment methods
    const supportedPaymentMethods = [
        {
            supportedMethods: 'basic-card',
            data: {
                supportedNetworks: ['visa', 'mastercard', 'amex'],
                supportedTypes: ['credit', 'debit']
            }
        }
    ];

    // Convert amount to cents to avoid floating point issues
    const amountInCents = Math.round(totalAmount * 100);

    // Payment details
    const paymentDetails = {
        total: {
            label: 'Total Amount',
            amount: {
                currency: 'USD',
                value: (amountInCents / 100).toFixed(2)
            }
        },
        displayItems: [
            {
                label: 'Ice Arena Tickets',
                amount: {
                    currency: 'USD',
                    value: (amountInCents / 100).toFixed(2)
                }
            }
        ]
    };

    try {
        // Create payment request
        const request = new PaymentRequest(
            supportedPaymentMethods,
            paymentDetails
        );

        // Check if user can make payment
        const canMakePayment = await request.canMakePayment();
        if (!canMakePayment) {
            throw new Error('Payment method not available');
        }

        // Show payment dialog
        const paymentResponse = await request.show();

        // Process the payment
        try {
            // Here you would typically send the payment details to your server
            // This is where you'd integrate with your backend payment processing
            await processPaymentOnServer(paymentResponse);
            
            // Complete the payment if successful
            await paymentResponse.complete('success');
            
            // Clear the cart
            localStorage.removeItem('cart');
            updateCartCount();
            
            // Show success message
            alert('Payment successful! Thank you for your purchase.');
            
        } catch (error) {
            // If payment processing fails
            await paymentResponse.complete('fail');
            throw error;
        }

    } catch (error) {
        alert('Payment failed: ' + error.message);
        console.error('Payment error:', error);
    }
}

// Function to calculate total from cart
function calculateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, item) => total + item.price, 0);
}

// Mock function to process payment on server
async function processPaymentOnServer(paymentResponse) {
    // This is where you would implement your server-side payment processing
    // For example, making an API call to your backend
    return new Promise((resolve, reject) => {
        // Simulate server processing
        setTimeout(() => {
            // In real implementation, you would validate the payment with your payment processor
            const paymentSuccessful = true;
            if (paymentSuccessful) {
                resolve();
            } else {
                reject(new Error('Payment processing failed'));
            }
        }, 1000);
    });
}

// Add this to your existing checkout button or create a new one
function initiateCheckout() {
    const total = calculateCartTotal();
    if (total <= 0) {
        alert('Your cart is empty');
        return;
    }
    handlePayment(total);
}