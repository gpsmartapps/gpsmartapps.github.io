
//DISABLING FIELDS
document.addEventListener("DOMContentLoaded", function () {
    // Get the fields to be disabled
    const examTypeField = document.getElementById("examType");
    const schoolNameField = document.getElementById("schoolName");
    const schoolNumberField = document.getElementById("schoolNumber");

    // Disable the fields
    if (examTypeField) examTypeField.disabled = true;
    if (schoolNameField) schoolNameField.disabled = true;
    if (schoolNumberField) schoolNumberField.disabled = true;
});

//LIST OF STATES AND LGAS
const stateAndLGAData = {
    "Abia": [
        "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala-Ngwa North", "Isiala-Ngwa South", "Isuikwato", "Obi Nwa", "Ohafia", "Osisioma", "Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu-Neochi"
    ],
    "Adamawa": [
        "Demsa", "Fufore", "Ganaye", "Gireri", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"
    ],
    "Anambra": [
        "Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South",
        "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili south", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North",
        "Onitsha South", "Orumba North", "Orumba South", "Oyi"
    ],
    "Akwa Ibom": [
        "Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono",
        "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun",
        "Uruan", "Urue-Offong/Oruko ", "Uyo"
    ],
    "Bauchi": [
        "Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau",
        "Ningi", "Shira", "Tafawa-Balewa", "Toro", "Warji", "Zaki"
    ],
    "Bayelsa": [
        "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Jaw", "Yenegoa"
    ],
    "Benue": [
        "Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Oju", "Okpokwu", "Ohimini", "Oturkpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"
    ],
    "Borno": [
        "Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"
    ],
    "Cross River": [
        "Akpabuyo", "Odukpani", "Akamkpa", "Biase", "Abi", "Ikom", "Yarkur", "Odubra", "Boki", "Ogoja", "Yala", "Obanliku", "Obudu", "Calabar South", "Etung", "Bekwara", "Bakassi", "Calabar Municipality"
    ],
    "Delta": [
        "Oshimili", "Aniocha", "Aniocha South", "Ika South", "Ika North-East", "Ndokwa West", "Ndokwa East", "Isoko south", "Isoko North", "Bomadi", "Burutu", "Ughelli South", "Ughelli North", "Ethiope West", "Ethiope East", "Sapele", "Okpe", "Warri North", "Warri South", "Uvwie", "Udu", "Warri Central", "Ukwani",
        "Oshimili North", "Patani"
    ],
    "Ebonyi": [
        "Edda", "Afikpo", "Onicha", "Ohaozara", "Abakaliki", "Ishielu", "lkwo", "Ezza", "Ezza South", "Ohaukwu", "Ebonyi", "Ivo"
    ],
    "Enugu": [
        "Enugu South,", "Igbo-Eze South", "Enugu North", "Nkanu", "Udi Agwu", "Oji-River", "Ezeagu", "IgboEze orth", "Isi-Uzo", "Nsukka", "Igbo-Ekiti", "Uzo-Uwani", "Enugu Eas", "Aninri", "Nkanu East", "Udenu."
    ],
    "Edo": [
        "Esan North-East", "Esan Central", "Esan West", "Egor", "Ukpoba", "Central", "Etsako Central", "Igueben", "Oredo", "Ovia SouthWest", "Ovia South-East", "Orhionwon", "Uhunmwonde", "Etsako East", "Esan South-East"
    ],
    "Ekiti": [
        "Ado", "Ekiti-East", "Ekiti-West", "Emure/Ise/Orun", "Ekiti South-West", "Ikere", "Irepodun", "Ijero,", "Ido/Osi", "Oye", "Ikole", "Moba", "Gbonyin", "Efon", "Ise/Orun", "Ilejemeje."
    ],
    "FCT - Abuja": [
        "Abaji", "Abuja Municipal", "Bwari", "Gwagwalada", "Kuje", "Kwali"
    ],
    "Gombe": [
        "Akko", "Balanga", "Billiri", "Dukku", "Kaltungo", "Kwami", "Shomgom", "Funakaye", "Gombe", "Nafada/Bajoga", "Yamaltu/Delta."
    ],
    "Imo": [
        "Aboh-Mbaise", "Ahiazu-Mbaise", "Ehime-Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Mbaitoli", "Ngor-Okpala", "Njaba", "Nwangele", "Nkwerre", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri-Municipal", "Owerri North", "Owerri West"
    ],
    "Jigawa": [
        "Auyo", "Babura", "Birni Kudu", "Biriniwa", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama Kazaure", "Kiri Kasamma", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule-Tankarkar", "Taura", "Yankwashi"
    ],
    "Kaduna": [
        "Birni-Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon-Gari", "Sanga", "Soba", "Zango-Kataf", "Zaria"
    ],
    "Kano": [
        "Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garum", "Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "kumbotso", "Ghari", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takali", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"
    ],
    "Katsina": [
        "Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin-Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazuu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"
    ],
    "Kebbi": [
        "Aleiro", "Arewa-Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"
    ],
    "Kogi": [
        "Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Mangongo", "Okehi", "Okene", "Olamabolo", "Omala", "Yagba East", "Yagba West"
    ],
    "Kwara": [
        "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke-Ero", "Oyun", "Pategi"
    ],
    "Lagos": [
        "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju/Lekki", "Ifako-Ijaye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"
    ],
    "Nasarawa": [
        "Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa-Eggon", "Obi", "Toto", "Wamba"
    ],
    "Niger": [
        "Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Muya", "Pailoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"
    ],
    "Ogun": [
        "Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Yewa North", "Yewa South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North ast",
        "Ijebu Ode", "Ikenne", "Imeko-Afon", "Ipokia", "Obafemi-Owode", "Ogun Waterside", "Odeda", "Odogbolu", "Remo North", "Shagamu"
    ],
    "Ondo": [
        "Akoko North East", "Akoko North West", "Akoko South Akure East", "Akoko South West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji", "Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"
    ],
    "Osun": [
        "Aiyedade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central",
        "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesha East", "Ilesha West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun",
        "Odo-Otin", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"
    ],
    "Oyo": [
        "Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan Central", "Ibadan North", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona-Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"
    ],
    "Plateau": [
        "Barikin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"
    ],
    "Rivers": [
        "Abua/Odual", "Ahoada East", "Ahoada West", "Akuku Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Emohua", "Eleme", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omumma", "Opobo/Nkoro", "Oyigbo", "Port-Harcourt", "Tai"
    ],
    "Sokoto": [
        "Binji", "Bodinga", "Dange-shnsi", "Gada", "Goronyo", "Gudu", "Gawabawa", "Illela", "Isa", "Kware", "kebbe", "Rabah", "Sabon birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tqngaza", "Tureta", "Wamako", "Wurno", "Yabo"
    ],
    "Taraba": [
        "Ardo-kola", "Bali", "Donga", "Gashaka", "Cassol", "Ibi", "Jalingo", "Karin-Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"
    ],
    "Yobe": [
        "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Karawa", "Machina", "Nangere", "Nguru Potiskum", "Tarmua", "Yunusari", "Yusufari"
    ],
    "Zamfara": [
        "Anka", "Bakura", "Birnin Magaji", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura", "Namoda", "Maradun", "Maru", "Shinkafi",
        "Talata Mafara", "Tsafe", "Zurmi"
    ]
};

