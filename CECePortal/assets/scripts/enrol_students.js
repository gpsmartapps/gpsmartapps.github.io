const stateAndLGAData = {
    "Abia": [
        "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala-Ngwa North", "Isiala-Ngwa South", "Isuikwuato", "Obi Nwa", "Ohafia", "Osisioma", "Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu-Neochi"
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
}

document.getElementById('state').addEventListener('change', function () {
    // Get the selected value from the dropdown
    const selectedState = this.value;

    // Call the function you want to execute when the state changes
    populateLGA()
    // populateLGA(selectedState);
});


// document.addEventListener('DOMContentLoaded', () => {
//     const steps = document.querySelectorAll('.form-step');
//     const nextButtons = document.querySelectorAll('.btn-next');
//     const prevButtons = document.querySelectorAll('.btn-prev');
//     const progressBar = document.getElementById('progressBar');
//     const submitButton = document.getElementById('submitBtn'); // Ensure this exists in HTML
//     const notification = document.getElementById('notification'); // Notification element
//     const totalSteps = steps.length;
//     let currentStep = 0;

//     // Function to show a specific form step
//     function showStep(index) {
//         steps.forEach((step, i) => {
//             step.classList.toggle('form-step-active', i === index);
//         });

//         // Update the progress bar
//         if (progressBar) {
//             progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
//         } else {
//             console.error("Progress bar element with id 'progressBar' not found.");
//         }

//         // Toggle the submit button visibility
//         toggleSubmitButton();
//     }

//     // Function to handle the Next button click
//     function handleNext() {
//         if (validateStep(currentStep)) {
//             if (currentStep < totalSteps - 1) {
//                 currentStep++;
//                 showStep(currentStep);
//             }
//         } else {
//             showNotification('Please complete all fields in the current step.', 'error');
//         }
//     }

//     // Function to handle the Previous button click
//     function handlePrev() {
//         if (currentStep > 0) {
//             currentStep--;
//             showStep(currentStep);
//         }
//     }

//     // Event listeners for the Next and Previous buttons
//     nextButtons.forEach(button => button.addEventListener('click', handleNext));
//     prevButtons.forEach(button => button.addEventListener('click', handlePrev));

//     // Initialize the form by showing the first step
//     showStep(currentStep);

//     // Function to validate a specific form step
//     function validateStep(stepIndex) {
//         const currentStepElement = steps[stepIndex];
//         let isValid = true;

//         // Clear previous error messages
//         clearErrors(currentStepElement);

//         // Validate inputs based on the current step
//         switch (stepIndex) {
//             case 0:
//                 isValid = validatePersonalInfo();
//                 break;
//             case 1:
//                 isValid = validateContactInfo();
//                 break;
//             case 2:
//                 isValid = validateAdditionalInfo();
//                 break;
//             case 3:
//                 isValid = validatePassportPhoto();
//                 break;
//             default:
//                 break;
//         }

//         return isValid;
//     }

//     // Function to clear error messages within a step
//     function clearErrors(stepElement) {
//         stepElement.querySelectorAll('.error-message').forEach(el => el.remove());
//     }

//     // Personal Information validation
//     function validatePersonalInfo() {
//         let isValid = true;
//         const fields = ['surname', 'firstname', 'dob'];

//         fields.forEach(id => {
//             const element = document.getElementById(id);
//             if (!element.value.trim()) {
//                 showNotification(`${capitalizeFirstLetter(id)} is required.`, 'error');
//                 isValid = false;
//             } else if (!isTextValid(element)) {
//                 showNotification(`${capitalizeFirstLetter(id)} must contain only letters.`, 'error');
//                 isValid = false;
//             }
//         });

//         return isValid;
//     }

//     // Contact Information validation
//     function validateContactInfo() {
//         let isValid = true;

//         const phone = document.getElementById('phone');
//         const email = document.getElementById('email');
//         const state = document.getElementById('state');
//         const lga = document.getElementById('lga');

//         const phonePattern = /^[0-9]{11}$/;
//         if (!phone.value.trim() || !phonePattern.test(phone.value)) {
//             showNotification('A valid 11-digit phone number is required.', 'error');
//             isValid = false;
//         }

//         if (email.value.trim() && !/\S+@\S+\.\S+/.test(email.value)) {
//             showNotification('Enter a valid email address.', 'error');
//             isValid = false;
//         }

//         if (!state.value) {
//             showNotification('State of origin is required.', 'error');
//             isValid = false;
//         }

//         if (!lga.value) {
//             showNotification('Local Government Area is required.', 'error');
//             isValid = false;
//         }

//         return isValid;
//     }

//     // Additional Information validation
//     function validateAdditionalInfo() {
//         let isValid = true;

//         const gender = document.getElementById('gender');
//         const disability = document.getElementById('disability');

//         if (!gender.value) {
//             showNotification(gender, 'Gender is required.');
//             isValid = false;
//         }

//         if (!disability.value) {
//             showNotification('Disability status is required.', 'error');
//             isValid = false;
//         }

//         return isValid;
//     }

//     // Passport Photo validation
//     function validatePassportPhoto() {
//         let isValid = true;
//         const passportInput = document.getElementById('passport');
//         const file = passportInput.files[0];

//         if (!file) {
//             showNotification('Passport photo is required.', 'error');
//             isValid = false;
//         } else if (!file.type.startsWith('image/')) {
//             showNotification('Only image files are allowed.', 'error');
//             isValid = false;
//         } else if (file.size > 1500000) { // 1.5MB (adjust as needed)
//             showNotification('File is too large. Maximum size is 1.5MB.'), 'error';
//             isValid = false;
//         }

//         if (isValid) {
//             previewPassportPhoto(file);
//         }

//         return isValid;
//     }

//     // Function to show notification messages
//     function showNotification(message, type) {
//         if (!notification) {
//             console.error("Notification element with id 'notification' not found.");
//             return;
//         }

//         notification.className = `notification ${type} unselectable`;
//         notification.textContent = message;

//         // Position the notification
//         if (type === 'error') {
//             notification.style.position = 'fixed';
//             notification.style.top = '20px';
//             notification.style.right = '20px';
//         } else if (type === 'success') {
//             notification.style.position = 'fixed';
//             notification.style.top = '20px';
//             notification.style.right = '20px';
//         } else {
//             notification.style.position = 'fixed';
//             notification.style.top = '20px';
//             notification.style.right = '20px';
//         }

//         notification.style.display = 'block';

//         setTimeout(() => {
//             notification.style.display = 'none';
//         }, 3000);
//     }

//     // Function to capitalize the first letter of a string
//     function capitalizeFirstLetter(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     // Function to check if a text field contains only letters and spaces
//     function isTextValid(input) {
//         return /^[A-Za-z\s]+$/.test(input.value.trim());
//     }

//     // Function to toggle the visibility and state of the submit button
//     function toggleSubmitButton() {
//         if (!submitButton) {
//             console.error("Submit button with id 'submitBtn' not found.");
//             return;
//         }

//         if (currentStep === totalSteps - 1) {
//             // On the last step, check if the passport photo is valid to enable the submit button
//             if (validatePassportPhoto()) {
//                 submitButton.style.display = 'inline-block';
//                 submitButton.disabled = false;
//             } else {
//                 submitButton.style.display = 'none';
//                 submitButton.disabled = true;
//             }
//         } else {
//             submitButton.style.display = 'none';
//             submitButton.disabled = true;
//         }
//     }

//     // Function to preview the passport photo
//     function previewPassportPhoto(file) {
//         const passportPreview = document.getElementById('passportPreview');
//         if (!passportPreview) {
//             console.error("Passport preview element with id 'passportPreview' not found.");
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = function (event) {
//             passportPreview.src = event.target.result;
//             passportPreview.style.display = 'block';
//         };
//         reader.readAsDataURL(file);
//     }

//     // Event listeners for input changes to trigger validation and button toggling
//     document.querySelectorAll('input, select, textarea').forEach(input => {
//         input.addEventListener('input', () => {
//             // Optionally, you can validate on input change
//             // validateStep(currentStep);
//             // toggleSubmitButton();
//         });
//     });

//     // Function to handle form submission
//     async function handleSubmit(event) {
//         event.preventDefault(); // Prevent default form submission

//         if (validateStep(currentStep)) {
//             const formData = new FormData(document.getElementById('enrollmentForm'));
//             try {
//                 const response = await fetch('/your-backend-endpoint', { // Replace with your backend endpoint
//                     method: 'POST',
//                     body: formData
//                 });

//                 if (response.ok) {
//                     showNotification('Form submitted successfully!', 'success');
//                     clearForm();
//                 } else {
//                     showNotification('Form submission failed. Please try again.', 'error');
//                 }
//             } catch (error) {
//                 console.error('Error submitting form:', error);
//                 showNotification('An error occurred. Please try again later.', 'error');
//             }
//         } else {
//             showNotification('Please complete all required fields before submitting.', 'error');
//         }
//     }

//     // Function to clear the form after successful submission
//     function clearForm() {
//         document.getElementById('enrollmentForm').reset();
//         document.getElementById('passportPreview').style.display = 'none';
//         currentStep = 0;
//         showStep(currentStep);
//     }

//     // Event listener for the Submit button
//     if (submitButton) {
//         submitButton.addEventListener('click', handleSubmit);
//     } else {
//         console.error("Submit button with id 'submitBtn' not found.");
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const steps = document.querySelectorAll('.form-step');
//     const nextButtons = document.querySelectorAll('.btn-next');
//     const prevButtons = document.querySelectorAll('.btn-prev');
//     const progressBar = document.getElementById('progressBar');
//     const submitButton = document.getElementById('submitBtn'); // Ensure this exists in HTML
//     const notification = document.getElementById('notification'); // Notification element
//     const totalSteps = steps.length;
//     let currentStep = 0;

//     // Function to show a specific form step
//     function showStep(index) {
//         steps.forEach((step, i) => {
//             step.classList.toggle('form-step-active', i === index);
//         });

//         // Update the progress bar
//         if (progressBar) {
//             progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
//         } else {
//             console.error("Progress bar element with id 'progressBar' not found.");
//         }

//         // Toggle the submit button visibility
//         toggleSubmitButton();
//     }

//     // Function to handle the Next button click
//     function handleNext(event) {
//         if (validateStep(currentStep)) {
//             if (currentStep < totalSteps - 1) {
//                 currentStep++;
//                 showStep(currentStep);
//             }
//         } else {
//             showNotification('Please complete all fields in the current step.', 'error');
//             event.preventDefault(); // Prevent moving to the next step if validation fails
//         }
//     }

//     // Function to handle the Previous button click
//     function handlePrev() {
//         if (currentStep > 0) {
//             currentStep--;
//             showStep(currentStep);
//         }
//     }

//     // Event listeners for the Next and Previous buttons
//     nextButtons.forEach(button => button.addEventListener('click', handleNext));
//     prevButtons.forEach(button => button.addEventListener('click', handlePrev));

//     // Initialize the form by showing the first step
//     showStep(currentStep);

//     // Function to validate a specific form step
//     function validateStep(stepIndex) {
//         const currentStepElement = steps[stepIndex];
//         let isValid = true;

//         // Clear previous error messages
//         clearErrors(currentStepElement);

//         // Validate inputs based on the current step
//         switch (stepIndex) {
//             case 0:
//                 isValid = validatePersonalInfo();
//                 break;
//             case 1:
//                 isValid = validateContactInfo();
//                 break;
//             case 2:
//                 isValid = validateAdditionalInfo();
//                 break;
//             case 3:
//                 isValid = validatePassportPhoto();
//                 break;
//             default:
//                 break;
//         }

//         return isValid;
//     }

//     // Function to clear error messages within a step
//     function clearErrors(stepElement) {
//         stepElement.querySelectorAll('.error-message').forEach(el => el.remove());
//     }

//     // Personal Information validation
//     function validatePersonalInfo() {
//         let isValid = true;
//         const fields = ['surname', 'firstname', 'dob'];

//         fields.forEach(id => {
//             const element = document.getElementById(id);
//             if (!element.value.trim()) {
//                 showNotification(`${capitalizeFirstLetter(id)} is required.`, 'error');
//                 isValid = false;
//             } else if (!isTextValid(element)) {
//                 showNotification(`${capitalizeFirstLetter(id)} must contain only letters.`, 'error');
//                 isValid = false;
//             }
//         });

//         return isValid;
//     }

//     // Contact Information validation
//     function validateContactInfo() {
//         let isValid = true;

//         const phone = document.getElementById('phone');
//         const email = document.getElementById('email');
//         const state = document.getElementById('state');
//         const lga = document.getElementById('lga');

//         const phonePattern = /^[0-9]{11}$/;
//         if (!phone.value.trim() || !phonePattern.test(phone.value)) {
//             showNotification('A valid 11-digit phone number is required.', 'error');
//             isValid = false;
//         }

//         if (email.value.trim() && !/\S+@\S+\.\S+/.test(email.value)) {
//             showNotification('Enter a valid email address.', 'error');
//             isValid = false;
//         }

//         if (!state.value) {
//             showNotification('State of origin is required.', 'error');
//             isValid = false;
//         }

//         if (!lga.value) {
//             showNotification('Local Government Area is required.', 'error');
//             isValid = false;
//         }

//         return isValid;
//     }

//     // Additional Information validation
//     function validateAdditionalInfo() {
//         let isValid = true;

//         const gender = document.getElementById('gender');
//         const disability = document.getElementById('disability');

//         if (!gender.value) {
//             showNotification('Gender is required.', 'error');
//             isValid = false;
//         }

//         if (!disability.value) {
//             showNotification('Disability status is required.', 'error');
//             isValid = false;
//         }

//         return isValid;
//     }

//     // Passport Photo validation
//     function validatePassportPhoto() {
//         let isValid = true;
//         const passportInput = document.getElementById('passport');
//         const file = passportInput.files[0];

//         if (!file) {
//             showNotification('Passport photo is required.', 'error');
//             isValid = false;
//         } else if (!file.type.startsWith('image/')) {
//             showNotification('Only image files are allowed.', 'error');
//             isValid = false;
//         } else if (file.size > 1500000) { // 1.5MB (adjust as needed)
//             showNotification('File is too large. Maximum size is 1.5MB.', 'error');
//             isValid = false;
//         }

//         if (isValid) {
//             previewPassportPhoto(file);
//         }

//         return isValid;
//     }

//     // Function to show notification messages
//     function showNotification(message, type) {
//         if (!notification) {
//             console.error("Notification element with id 'notification' not found.");
//             return;
//         }

//         notification.className = `notification ${type} unselectable`;
//         notification.textContent = message;

//         notification.style.position = 'fixed';
//         notification.style.top = '20px';
//         notification.style.right = '20px';
//         notification.style.display = 'block';

//         setTimeout(() => {
//             notification.style.display = 'none';
//         }, 3000);
//     }

//     // Function to capitalize the first letter of a string
//     function capitalizeFirstLetter(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     // Function to check if a text field contains only letters and spaces
//     function isTextValid(input) {
//         return /^[A-Za-z\s]+$/.test(input.value.trim());
//     }

//     // Function to toggle the visibility and state of the submit button
//     function toggleSubmitButton() {
//         if (!submitButton) {
//             console.error("Submit button with id 'submitBtn' not found.");
//             return;
//         }

//         if (currentStep === totalSteps - 1) {
//             // On the last step, check if the passport photo is valid to enable the submit button
//             if (validatePassportPhoto()) {
//                 submitButton.style.display = 'inline-block';
//                 submitButton.disabled = false;
//             } else {
//                 submitButton.style.display = 'none';
//                 submitButton.disabled = true;
//             }
//         } else {
//             submitButton.style.display = 'none';
//             submitButton.disabled = true;
//         }
//     }

//     // Function to preview the passport photo
//     function previewPassportPhoto(file) {
//         const passportPreview = document.getElementById('passportPreview');
//         if (!passportPreview) {
//             console.error("Passport preview element with id 'passportPreview' not found.");
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = function (event) {
//             passportPreview.src = event.target.result;
//             passportPreview.style.display = 'block';
//         };
//         reader.readAsDataURL(file);
//     }

//     // Event listener for the Submit button
//     if (submitButton) {
//         submitButton.addEventListener('click', handleSubmit);
//     } else {
//         console.error("Submit button with id 'submitBtn' not found.");
//     }

//     // Function to handle form submission
//     async function handleSubmit(event) {
//         event.preventDefault(); // Prevent default form submission

//         if (validateStep(currentStep)) {
//             const formData = new FormData(document.getElementById('enrollmentForm'));
//             try {
//                 const response = await fetch('/your-backend-endpoint', { // Replace with your backend endpoint
//                     method: 'POST',
//                     body: formData
//                 });

//                 if (response.ok) {
//                     showNotification('Form submitted successfully!', 'success');
//                     clearForm();
//                 } else {
//                     showNotification('Form submission failed. Please try again.', 'error');
//                 }
//             } catch (error) {
//                 console.error('Error submitting form:', error);
//                 showNotification('An error occurred. Please try again later.', 'error');
//             }
//         } else {
//             showNotification('Please complete all required fields before submitting.', 'error');
//         }
//     }

//     // Function to clear the form after successful submission
//     function clearForm() {
//         document.getElementById('enrollmentForm').reset();
//         document.getElementById('passportPreview').style.display = 'none';
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const progressBar = document.getElementById('progressBar');
    const submitButton = document.getElementById('submitBtn'); // Ensure this exists in HTML
    const notification = document.getElementById('notification'); // Notification element
    const totalSteps = steps.length;
    let currentStep = 0;

    // Function to show a specific form step
    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('form-step-active', i === index);
        });

        // Update the progress bar
        if (progressBar) {
            progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
        } else {
            console.error("Progress bar element with id 'progressBar' not found.");
        }

        // Toggle the submit button visibility
        toggleSubmitButton();
    }

    // Function to handle the Next button click
    function handleNext(event) {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps - 1) {
                currentStep++;
                showStep(currentStep);
            }
        } else {
            showNotification("Please fill out all required fields.", "error");
        }
    }

    // Function to handle the Previous button click
    function handlePrev(event) {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Function to validate the current step
    function validateStep(index) {
        const step = steps[index];
        const inputs = step.querySelectorAll('input, select');
        let valid = true;

        inputs.forEach(input => {
            if (input.required && !input.value) {
                valid = false;
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        });

        return valid;
    }

    // Function to show notifications
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        setTimeout(() => {
            notification.textContent = '';
            notification.className = 'notification';
        }, 3000);
    }

    // Function to toggle submit button visibility
    function toggleSubmitButton() {
        if (currentStep === totalSteps - 1) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    }

    // Add event listeners
    nextButtons.forEach(button => button.addEventListener('click', handleNext));
    prevButtons.forEach(button => button.addEventListener('click', handlePrev));

    // Initialize the form by showing the first step
    showStep(currentStep);

    // Handle passport preview
    const passportInput = document.getElementById('passport');
    const passportPreview = document.getElementById('passportPreview');

    passportInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                passportPreview.src = e.target.result;
                passportPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            passportPreview.style.display = 'none';
        }
    });

    // Handle form submission
    submitButton.addEventListener('click', (event) => {
        if (validateStep(currentStep)) {
            // Form submission logic here
            showNotification('Form submitted successfully!', 'success');
        } else {
            showNotification('Please fill out all required fields.', 'error');
        }
    });
});
