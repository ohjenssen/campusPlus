export function handleGroupId(){

    const groupIdForm = document.getElementById('groupIdForm');
    const inputs = document.querySelectorAll('.otp-input');

    inputs.forEach((input, index) => {
    input.addEventListener('input', () => {

        if(index === 4 & input.value.length > 0){
            document.location.href = './hjaem.html';
        }

        // Move to the next input if a character is entered
        if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();

        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
        if (input.value === '' && index > 0) {
            // Move to the previous input and set focus
            inputs[index - 1].focus();
            
            // Ensure the caret is at the end of the previous input
            const prevInput = inputs[index - 1];
            prevInput.setSelectionRange(prevInput.value.length, prevInput.value.length);
        }
        }
    });
    
    });

    groupIdForm.addEventListener('submit', (event) => {
        event.preventDefault();
        document.location.href = './hjaem.html'
    })

};