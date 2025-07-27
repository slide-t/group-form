// ✅ Updated real Ogun State LGA, Wards & Polling Units
const data = {
  ogun: {
    "Abeokuta North": {
      "Ikereku Ward-1": ["Ago Ododo Ojuferewa", "Idomapa", "Ikereku Abeke", "Ikereku Abeokuta",
            "Ikereku Ita Apahun", "Ikereku Oloti", "Ikereku Oke Eri", "Ilawo"],
      
      "Ikija Ward-2": ["Adedotun", "AGO Odo-oke Eri", "Ikija", "Ilagun Isale Ogun"],
      
      "AGO-OK0 WARD-3": ["Ago Oko", " Araromi Ita Kilosin", "Balogun",
                       "Ifa Kiwoshin", "Uta Morin", "Sapon Oju Ogbara"],
      "Totoro": ["Totoro Hall", "Lafenwa Primary School"],
      "Oke-Ago-Owu": ["Oke-Ago-Owu Hall", "CAC Primary School"] 
    },
 
    "Abeokuta South": {
      "Ake I": ["Ake Palace", "St. Leo School"],
      "Adatan": ["Adatan Market Hall", "Community School"],
      "Ijeun South": ["Ijeun High School", "St. Peter's Anglican"],
      "Sapon": ["Sapon Market", "Baptist Primary School"],
      "Ago-Oba": ["Ago-Oba Primary", "Central Mosque"]
    },
    "Ijebu Ode": {
      "Ward-1": ["Beside Co-operative Building-1-Existing", "EMMANUEL SCHOOL I ITALUPE-2 Existing", " MOSLEM SCHOOL, ISOKU-3 Existing", 
                      "FRONT OF TALABI’S HOUSE OLISA STREET I-4 Existing", "IMORU ROAD JUNCTION-5 Existing", 
                      "OKE-OLA ILORIN-6 Existing",  "EMMANUEL SCHOOL II-7 Existing", " FRONT OF TALABI’S HOUSE OLISA STREET II-8 Existing",
                     "ADJACENT A.B SUNMOLA HOUSE, IJAGUN ROAD-9 New", "BESIDE 3A’S HOTEL, IMORU ROAD-10 New", "MOSLEM SCHOOL II ONDO ROAD-11 New" ],
      "Ward-2": ["BAPTIST DAY SCHOOL EREKO-001 Existing", "FRONT OF OUR LADY’S SCHOOL-002 Existing",
                "FRONT OF ALHAJI KUKOYI’S HOUSE-3 Existing", "OPPOSITE ITAJANA MOSQUE-4 Existing",
"STATE HOSPITAL-5 Existing", "DENTAL CENTRE-6 Existing",
"BY ODO ESA PREMIER MOSQUE NEAR IDIROKO, OLISA-7 New",
"SAKA ASHIRU JUNCTION VIA MAYOMAYO-8 New",
"OPEN SPACE BY OLORUNGBEBE MOSQUE-9 New",
"JIMILEYIN JUNCTION, ADJACENT IREPODUN MOSQUE-10 New",
"OPEN SPACE AT OGUNTUGA FOUR JUNCTION-11 New"],
      "Ward-3": ["Porogun Area A", "Porogun Area B"],
      "Ward-4": ["Ijasi Catholic", "Community Centre"],
     
      "Ward-5": ["Egbo Primary School", "Odo-Egbo Central"],
      "Ward-6": ["Egbo Primary School", "Odo-Egbo Central"],
    "Ward-7": ["Egbo Primary School", "Odo-Egbo Central"],
      "Ward-8": ["Egbo Primary School", "Odo-Egbo Central"],
      "Ward-9": ["Egbo Primary School", "Odo-Egbo Central"],
    "Ward-10": ["Egbo Primary School", "Odo-Egbo Central"],
    "Ward-11": ["Egbo Primary School", "Odo-Egbo Central"]
    
    
    
    },

                  

 

 





    
    "Ifo": {
      "Ifo I": ["Ifo Town Hall", "Oke-Aro"],
      "Ifo II": ["Onihale Hall", "Ijoko Primary School"],
      "Ajuwon": ["Ajuwon Central", "Ajuwon Market"],
      "Ojodu": ["Ojodu Grammar School", "Ojodu Central"],
      "Abule-Iroko": ["Abule-Iroko Hall", "School II"]
    },
    "Sagamu": {
      "Makun": ["Makun Hall", "Makun School"],
      "Offin": ["Offin Town Hall", "Ishara Primary"],
      "Sabo": ["Sabo Market", "Sabo School"],
      "Ijoku": ["Ijoku Central", "Ijoku Hall"],
      "Isote": ["Isote Primary School", "St. John's"]
    }
  }
};

