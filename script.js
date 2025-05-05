function updateCountdown() {
    // Set the target date (December 15, 2024 7:00 PM)
    const targetDate = new Date('December 15, 2024 19:00:00').getTime();
    
    // Update the countdown every second
    const timer = setInterval(() => {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the time difference between now and target date
        const difference = targetDate - now;
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update the HTML elements
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
        
        // If countdown is finished
        if (difference < 0) {
            clearInterval(timer);
            document.getElementById('days').innerHTML = '0';
            document.getElementById('hours').innerHTML = '0';
            document.getElementById('minutes').innerHTML = '0';
            document.getElementById('seconds').innerHTML = '0';
        }
    }, 1000);
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', updateCountdown);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            alert('Message sent successfully!');
            contactForm.reset();
            
        } catch (error) {
            alert('Error sending message. Please try again.');
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});
// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    function updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        const totalElement = document.getElementById('cart-total');
        let total = 0;
        
        cartContainer.innerHTML = '';
        
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="item-details">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-info">
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                </div>
                <div class="item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            `;
            cartContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
    
    window.updateQuantity = function(index, change) {
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
    
    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
    
    window.clearCart = function() {
        cart = [];
        localStorage.removeItem('cart');
        updateCartDisplay();
    }
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async function() {
            try {
                this.disabled = true;
                this.textContent = 'Processing...';
                
                // Simulate checkout process
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                alert('Order placed successfully!');
                clearCart();
                
            } catch (error) {
                alert('Error processing order. Please try again.');
            } finally {
                this.disabled = false;
                this.textContent = 'Checkout';
            }
        });
    }
    
    // Initialize cart display
    updateCartDisplay();
});

function updateCountdown() {
    // Set the target date (December 15, 2024 7:00 PM)
    const targetDate = new Date('December 15, 2024 19:00:00').getTime();
    
    // Update the countdown every second
    const timer = setInterval(() => {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the time difference between now and target date
        const difference = targetDate - now;
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update the HTML elements
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
        
        // If countdown is finished
        if (difference < 0) {
            clearInterval(timer);
            document.getElementById('days').innerHTML = '0';
            document.getElementById('hours').innerHTML = '0';
            document.getElementById('minutes').innerHTML = '0';
            document.getElementById('seconds').innerHTML = '0';
        }
    }, 1000);
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', updateCountdown);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            alert('Message sent successfully!');
            contactForm.reset();
            
        } catch (error) {
            alert('Error sending message. Please try again.');
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});