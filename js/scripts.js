document.addEventListener('alpine:init', () => {
    Alpine.data('skillDisplay', () => ({
        skills: [{
                'title': 'Photoshop',
                'percent': '50',
            },
            {
                'title': 'Mc.Excel',
                'percent': '50',
            },
            {
                'title': 'Mc.Word',
                'percent': '50',
            },
            {
                'title': 'Mc.PowerPoint',
                'percent': '50',
            },
            {
                'title': 'HTML',
                'percent': '50',
            },
            {
                'title': 'CSS',
                'percent': '40',
            },
        ],
        currentSkill: {
            'title': 'None',
            'percent': '0',
        }
    }));
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyzHXPpLgDaZqIb_4QrX_q9-aRn4Aygn2xMXn7wrs_GkigrnblDG3xVFYeCtmXHooJsxQ/exec';
         const form = document.forms['submit-contactus']
         const btnSend = document.querySelector('.btn-send');
         const btnLoading = document.querySelector('.btn-loading');
         const myAlert = document.querySelector('.my-alert');

         form.addEventListener('submit', e => {
             e.preventDefault()
             //submit click
             btnLoading.classList.toggle('d-none');
             btnSend.classList.toggle('d-none');
             fetch(scriptURL, {
                     method: 'POST',
                     body: new FormData(form)
                 })
                 .then(response => {
                     //tampilkan tombol send
                     btnLoading.classList.toggle('d-none');
                     btnSend.classList.toggle('d-none');
                     //tampilkan alert
                     myAlert.classList.toggle('d-none')
                     //reset form
                     form.reset();
                     console.log('Success!', response)
                 })
                 .catch(error => console.error('Error!', error.message))
         })