// DOM Elements
const stateEl = document.getElementById("state");
const lgaEl = document.getElementById("lga");
const wardEl = document.getElementById("ward");
const unitEl = document.getElementById("unit");

const lgaGroup = document.getElementById("lga-group");
const wardGroup = document.getElementById("ward-group");
const unitGroup = document.getElementById("unit-group");
const biodataForm = document.getElementById("biodata-form");

const dobEl = document.getElementById("dob");
const ageEl = document.getElementById("age");

const isVoterEl = document.getElementById("isVoter");
const vinGroup = document.getElementById("vin-group");

const isPartyEl = document.getElementById("isPartyMember");
const partyIdGroup = document.getElementById("party-id-group");

const regTime = document.getElementById("regTime");
const timestampGroup = document.getElementById("timestamp-group");

// ⏳ Show LGA after State
stateEl.addEventListener("change", () => {
  const state = stateEl.value.toLowerCase();
  resetDropdown(lgaEl);
  resetDropdown(wardEl);
  resetDropdown(unitEl);
  hideElement(biodataForm);
  hideElement(wardGroup);
  hideElement(unitGroup);

  if (data[state]) {
    lgaGroup.classList.remove("hidden");
    for (let lga in data[state]) {
      const opt = document.createElement("option");
      opt.value = lga;
      opt.textContent = lga;
      lgaEl.appendChild(opt);
    }
  }
});

// ⏳ Show Wards after LGA
lgaEl.addEventListener("change", () => {
  const state = stateEl.value.toLowerCase();
  const lga = lgaEl.value;
  resetDropdown(wardEl);
  resetDropdown(unitEl);
  hideElement(biodataForm);
  hideElement(unitGroup);

  if (data[state] && data[state][lga]) {
    wardGroup.classList.remove("hidden");
    for (let ward in data[state][lga]) {
      const opt = document.createElement("option");
      opt.value = ward;
      opt.textContent = ward;
      wardEl.appendChild(opt);
    }
  }
});

// ⏳ Show Units after Ward
wardEl.addEventListener("change", () => {
  const state = stateEl.value.toLowerCase();
  const lga = lgaEl.value;
  const ward = wardEl.value;
  resetDropdown(unitEl);
  hideElement(biodataForm);

  if (data[state] && data[state][lga][ward]) {
    unitGroup.classList.remove("hidden");
    data[state][lga][ward].forEach(unit => {
      const opt = document.createElement("option");
      opt.value = unit;
      opt.textContent = unit;
      unitEl.appendChild(opt);
    });
  }
});

// ✅ Show biodata after Unit
unitEl.addEventListener("change", () => {
  if (unitEl.value) {
    biodataForm.classList.remove("hidden");
  }
});

// 🎂 Age Calculation
dobEl.addEventListener("change", () => {
  const dob = new Date(dobEl.value);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  ageEl.value = age;
});

// ✅ Show VIN input if voter
isVoterEl.addEventListener("change", () => {
  vinGroup.classList.toggle("hidden", isVoterEl.value !== "yes");
});

// ✅ Show Party ID input if party member
isPartyEl.addEventListener("change", () => {
  partyIdGroup.classList.toggle("hidden", isPartyEl.value !== "yes");
});

// 👤 Simulate Admin Login
document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = true; // Set to false for regular users
  if (isAdmin) {
    timestampGroup.classList.remove("hidden");
    regTime.value = new Date().toLocaleString();
  }
});

// ♻ Utility functions
function resetDropdown(dropdown) {
  dropdown.innerHTML = '<option value="">-- Select --</option>';
}
function hideElement(el) {
  el.classList.add("hidden");
}
