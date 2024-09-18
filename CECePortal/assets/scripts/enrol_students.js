const stateAndLGAData = {
  Abia: [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala-Ngwa North",
    "Isiala-Ngwa South",
    "Isuikwuato",
    "Obi Nwa",
    "Ohafia",
    "Osisioma",
    "Ngwa",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umu-Neochi",
  ],
  Adamawa: [
    "Demsa",
    "Fufore",
    "Ganaye",
    "Gireri",
    "Gombi",
    "Guyuk",
    "Hong",
    "Jada",
    "Lamurde",
    "Madagali",
    "Maiha",
    "Mayo-Belwa",
    "Michika",
    "Mubi North",
    "Mubi South",
    "Numan",
    "Shelleng",
    "Song",
    "Toungo",
    "Yola North",
    "Yola South",
  ],
  Anambra: [
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili south",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi",
  ],
  "Akwa Ibom": [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit Eket",
    "Essien Udim",
    "Etim Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo Asutan",
    "Ibiono Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat Enin",
    "Nsit Atai",
    "Obot Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Udung Uko",
    "Ukanafun",
    "Uruan",
    "Urue-Offong/Oruko ",
    "Uyo",
  ],
  Bauchi: [
    "Alkaleri",
    "Bauchi",
    "Bogoro",
    "Damban",
    "Darazo",
    "Dass",
    "Ganjuwa",
    "Giade",
    "Itas/Gadau",
    "Jama'are",
    "Katagum",
    "Kirfi",
    "Misau",
    "Ningi",
    "Shira",
    "Tafawa-Balewa",
    "Toro",
    "Warji",
    "Zaki",
  ],
  Bayelsa: [
    "Brass",
    "Ekeremor",
    "Kolokuma/Opokuma",
    "Nembe",
    "Ogbia",
    "Sagbama",
    "Southern Jaw",
    "Yenegoa",
  ],
  Benue: [
    "Ado",
    "Agatu",
    "Apa",
    "Buruku",
    "Gboko",
    "Guma",
    "Gwer East",
    "Gwer West",
    "Katsina-Ala",
    "Konshisha",
    "Kwande",
    "Logo",
    "Makurdi",
    "Obi",
    "Ogbadibo",
    "Oju",
    "Okpokwu",
    "Ohimini",
    "Oturkpo",
    "Tarka",
    "Ukum",
    "Ushongo",
    "Vandeikya",
  ],
  Borno: [
    "Abadam",
    "Askira/Uba",
    "Bama",
    "Bayo",
    "Biu",
    "Chibok",
    "Damboa",
    "Dikwa",
    "Gubio",
    "Guzamala",
    "Gwoza",
    "Hawul",
    "Jere",
    "Kaga",
    "Kala/Balge",
    "Konduga",
    "Kukawa",
    "Kwaya Kusar",
    "Mafa",
    "Magumeri",
    "Maiduguri",
    "Marte",
    "Mobbar",
    "Monguno",
    "Ngala",
    "Nganzai",
    "Shani",
  ],
  "Cross River": [
    "Akpabuyo",
    "Odukpani",
    "Akamkpa",
    "Biase",
    "Abi",
    "Ikom",
    "Yarkur",
    "Odubra",
    "Boki",
    "Ogoja",
    "Yala",
    "Obanliku",
    "Obudu",
    "Calabar South",
    "Etung",
    "Bekwara",
    "Bakassi",
    "Calabar Municipality",
  ],
  Delta: [
    "Oshimili",
    "Aniocha",
    "Aniocha South",
    "Ika South",
    "Ika North-East",
    "Ndokwa West",
    "Ndokwa East",
    "Isoko south",
    "Isoko North",
    "Bomadi",
    "Burutu",
    "Ughelli South",
    "Ughelli North",
    "Ethiope West",
    "Ethiope East",
    "Sapele",
    "Okpe",
    "Warri North",
    "Warri South",
    "Uvwie",
    "Udu",
    "Warri Central",
    "Ukwani",
    "Oshimili North",
    "Patani",
  ],
  Ebonyi: [
    "Edda",
    "Afikpo",
    "Onicha",
    "Ohaozara",
    "Abakaliki",
    "Ishielu",
    "lkwo",
    "Ezza",
    "Ezza South",
    "Ohaukwu",
    "Ebonyi",
    "Ivo",
  ],
  Enugu: [
    "Enugu South,",
    "Igbo-Eze South",
    "Enugu North",
    "Nkanu",
    "Udi Agwu",
    "Oji-River",
    "Ezeagu",
    "IgboEze orth",
    "Isi-Uzo",
    "Nsukka",
    "Igbo-Ekiti",
    "Uzo-Uwani",
    "Enugu Eas",
    "Aninri",
    "Nkanu East",
    "Udenu.",
  ],
  Edo: [
    "Esan North-East",
    "Esan Central",
    "Esan West",
    "Egor",
    "Ukpoba",
    "Central",
    "Etsako Central",
    "Igueben",
    "Oredo",
    "Ovia SouthWest",
    "Ovia South-East",
    "Orhionwon",
    "Uhunmwonde",
    "Etsako East",
    "Esan South-East",
  ],
  Ekiti: [
    "Ado",
    "Ekiti-East",
    "Ekiti-West",
    "Emure/Ise/Orun",
    "Ekiti South-West",
    "Ikere",
    "Irepodun",
    "Ijero",
    "Ido/Osi",
    "Oye",
    "Ikole",
    "Moba",
    "Gbonyin",
    "Efon",
    "Ise/Orun",
    "Ilejemeje.",
  ],
  "FCT - Abuja": [
    "Abaji",
    "Abuja Municipal",
    "Bwari",
    "Gwagwalada",
    "Kuje",
    "Kwali",
  ],
  Gombe: [
    "Akko",
    "Balanga",
    "Billiri",
    "Dukku",
    "Kaltungo",
    "Kwami",
    "Shomgom",
    "Funakaye",
    "Gombe",
    "Nafada/Bajoga",
    "Yamaltu/Delta.",
  ],
  Imo: [
    "Aboh-Mbaise",
    "Ahiazu-Mbaise",
    "Ehime-Mbano",
    "Ezinihitte",
    "Ideato North",
    "Ideato South",
    "Ihitte/Uboma",
    "Ikeduru",
    "Isiala Mbano",
    "Isu",
    "Mbaitoli",
    "Mbaitoli",
    "Ngor-Okpala",
    "Njaba",
    "Nwangele",
    "Nkwerre",
    "Obowo",
    "Oguta",
    "Ohaji/Egbema",
    "Okigwe",
    "Orlu",
    "Orsu",
    "Oru East",
    "Oru West",
    "Owerri-Municipal",
    "Owerri North",
    "Owerri West",
  ],
  Jigawa: [
    "Auyo",
    "Babura",
    "Birni Kudu",
    "Biriniwa",
    "Buji",
    "Dutse",
    "Gagarawa",
    "Garki",
    "Gumel",
    "Guri",
    "Gwaram",
    "Gwiwa",
    "Hadejia",
    "Jahun",
    "Kafin Hausa",
    "Kaugama Kazaure",
    "Kiri Kasamma",
    "Kiyawa",
    "Maigatari",
    "Malam Madori",
    "Miga",
    "Ringim",
    "Roni",
    "Sule-Tankarkar",
    "Taura",
    "Yankwashi",
  ],
  Kaduna: [
    "Birni-Gwari",
    "Chikun",
    "Giwa",
    "Igabi",
    "Ikara",
    "jaba",
    "Jema'a",
    "Kachia",
    "Kaduna North",
    "Kaduna South",
    "Kagarko",
    "Kajuru",
    "Kaura",
    "Kauru",
    "Kubau",
    "Kudan",
    "Lere",
    "Makarfi",
    "Sabon-Gari",
    "Sanga",
    "Soba",
    "Zango-Kataf",
    "Zaria",
  ],
  Kano: [
    "Ajingi",
    "Albasu",
    "Bagwai",
    "Bebeji",
    "Bichi",
    "Bunkure",
    "Dala",
    "Dambatta",
    "Dawakin Kudu",
    "Dawakin Tofa",
    "Doguwa",
    "Fagge",
    "Gabasawa",
    "Garko",
    "Garum",
    "Mallam",
    "Gaya",
    "Gezawa",
    "Gwale",
    "Gwarzo",
    "Kabo",
    "Kano Municipal",
    "Karaye",
    "Kibiya",
    "Kiru",
    "kumbotso",
    "Ghari",
    "Kura",
    "Madobi",
    "Makoda",
    "Minjibir",
    "Nasarawa",
    "Rano",
    "Rimin Gado",
    "Rogo",
    "Shanono",
    "Sumaila",
    "Takali",
    "Tarauni",
    "Tofa",
    "Tsanyawa",
    "Tudun Wada",
    "Ungogo",
    "Warawa",
    "Wudil",
  ],
  Katsina: [
    "Bakori",
    "Batagarawa",
    "Batsari",
    "Baure",
    "Bindawa",
    "Charanchi",
    "Dandume",
    "Danja",
    "Dan Musa",
    "Daura",
    "Dutsi",
    "Dutsin-Ma",
    "Faskari",
    "Funtua",
    "Ingawa",
    "Jibia",
    "Kafur",
    "Kaita",
    "Kankara",
    "Kankia",
    "Katsina",
    "Kurfi",
    "Kusada",
    "Mai'Adua",
    "Malumfashi",
    "Mani",
    "Mashi",
    "Matazuu",
    "Musawa",
    "Rimi",
    "Sabuwa",
    "Safana",
    "Sandamu",
    "Zango",
  ],
  Kebbi: [
    "Aleiro",
    "Arewa-Dandi",
    "Argungu",
    "Augie",
    "Bagudo",
    "Birnin Kebbi",
    "Bunza",
    "Dandi",
    "Fakai",
    "Gwandu",
    "Jega",
    "Kalgo",
    "Koko/Besse",
    "Maiyama",
    "Ngaski",
    "Sakaba",
    "Shanga",
    "Suru",
    "Wasagu/Danko",
    "Yauri",
    "Zuru",
  ],
  Kogi: [
    "Adavi",
    "Ajaokuta",
    "Ankpa",
    "Bassa",
    "Dekina",
    "Ibaji",
    "Idah",
    "Igalamela-Odolu",
    "Ijumu",
    "Kabba/Bunu",
    "Kogi",
    "Lokoja",
    "Mopa-Muro",
    "Ofu",
    "Ogori/Mangongo",
    "Okehi",
    "Okene",
    "Olamabolo",
    "Omala",
    "Yagba East",
    "Yagba West",
  ],
  Kwara: [
    "Asa",
    "Baruten",
    "Edu",
    "Ekiti",
    "Ifelodun",
    "Ilorin East",
    "Ilorin West",
    "Irepodun",
    "Isin",
    "Kaiama",
    "Moro",
    "Offa",
    "Oke-Ero",
    "Oyun",
    "Pategi",
  ],
  Lagos: [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti-Osa",
    "Ibeju/Lekki",
    "Ifako-Ijaye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere",
  ],
  Nasarawa: [
    "Akwanga",
    "Awe",
    "Doma",
    "Karu",
    "Keana",
    "Keffi",
    "Kokona",
    "Lafia",
    "Nasarawa",
    "Nasarawa-Eggon",
    "Obi",
    "Toto",
    "Wamba",
  ],
  Niger: [
    "Agaie",
    "Agwara",
    "Bida",
    "Borgu",
    "Bosso",
    "Chanchaga",
    "Edati",
    "Gbako",
    "Gurara",
    "Katcha",
    "Kontagora",
    "Lapai",
    "Lavun",
    "Magama",
    "Mariga",
    "Mashegu",
    "Mokwa",
    "Muya",
    "Pailoro",
    "Rafi",
    "Rijau",
    "Shiroro",
    "Suleja",
    "Tafa",
    "Wushishi",
  ],
  Ogun: [
    "Abeokuta North",
    "Abeokuta South",
    "Ado-Odo/Ota",
    "Yewa North",
    "Yewa South",
    "Ewekoro",
    "Ifo",
    "Ijebu East",
    "Ijebu North",
    "Ijebu North ast",
    "Ijebu Ode",
    "Ikenne",
    "Imeko-Afon",
    "Ipokia",
    "Obafemi-Owode",
    "Ogun Waterside",
    "Odeda",
    "Odogbolu",
    "Remo North",
    "Shagamu",
  ],
  Ondo: [
    "Akoko North East",
    "Akoko North West",
    "Akoko South Akure East",
    "Akoko South West",
    "Akure North",
    "Akure South",
    "Ese-Odo",
    "Idanre",
    "Ifedore",
    "Ilaje",
    "Ile-Oluji",
    "Okeigbo",
    "Irele",
    "Odigbo",
    "Okitipupa",
    "Ondo East",
    "Ondo West",
    "Ose",
    "Owo",
  ],
  Osun: [
    "Aiyedade",
    "Aiyedire",
    "Atakumosa East",
    "Atakumosa West",
    "Boluwaduro",
    "Boripe",
    "Ede North",
    "Ede South",
    "Egbedore",
    "Ejigbo",
    "Ife Central",
    "Ife East",
    "Ife North",
    "Ife South",
    "Ifedayo",
    "Ifelodun",
    "Ila",
    "Ilesha East",
    "Ilesha West",
    "Irepodun",
    "Irewole",
    "Isokan",
    "Iwo",
    "Obokun",
    "Odo-Otin",
    "Ola-Oluwa",
    "Olorunda",
    "Oriade",
    "Orolu",
    "Osogbo",
  ],
  Oyo: [
    "Afijio",
    "Akinyele",
    "Atiba",
    "Atisbo",
    "Egbeda",
    "Ibadan Central",
    "Ibadan North",
    "Ibadan North West",
    "Ibadan South East",
    "Ibadan South West",
    "Ibarapa Central",
    "Ibarapa East",
    "Ibarapa North",
    "Ido",
    "Irepo",
    "Iseyin",
    "Itesiwaju",
    "Iwajowa",
    "Kajola",
    "Lagelu Ogbomosho North",
    "Ogbomosho South",
    "Ogo Oluwa",
    "Olorunsogo",
    "Oluyole",
    "Ona-Ara",
    "Orelope",
    "Ori Ire",
    "Oyo East",
    "Oyo West",
    "Saki East",
    "Saki West",
    "Surulere",
  ],
  Plateau: [
    "Barikin Ladi",
    "Bassa",
    "Bokkos",
    "Jos East",
    "Jos North",
    "Jos South",
    "Kanam",
    "Kanke",
    "Langtang North",
    "Langtang South",
    "Mangu",
    "Mikang",
    "Pankshin",
    "Qua'an Pan",
    "Riyom",
    "Shendam",
    "Wase",
  ],
  Rivers: [
    "Abua/Odual",
    "Ahoada East",
    "Ahoada West",
    "Akuku Toru",
    "Andoni",
    "Asari-Toru",
    "Bonny",
    "Degema",
    "Emohua",
    "Eleme",
    "Etche",
    "Gokana",
    "Ikwerre",
    "Khana",
    "Obio/Akpor",
    "Ogba/Egbema/Ndoni",
    "Ogu/Bolo",
    "Okrika",
    "Omumma",
    "Opobo/Nkoro",
    "Oyigbo",
    "Port-Harcourt",
    "Tai",
  ],
  Sokoto: [
    "Binji",
    "Bodinga",
    "Dange-shnsi",
    "Gada",
    "Goronyo",
    "Gudu",
    "Gawabawa",
    "Illela",
    "Isa",
    "Kware",
    "kebbe",
    "Rabah",
    "Sabon birni",
    "Shagari",
    "Silame",
    "Sokoto North",
    "Sokoto South",
    "Tambuwal",
    "Tqngaza",
    "Tureta",
    "Wamako",
    "Wurno",
    "Yabo",
  ],
  Taraba: [
    "Ardo-kola",
    "Bali",
    "Donga",
    "Gashaka",
    "Cassol",
    "Ibi",
    "Jalingo",
    "Karin-Lamido",
    "Kurmi",
    "Lau",
    "Sardauna",
    "Takum",
    "Ussa",
    "Wukari",
    "Yorro",
    "Zing",
  ],
  Yobe: [
    "Bade",
    "Bursari",
    "Damaturu",
    "Fika",
    "Fune",
    "Geidam",
    "Gujba",
    "Gulani",
    "Jakusko",
    "Karasuwa",
    "Karawa",
    "Machina",
    "Nangere",
    "Nguru Potiskum",
    "Tarmua",
    "Yunusari",
    "Yusufari",
  ],
  Zamfara: [
    "Anka",
    "Bakura",
    "Birnin Magaji",
    "Bukkuyum",
    "Bungudu",
    "Gummi",
    "Gusau",
    "Kaura",
    "Namoda",
    "Maradun",
    "Maru",
    "Shinkafi",
    "Talata Mafara",
    "Tsafe",
    "Zurmi",
  ],
};

