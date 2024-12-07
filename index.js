function bookHotel(hotelName) {
    // Create and display booking confirmation message
    const message = document.createElement('div');
    message.className = 'booking-alert';
    message.innerText = `You have successfully booked a stay at ${hotelName}!`;

    document.body.appendChild(message);

    // Automatically remove the message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}
