 // Event listener for the "See More" button to show hidden cards
document.getElementById('see-more-btn').addEventListener('click', function() {
    var hiddenCards = document.querySelector('.hidden-cards');
    if (hiddenCards.style.display === 'none' || hiddenCards.style.display === '') {
        hiddenCards.style.display = 'flex'; 
        this.textContent = 'See Less';
    } else {
        hiddenCards.style.display = 'none';
        this.textContent = 'See More';
    }
});


// Event listener for card clicks
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        const destination = this.getAttribute('data-destination'); // Get destination
        loadContent(destination); // Load the content
    });
});
window.onscroll = function() {
    let headerTag = document.querySelectorAll('.Headername');    
    console.log(headerTag);
    if (window.scrollY > 20) { // Adjust '50' to the amount of scroll you want
        headerTag[0].classList.add('scrolled');
    } else {
        
        headerTag[0].classList.remove('scrolled');
    }
};


//  load content dynamically based on card clicked
function loadContent(destination) {
    let content = ''; // Variable to hold content
    
    // Switch case for different destinations
    switch (destination) {
        case 'bekal-fort':
            content = `
                <h2>Bekal Fort</h2>
                <p>Bekal Fort is a historical structure built in the 17th century and has itself become part of an identity of the district. It is situated in Pallikara village of Kasaragod on a headland that spans up to 35 km.It is believed that the fort was originally constructed by rulers of the ancient Kadampa dynasty and the power changed hands over the years to Kolathiri Rajas, Hyder Ali, Tipu Sultan and finally to the British East India Company. The lofty, circular laterite structure of the fort that stands at a height of 130 feet is shaped like a giant keyhole. The walls around rise to 12 metres in height. The highlights include tall observation towers which presumably would have been occupied by gigantic cannons until a few centuries ago, a water tank with its flight of steps and a tunnel that opens towards the south. The architectural beauty of the fort also met the defence requirements of various rulers,which was the main reason for the fort’s existence. There are also some pilgrim attractions nearby like the Lord Hanuman temple and an old Mosque which is believed to be built by Tippu Sultan.The Bekal beach is only a kilometre away from the fort which offers an enticing view of the imposing fort. It has now become a favoured destination for weddings, ad shoots and filmmakers for its picturesque location. This is the largest and the best-preserved fort in the district and is now maintained by the Archaeological Department of Government of India.</p>
                <img src="https://vistaramagazine.com/wp-content/uploads/2022/01/01-9.jpg" alt="Bekal Fort">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'ranipuram-hills':
            content = `
                <h2>Ranipuram Hills</h2>
                <p>Ranipuram Hills is a popular scenic hotpot in Kasaragod district which is situated about 43 km away from Kanhangad. Formerly known as Madathumala, this picturesque stretch of hills stands at a height of 750 m above sea level and is the point of highest altitude in the entire district.Ranipuram comprises of evergreen Shola forests, wildflowers, moors and sprawling meadows that is home to an assortment of flora and fauna common to the Western Ghats. The proposed Ranipuram Wildlife Sanctuary encompasses this forest and hills and is a biodiversity hotspot.Animals like elephants, leopards, deer, wild dogs, wild boars, macaques, jungle cats, leopard cats, porcupines, Malabar giant squirrels and many species of birds, butterflies and medicinal plants can be found here. The region merges with the Coorg Mountains of Karnataka and also with the Talacauvery Wildlife Sanctuary. Ranipuram is also the most sought after destination by trekkers and nature lovers. The total distance of the trek is 5 km to the top and back. Ranipuram can be reached through Kanhangad and Panathady. Cottages are arranged for tourists by the District tourism promotion council.</p>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c9/7b/10/ranipuram-hills.jpg" alt="Ranipuram Hills">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'chandragiri-fort':
            content = `
                <h2>Chandragiri Fort</h2>
                <p>Chandragiri Fort is another historical landmark in the district situated in the south-east of Kasaragod town. The Chandragiri River that flows nearby once bordered the kingdoms of Kolathunadu and Tulunadu. The origin of the fort goes back to the times of Keladi Nayakas who took control of the region as the Vijayanagara Empire fell. Shivappa Nayak secured his empire by renovating and constructing many forts around the area one of which is Chandragiri which was built in the 17th century. The remnants of the fort which can be seen on a small hill overlook the estuary where the Payaswini River joins the Arabian Sea. The old laterite walls around the fort still bear marks of cannonball attacks. The ancient Kizhur Sastha temple and a mosque are situated near the fort. The fort is now maintained by the Archaeology Department of India. Boat services are available here that will take you to nearby islands and palm groves. Speed boat rides,houseboat cruises, island camping and wildlife tours in the hinterlands can also be arranged.</p>
                <img src="https://www.keralatourism.org/images/destination/large/chandragiri_fort_river20131031103019_165_1.jpg" alt="Chandragiri Fort">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'valiyaparamba-backwaters':
            content = `
                <h2>Valiyaparamba Backwaters</h2>
                <p>Valiyaparamba backwaters is a picturesque destination in Kasaragod and is situated 10 km south of Nileswaram. The place gets its name from Valiyaparamba island and is fed by four rivers.Valiyaparamba backwaters is dotted with numerous islands and also includes Kunnuveedu beach and Padanna beach. Around 90 varieties of bird species have been identified from this place.Besides its quaint beauty, Valiyaparamba is also known as one of the important fishing centres of Kerala. Boat cruises are offered through the splendid backwaters which is lined by areca nut groves and coconut palms. BRDC also provides houseboat services on the Valiyaparamba backwaters from Kottapuram to Kannur. A houseboat terminal is developed at Ayitti and Edayilakkad. Besides cruises, dinner at an island, canoeing and other facilities are also arranged here.</p>
                <img src="https://www.sodhatravel.com/hs-fs/hubfs/Valiyaparamba%20Backwaters-Kasargod-Sodha-Travel.jpg?width=2121&name=Valiyaparamba%20Backwaters-Kasargod-Sodha-Travel.jpg" alt="Valiyaparamba Backwaters">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'nileswaram':
            content = `
                <h2>Nileswaram</h2>
                <p>Nileswaram holds adequate significance in the map of Kasaragod as it is rightly known as the cultural capital of the district. The place used to be the headquarters of the Nileshwar rajas. The Kovilakoms or Palaces of the rajas gives us a glimpse of the architectural brilliance and mastery of woodworks sculpted in those times.  The Thekke Kovilakom, Kinavoor Kovilakom, Kovilakom Chira and the Tali temple associated with the royal family are some of them. Nileswaram palace now functions as the folklore centre of the Department of Archaeology. Nileswaram is home to many folk arts and culture and is also known for the numerous kavus (shrines), temple festivals and its handloom industries. Mannan Purathu kavu is the important kavu here where the annual temple festival is held, that draws in large crowds.</p>
                <img src="https://content.jdmagicbox.com/comp/kasaragod/a7/9999p4994.4994.191121020554.j4a7/catalogue/thaliyil-shiva-kshetram-nileshwar-kasaragod-temples-5i5uqcov5l.jpg" alt="Nileswaram">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'posadi-gumpe':
            content = `
                <h2>Posadi Gumpe</h2>
                <p>Possadi Gumpe is another hillock destination in Kasaragod that gives a picture of the hilly terrains and the rolling hills that chart the district.  It is an emerging tourist attraction that is situated 15 kilometres south of the tourist hotspot of Bekal. The hills stand 1060 feet high above sea level and a trek up the crest of the hill provides the picturesque view of the outlines of the Western Ghats on one end and the endless stretches of Arabian Sea on the other. One can also spot Mangalore and Kudremukh from the hilltop. Possadi Gumpe is an untarnished natural landscape in Kasaragod that boasts of enticing sceneries and a serene ambience altogether. The nearest village from here is Paivalike.</p>
                <img src="https://hikasaragod.in/tourism/posadigumpe/8.jpg" alt="Posadi Gumpe">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'kanhangad':
            content = `
                <h2>Kanhangad</h2>
                <p>Kanhangad is a populous municipality and the commercial town in Kasaragod district. It is a coastal town bounded by the municipal town of Kasaragod in the North, Nileshwaram the cultural epicentre of the district to its south, the hilly town of Pannathur to its east and the Arabian Sea to its west. The significance of the town lies in its position as it is located at the junction between the two major cities of Mangalore and Kannur. The town is characterized by coconut palms, hills and streams flowing into the sea. The Arayi River passes through Kanhangad before it drains into River Neeleshwar. The tourist attractions here include Hosdurg fort, Sree Madiyan Koolam temple,Nityananda Ashram, Manjapothi hills, Gandhi smrithi mandapam and many more. The place is also known for the unique cultural art form of Theyyam and other folk art forms like Poorakkali,Maruthukali, etc. Kerala Lalithakala Akademi, the renowned art organisation in Kerala, is also located in Kanhangad.</p>
                <img src="https://www.keralatourism.org/images/temple/video/thumb/Kodoth_Sree_Vishnu_Temple,_Kanhangad-21012020180458.jpg" alt="Kanhangad">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'ananthapura-lake-temple':
            content = `
                <h2>Ananthapura Lake Temple</h2>
                <p>As the name suggests, Ananthapura Lake Temple is located in the middle of a lake in the village of Ananthapura. It is an ancient temple believed to have been built in the 9th century. It is the only lake temple in Kerala and is known as the moolasthanam (the original abode) of Lord Padmanabha of Sree Padmanabhaswamy temple of Thiruvananthapuram. The main deity of Lord Mahavishnu is found to be in a sitting posture here unlike the Ananthashayanam posture in Sree Padmanabhaswamy temple in Thiruvananthapuram. The deity is seated on the serpent king Anantha. The temple also displays impressive wood carvings on the ceilings of the mandapam that depict the stories of dasaavatharam (ten incarnations of Lord Vishnu). To reach the temple, one has to take the deviation from Nayakkap on the Kumbala-Badiadka road.</p>
                <img src="https://live-core-api.travalour.com/common/v1/thumbnail/b4c698b9-32e1-11ea-a2af-0ec82d6f8976?format=webp&width=960" alt="Ananthapura Lake Temple">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'anantheshwar':
            content = `
                <h2>Srimath Anantheshwar Temple Manjeshwar</h2>
                <p>This temple is known for its architecture and religious significance...</p>
                <img src="https://content3.jdmagicbox.com/comp/kasaragod/c5/9999p4994.4994.170315165629.u6c5/catalogue/srimath-anantheshwar-temple-manjeshwar-kasaragod-district-manjeshwar-kasaragod-tourist-attraction-3or0hed.jpg" alt="Srimath Anantheshwar Temple">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'madhur':
            content = `
                <h2>Madhur Sri Madanantheshwara Siddhivinayaka Temple</h2>
                <p>This temple is famous for its beautiful idols and architecture...</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Ananteshwara_Vinayaka_Temple.jpg" alt="Madhur Temple">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'Theyyam':
            content=`
                <h2>Theyyam</h2>
                <p>Theyyam is a ritual folk art form performed in North Kerala since ancient times. It is also known by the name Kaliyattam in some areas. The performance is known as Theyyattam and the elaborate costume is called Theyyakolam. There are over 400 theyyams performed in their own style and music. Some of the prominent ones are Raktha Chamundi, Kari Chamundi, Muchilottu Bhagavathi,Wayanad Kulaven, Gulikan and Pottan.  It is a ritualistic performance that combines elements of dance, mime and music. Performances are never conducted on stage but mostly before the village shrines or as ancestor worship in joint-family houses. It honours the beliefs of ancient tribals on worshipping heroes and the spirits of their ancestors. The heavy and elaborate makeup is distinct for each Theyyam. The face painting might take 8 to 10 hours for certain forms as per the traditional rules. The costumes include headgear, ornaments and detailed make-up and the performer dances to the beat of folk instruments like chenda and elathalam, all of which produces a supernatural effect. The duration depends on the significance of the deity being performed and the hierarchy of the shrine and might extend to 12 to 24 hours. Every performance is filled with such energy and grace that the whole premise would seem caught under its spell. The Theyyam season is usually from November to May and begins in Kasaragod and extends to the neighbouring district of Kannur.</p>
                <img src="https://w0.peakpx.com/wallpaper/58/13/HD-wallpaper-theyyam-devo-malabar-god.jpg">
                <button class="back-btn">Back</button> 
            `;
            break;
        case 'Yakshagana':
            content=`
                <h2>Yakshagana</h2>
                <p>Yakshaganam is an art form performed in South Canara districts of Karnataka and Kasaragod in Kerala.There used to be an ancient form of worship called Bhuta worship practised in these places. Bhuta, which means the past or bygone, refers to the spirit of the ancestors and divine powers. There is a belief that the art form is said to be a manifestation of this Bhuta worship just like Theyyam. As Yakshagana is also influenced by folk dance and Sanskrit drama, it cannot be narrowed down into folk, classical or rural forms since it incorporated elements of all of these. The stories performed in Yakshagana are taken from epics like Ramayana, Mahabharata and Bhagavatham. The word Yakshagana can literally be translated to 'music of celestial beings'. The art form imbibes dance, music and also dialogues. With the accompaniment of background music played using percussion instruments like chenda, maddalam, jagatta or chengila and chakratala or elathalam, the story is narrated by the artists and singers. The performances aren’t always time restrained or fixed to the script but are flexible to improvisations. The dance performance and the dialogues depend on the experience and the skill of the artists. The art form has its own unique stage techniques and the performers sport an elaborate and colourful make-up. The costume consists of a headgear, kavacha, armlets and belts covered with golden foil. The language presented is generally Kannada but is also performed in Malayalam and Tulu languages. It was earlier referred to as Bayatala in some places in Karnataka. Some of the art forms in the neighbouring states like the Therukoothu of Tamil Nadu, Kutiyattam and Chakyarkoothu of Kerala and Veedhinataka of Andhra Pradesh are considered sister art forms of Yakshagana. There's a Yakshagana museum functioning at Manjeshwar Mahakavi Govinda Pai memorial and also a research centre in Government College, Kasaragod. is a ritual folk art form performed in North Kerala since ancient times. It is also known by the name Kaliyattam in some areas. The performance is known as Theyyattam and the elaborate costume is called Theyyakolam. There are over 400 theyyams performed in their own style and music. Some of the prominent ones are Raktha Chamundi, Kari Chamundi, Muchilottu Bhagavathi,Wayanad Kulaven, Gulikan and Pottan.  It is a ritualistic performance that combines elements of dance, mime and music. Performances are never conducted on stage but mostly before the village shrines or as ancestor worship in joint-family houses. It honours the beliefs of ancient tribals on worshipping heroes and the spirits of their ancestors. The heavy and elaborate makeup is distinct for each Theyyam. The face painting might take 8 to 10 hours for certain forms as per the traditional rules. The costumes include headgear, ornaments and detailed make-up and the performer dances to the beat of folk instruments like chenda and elathalam, all of which produces a supernatural effect. The duration depends on the significance of the deity being performed and the hierarchy of the shrine and might extend to 12 to 24 hours. Every performance is filled with such energy and grace that the whole premise would seem caught under its spell. The Theyyam season is usually from November to May and begins in Kasaragod and extends to the neighbouring district of Kannur.</p>
                <img src="https://i.pinimg.com/originals/03/87/72/038772076890317f09a5f7f5e332fa3c.jpg">
                <button class="back-btn">Back</button>
            `;
            break;
        case 'Oppana':
            content=`
            <h2>Oppana</h2>
            <p>Oppana is an entertainment dance ritual performed in the Muslim community by women during weddings. The bride is made to sit at the centre while her friends and relatives sing and dance around her. The women clap their hands to the tunes of Mappilappattu and entertain the bride. It is also performed during Maarkkakalyanam, Vayassariyikkal and Maalppathukali, which are all important occasions in the life of a woman. The performance requires at least ten members and instruments like harmonium, ganjira, tabla and elathalam are also used that adds to its charm.There are two types of Oppana and the performance might vary according to the style. They are Oppana Chaayal and Oppana Murukkam. Though the performance is usually characterised by the rhythmic clapping of the performers, during Chaayal, there’s no clapping of hands, unlike Murukkam.</p>
            <img src="">
            <button class="back-btn">Back</button>
            `;
            break;
    }

    

    // Update content section and show it
    document.getElementById('content-section').innerHTML = content;
    document.getElementById('content-section').style.display = 'block'; // Show content section
    document.getElementById('main-page').style.display = 'none'; // Hide main page

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', function() {
        document.getElementById('content-section').style.display = 'none'; // Hide content section
        document.getElementById('main-page').style.display = 'block'; // Show main page
    });
}
