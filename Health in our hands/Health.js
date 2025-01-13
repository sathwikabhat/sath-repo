document.querySelectorAll('.card').forEach(card=> {
    card.addEventListener('click', function (event){
        event.preventDefault();
        const destination=this.getAttribute('data-destination')
        loadContent(destination)
})
}) 

function loadContent(destination){
    let content='';

    switch (destination){
        case 'Diabetes':
            content = `
            <h2>Diabetes</h2>
            <p>Diabetes is a chronic disease that affects the way your body turns food into energy.Manage your blood sugar levels by eating a healthy diet, exercising regularly, and monitoring your blood sugar levels.</p>
        `;
        break;
        case 'Flu':
            content = `
            <h2>Flu</h2>
            <p>The flu is a contagious respiratory illness caused by the influenza virus.It can cause mild to
            severe illness, and at times can lead to death.</p>
        `;
        break;
    }

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = content;
    contentSection.style.display = 'block';

    // Hide main page
    const mainPage = document.getElementById('main-page');
    mainPage.style.display = 'none';
}
