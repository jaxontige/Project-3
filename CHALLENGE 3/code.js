
const dropdown = document.getElementById('dropdown');


dropdown.addEventListener('change', function() {

    const imageContainer = document.getElementById('image-container');
    
    imageContainer.innerHTML = '';
    
    
    if (dropdown.value === 'rent') {
        
        const image = document.createElement('img');
        image.src = '../Images/rent_chart.png'; 
        image.alt = 'Rent Graph'; 
        imageContainer.appendChild(image);
    } else if (dropdown.value === '2024 Rent') {
        const image = document.createElement('img');
        image.src = '../Images/rents_2024.png';
        image.alt = 'Rents for places in 2024';
        imageContainer.appendChild(image);
    } else if (dropdown.value === 'mortgage') {
        const image = document.createElement('img');
        image.src = '../Images/mortgage_rates.png';
        image.alt = 'Mortgage Rates Over 10 Years';
        imageContainer.appendChild(image);
    }
});