//LOADING STATES ON FORM LOAD
window.onload = async function () {
    const stateSelect = document.getElementById('state');

    // Get the states and sort them alphabetically
    const sortedStates = Object.keys(stateAndLGAData).sort();

    // Populate the state dropdown with sorted states
    sortedStates.forEach(state => {
        let option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
};

async function populateLGA() {
    const stateSelect = document.getElementById("state");
    const lgaSelect = document.getElementById("lga");
    const selectedState = stateSelect.value;

    // Clear previous LGA options
    lgaSelect.innerHTML = '<option value="">Select an LGA</option>';

    if (selectedState) {
        // Get the LGAs for the selected state and sort them alphabetically
        const lgas = stateAndLGAData[selectedState].sort();

        // Populate the LGA dropdown with sorted LGAs
        lgas.forEach(lga => {
            const option = document.createElement("option");
            option.value = lga;
            option.textContent = lga;
            lgaSelect.appendChild(option);
        });
    }
};


//GET LGA BASED ON STATE SELECTED
document.getElementById('state').addEventListener('change', function () {
    // Get the selected value from the dropdown
    const selectedState = this.value;

    // Call the function you want to execute when the state changes
    populateLGA()
    // populateLGA(selectedState);
});

//POPULATE DATA BASED ON SCHOOLNUMBER
// centre-enroll.js
window.onload = function () {
    const schoolNumber = localStorage.getItem('schoolNumber');
    const schoolName = localStorage.getItem('schoolName');
    const state = localStorage.getItem('state');
    const lga = localStorage.getItem('lga');

    if (schoolNumber) {
        document.getElementById('schoolNumber').value = schoolNumber;
    }
    if (schoolName) {
        document.getElementById('schoolName').value = schoolName;
    }
    if (state) {
        document.getElementById('state').value = state;
    }
    if (lga) {
        document.getElementById('lga').value = lga;
    }
};


//CHECKS ALL INPUT BEFORE SUBMITTING
document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("update");

    updateButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission for validation

        // Get values from the form
        const examType = document.getElementById("examType").value.trim();
        const schoolName = document.getElementById("schoolName").value.trim();
        const schoolNumber = document.getElementById("schoolNumber").value.trim();
        const registratorName = document.getElementById("registratorName").value.trim();
        const schoolEmail = document.getElementById("schoolEmail").value.trim();
        const registratorPhone = document.getElementById("registratorPhone").value.trim();
        const principalPhone = document.getElementById("principalPhone").value.trim();
        const state = document.getElementById("state").value.trim();
        const lga = document.getElementById("lga").value.trim();
        const schoolType = document.getElementById("schoolType").value.trim();
        const schoolAddress = document.getElementById("schoolAddress").value.trim();

        // Regex patterns
        const phonePattern = /^[0-9]{11,11}$/; // Adjust pattern to match your required phone format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validation checks
        if (examType === "") {
            showNotification("error", "Examination Type is missing. Start school verification.");
            document.getElementById("examType").focus();
        } else if (schoolNumber === "") {
            showNotification("error", "School Number is missing. Start school verification.");
            document.getElementById("schoolNumber").focus();
        } else if (schoolName === "") {
            showNotification("error", "School Name is missing. Start school verification.");
            document.getElementById("schoolName").focus();
        } else if (registratorName === "") {
            showNotification("error", "Please enter the full name of the registrator.");
            document.getElementById("registratorName").focus();
        } else if (schoolEmail === "" || !emailPattern.test(schoolEmail)) {
            showNotification("error", "Please enter a valid school email address.");
            document.getElementById("schoolEmail").focus();
        } else if (registratorPhone === "" || !phonePattern.test(registratorPhone)) {
            showNotification("error", "Please enter a valid registrator's phone number.");
            document.getElementById("registratorPhone").focus();
        } else if (principalPhone === "" || !phonePattern.test(principalPhone)) {
            showNotification("error", "Please enter a valid principal's phone number.");
            document.getElementById("principalPhone").focus();
        } else if (state === "" || state === "Select State") {
            showNotification("error", "Please select a valid state.");
            document.getElementById("state").focus();
        } else if (lga === "" || lga === "Select an LGA") {
            showNotification("error", "Please select a valid local government area.");
            document.getElementById("lga").focus();
        } else if (schoolType === "" || schoolType === "Select School Type") {
            showNotification("error", "Please select a school type.");
            document.getElementById("schoolType").focus();
        } else if (schoolAddress === "") {
            showNotification("error", "Please enter the school address.");
            document.getElementById("schoolAddress").focus();
        } else {
            // Proceed with submission (Database logic integration)
            sendCentreData({
                examType,
                schoolName,
                schoolNumber,
                registratorName,
                schoolEmail,
                registratorPhone,
                principalPhone,
                state,
                lga,
                schoolType,
                schoolAddress
            });
        }
    });

    function showNotification(type, message) {
        const notification = document.getElementById('notification') || createNotificationElement();

        // Clear any existing notification classes
        notification.className = 'notification unselectable';

        // Add the appropriate class based on the type
        if (type === 'error') {
            notification.classList.add('error');
        } else if (type === 'success') {
            notification.classList.add('success');
        } else if (type === 'info') {
            notification.classList.add('info');
        }

        // Set the message and show the notification
        notification.textContent = message;
        notification.style.display = 'block';

        // Hide the notification after a few seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    function createNotificationElement() {
        const notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
        return notification;
    }

    async function sendCentreData(data) {
        try {
            const response = await fetch('http://localhost:3000/submit-enrollment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Ensure data is being correctly sent
            });

            if (response.ok) {
                showNotification("success", "Centre details have been updated successfully!");
            } else {
                showNotification("error", "Centre has already been registered.");
            }
        } catch (error) {
            console.error("Error during submission:", error);
            showNotification("error", "An error occurred. Please try again later.");
        }
    }

});