window.onload = async function () {
  const stateSelect = document.getElementById("state");

  // Get the states and sort them alphabetically
  const sortedStates = Object.keys(stateAndLGAData).sort();

  // Populate the state dropdown with sorted states
  sortedStates.forEach((state) => {
    let option = document.createElement("option");
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
    lgas.forEach((lga) => {
      const option = document.createElement("option");
      option.value = lga;
      option.textContent = lga;
      lgaSelect.appendChild(option);
    });
  }
}

document.getElementById("state").addEventListener("change", function () {
  // Get the selected value from the dropdown
  const selectedState = this.value;

  // Call the function you want to execute when the state changes
  populateLGA();
  // populateLGA(selectedState);
});

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextButtons = document.querySelectorAll(".btn-next");
  const prevButtons = document.querySelectorAll(".btn-prev");
  const progressBar = document.getElementById("progressBar");
  const submitButton = document.getElementById("submit"); // Ensure this exists in HTML
  const notification = document.getElementById("notification"); // Notification element
  const passportInput = document.getElementById("passport");
  const passportPreview = document.getElementById("passportPreview");

  const totalSteps = steps.length;
  let passportValid = false;
  // Initialize step index
  let currentStep = 0;

  // Regex patterns
  const phonePattern = /^[0-9]{11}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Function to validate the entire form
  function validateForm() {
    let valid = true;
    let firstError = null;

    steps.forEach((step, index) => {
      const inputs = step.querySelectorAll("input, select");
      inputs.forEach((input) => {
        const value = input.value.trim();
        let inputValid = true;

        if (
          input.required &&
          input.id !== "othername" &&
          input.id !== "email" &&
          !value
        ) {
          inputValid = false;
          input.classList.add("input-error");
          showNotification(
            "error",
            `${input.previousElementSibling.textContent} is required.`
          );
          if (!firstError) firstError = input;
        } else if (
          input.id === "phone" &&
          (!value || !phonePattern.test(value))
        ) {
          inputValid = false;
          showNotification("error", "Please enter a valid phone number.");
          if (!firstError) firstError = input;
        } else if (
          input.id === "email" &&
          (!value || !emailPattern.test(value))
        ) {
          inputValid = false;
          showNotification("error", "Please enter a valid email address.");
          if (!firstError) firstError = input;
        } else if (index === totalSteps - 1) {
          // Specific validations for the last step
          if (input.id === "passport" && passportInput.files.length === 0) {
            inputValid = false;
            showNotification("error", "Please upload a passport photo.");
            if (!firstError) firstError = input;
          }
        }

        if (!inputValid) {
          valid = false;
        } else {
          input.classList.remove("input-error");
        }
      });
    });

    // Focus on the first error field
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }

    return valid;
  }

  // Function to show notifications
  function showNotification(type, message) {
    const notification = document.getElementById("notification");
    notification.className = `notification ${type} unselectable`;
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }

  // Function to validate user inputs
  function validateInputs(step) {
    const inputs = step.querySelectorAll("input, select");
    let isValid = true;

    inputs.forEach((input) => {
      if (input.required && !input.value) {
        input.classList.add("invalid");
        isValid = false;
      } else {
        input.classList.remove("invalid");
      }
    });

    return isValid;
  }

  // Function to handle next button click
  function nextStep() {
    const currentStepElement = steps[currentStep];
    if (validateInputs(currentStepElement)) {
      currentStep++;
      updateProgress();
      showCurrentStep();
    } else {
      notificationMessage.textContent = "Please fill in all required fields.";
      notificationBar.classList.add("show");
      setTimeout(() => {
        notificationBar.classList.remove("show");
      }, 3000);
    }
  }

  // Function to handle previous button click
  function prevStep() {
    currentStep--;
    updateProgress();
    showCurrentStep();
  }

  // Function to update progress bar
  function updateProgress() {
    const progressWidth = (currentStep / (steps.length - 1)) * 100;
    progressBar.style.width = `${progressWidth}%`;
  }

  // Function to show current step
  function showCurrentStep() {
    steps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.add("form-step-active");
      } else {
        step.classList.remove("form-step-active");
      }
    });
  }

  // Function to toggle submit button state
  function toggleSubmitButton() {
    if (currentStep === totalSteps - 1) {
      submitButton.style.display = "block";
      submitButton.disabled = !passportValid; // Enable or disable based on passport validation
    }
  }

  // Handle passport input change event
  passportInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 15 * 1024) {
        // 15 KB in bytes
        showNotification("error", "Passport photo must be less than 15KB.");
        passportInput.value = ""; // Clear the input
        passportPreview.style.display = "none";
        passportValid = false; // Mark passport as invalid
      } else {
        // Show image preview
        const reader = new FileReader();
        reader.onload = (e) => {
          passportPreview.src = e.target.result;
          passportPreview.style.display = "block";
        };
        reader.readAsDataURL(file);
        passportValid = true; // Mark passport as valid
        toggleSubmitButton(); // Update button state
      }
    } else {
      passportPreview.style.display = "none";
      passportValid = false; // Mark passport as invalid
      toggleSubmitButton(); // Update button state
    }
  });

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      const formData = new FormData(document.getElementById("enrollmentForm"));
      try {
        const response = await fetch("/your-backend-endpoint", {
          // Replace with your backend endpoint
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          showNotification(
            "success",
            "Candidate has been registered successfully!"
          );
          clearForm();
        } else {
          showNotification(
            "error",
            "Candidate registration failed. Please try again."
          );
        }
      } catch (error) {
        showNotification(
          "error",
          "An error occurred during form submission. Please try again later."
        );
      }
    } else {
      showNotification(
        "error",
        "Please complete all required fields before submitting."
      );
    }
  }

  // Function to clear the form after successful submission
  function clearForm() {
    document.getElementById("enrollmentForm").reset();
    document.getElementById("passportPreview").style.display = "none";
    passportValid = false; // Reset passport validation
    currentStep = 0;
    showStep(currentStep);
  }

  // Event listener for the Submit button
  if (submitButton) {
    submitButton.addEventListener("click", handleSubmit);
  }

  // Function to show a specific form step
  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("form-step-active", i === index);
    });
    progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
    toggleSubmitButton();
  }

  // Add event listeners for step navigation
  nextButtons.forEach((button) =>
    button.addEventListener("click", nextButtons)
  );
  prevButtons.forEach((button) =>
    button.addEventListener("click", prevButtons)
  );

  // Initialize the form by showing the first step
  showStep(currentStep);
});
