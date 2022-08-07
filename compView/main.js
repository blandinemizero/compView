// Gets the form and dropdown

const dropdowns = document.querySelectorAll('[data-dropdown]');
const form = document.querySelector('form');

// Checks whether dropdown exists on the page
if(dropdowns.length>0){
    
    dropdowns.forEach(dropdown => {
        createCustomDropdown(dropdown);
    });
}

if(form!==null){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Selected location:', form.querySelector('[name="location"]').value)
    });
}
