const messages = document.querySelectorAll('.message');
messages.forEach(message => {
const closeButton = document.createElement('button');
closeButton.innerHTML = 'X';
closeButton.classList.add('close-button');
closeButton.addEventListener('click', () => {
    message.remove();
    });
    message.prepend(closeButton);
});    
