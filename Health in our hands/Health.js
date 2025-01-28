document.querySelectorAll('.card').forEach(card=> {
    card.addEventListener('click', function (event){
        event.preventDefault();
        const destination=this.getAttribute('data-destination')
        loadContent(destination)
})
}) 

window.onscroll = function() {
    let headerTag = document.querySelectorAll('.Headername');    
    console.log(headerTag);
    if (window.scrollY > 20) { // Adjust '50' to the amount of scroll you want
        headerTag[0].classList.add('scrolled');
    } else {
        
        headerTag[0].classList.remove('scrolled');
    }
};

function loadContent(destination){
    let content='';

    switch (destination){
        case 'Diabetes':
            content = `
            <h2>Diabetes</h2>
            <p>Diabetes is a chronic disease that affects the way your body turns food into energy.Manage your blood sugar levels by eating a healthy diet, exercising regularly, and monitoring your blood sugar levels.</p>
            <img src="https://plus.unsplash.com/premium_photo-1716719138414-0ae0b852695a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRpYWJldGVzfGVufDB8fDB8fHww">
            <button class="back-btn">Back</button>
        `;
        break;
        case 'Flu':
            content = `
            <h2>Flu</h2>
            <p>The flu is a contagious respiratory illness caused by the influenza virus.It can cause mild to
            severe illness, and at times can lead to death.</p>
            <img src="https://plus.unsplash.com/premium_photo-1679860817888-be45911abedc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsdXxlbnwwfHwwfHx8MA%3D%3D">
            <button class="back-btn">Back</button>
        `;
        break;
        case 'Malnutrition':
            content = `
            <h2>Malnutrition</h2>
            <p>Malnutrition is a serious condition that occurs when a person's diet doesn't contain the right amount of nutrients.</p>
            <img src="https://media.istockphoto.com/id/2117582575/photo/africa-famine-sad-and-skinny-girl-with-tiny-body-and-skinny-arms-backlight-from-the-window-in.jpg?s=612x612&w=0&k=20&c=KTfNqn5hQ8sGDQF1C4VfMlh5PixdXL16N875xeeiz10=">
            <button class="back-btn">Back</button>
        `;
        break;
        case 'Chicken-Pox':
            content = `
            <h2>Chicken-Pox</h2>
            <p>Chickenpox is a highly contagious illness caused by the varicella-zoster
            virus. It causes an itchy rash with small, fluid-filled blisters.</p>
            <img src="https://media.istockphoto.com/id/1144939011/photo/chickenpox.jpg?s=612x612&w=0&k=20&c=CtU-JcAkAEWTm4JlSlF6_ClodAltAMm32hK492GmZZY=">
            <button class="back-btn">Back</button>
        `;
        break;
        case 'Ringworm':
        content = `
        <h2>Ringworm</h2>
        <p>Ringworm is a common fungal infection that can cause a red or silvery ring-like rash on the skin.</p>
        <img src="https://media.istockphoto.com/id/93486007/photo/lichen-ruber-planus.jpg?s=612x612&w=0&k=20&c=Zm-NFrPo9S3qhMG_qdh_uAjEPGYAIXZb9Hgl35GTAwc=">
        <button class="back-btn">Back</button>
        `;
        break;

        case 'Obesity':
        content = `
        <h2>Obesity</h2>
        <p>Obesity is a medical condition in which excess body fat has accumulated to the extent that it may have a negative effect on health.</p>
        <img src="https://media.istockphoto.com/id/1347003096/photo/mans-hand-holding-excessive-belly-fat-overweight-concept.jpg?s=612x612&w=0&k=20&c=D7lPQiSaRn0O95ZowPEwPyvtFD51i_OG83GvGrpEabY=">
        <button class="back-btn">Back</button>
        `;
        break;

        case'Allergy':
        content = `
        <h2>Allergy</h2>
        <p>An allergy is an immune system response to a foreign substance that's not typically harmful to
        your body.</p>
        <img src="https://media.istockphoto.com/id/1314008576/photo/a-child-scratching-an-eczema.jpg?s=612x612&w=0&k=20&c=9zcJPQMRXgVpcxoEPrG7U0vGN3QvAZgtCDEj1ZqrYmw=">
        <button class="back-btn">Back</button>
        `;
        break;

        case 'Anemia':
        content = `
        <h2>Anemia</h2>
        <p>Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.</p>
        <img src="https://media.istockphoto.com/id/1410298101/photo/cropped-shot-of-a-young-caucasian-woman-showing-off-her-pale-conjunctiva-iron-deficiency.jpg?s=612x612&w=0&k=20&c=YAkx4CUyHKPADwmie90x4cGdecF2y0B2mKxnf-e1PeU=">
        <button class="back-btn">Back</button>
        `;
        break;
        
        case 'Constipation':
        content = `
        <h2>Constipation</h2>
        <p>Constipation is a condition in which there is difficulty in emptying the bowels, usually associated with hardened feces.</p>
        <img src="https://media.istockphoto.com/id/813698588/photo/the-woman-wake-up-for-go-to-restroom-people-with-diarrhea-problem-concept.jpg?s=612x612&w=0&k=20&c=ut9bGldXcdORYE6BZKEXOxSmOT6t4Ucg42tPIE3flSk=">
        <button class="back-btn">Back</button>
        `;  
        break;

        case 'Headache':
        content = `
        <h2>Headache</h2>
        <p>A headache is a symptom that can be caused by a variety of factors, including stress
        , dehydration, and lack of sleep.</p>
        <img src="https://media.istockphoto.com/id/949054828/photo/i-have-to-keep-away-from-focusing-on-the-pain.jpg?s=612x612&w=0&k=20&c=Qe7AMK9IQrsnsCKF_0AagMmV7aOkDGBizi8Jo2l0YJk=">
        <button class="back-btn">Back</button>
        `;
        break;

        case'Toe Fungus':
        content = `
        <h2>Toenail Fungus</h2>
        <p>Toenail fungus is a fungal infection that affects the toenails, causing them to
        become discolored, thickened, and brittle.</p>
        <img src="https://media.istockphoto.com/id/181076711/photo/toenail-with-fungus.jpg?s=612x612&w=0&k=20&c=LhCoRUz3E7twQLygE9pgtJ2wyn1ymPekzSan1SLYiHA=">
        <button class="back-btn">Back</button>
        `;
        break;

    }

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = content;
    contentSection.style.display = 'block';

    // Hide main page
    const mainPage = document.getElementById('main-page');
    mainPage.style.display = 'none';

    document.querySelector('.back-btn').addEventListener('click', function() {
        document.getElementById('content-section').style.display = 'none'; // Hide content section
        document.getElementById('main-page').style.display = 'block'; // Show main page
    });
}
