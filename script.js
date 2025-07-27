// ✅ Updated real Ogun State LGA, Wards & Polling Units
<script>
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
      "Ward-1": [
  "Beside Co-Operative Building (001 - Existing)",
  "Emmanuel School I, Italupe (002 - Existing)",
  "Moslem School, Isoku (003 - Existing)",
  "Front of Talabi’s House, Olisa Street I (004 - Existing)",
  "Imoru Road Junction (005 - Existing)",
  "Oke-Ola Ilorin (006 - Existing)",
  "Emmanuel School II (007 - Existing)",
  "Front of Talabi’s House, Olisa Street II (008 - Existing)",
  "Adjacent A.B Sunmola House, Ijagun Road (009 - New)",
  "Beside 3A’s Hotel, Imoru Road (010 - New)",
  "Moslem School II, Ondo Road (011 - New)"
],
"Ward-2": [
  "Baptist Day School, Ereko (001 - Existing)",
  "Front of Our Lady’s School (002 - Existing)",
  "Front of Alhaji Kukoyi’s House (003 - Existing)",
  "Opposite Itajana Mosque (004 - Existing)",
  "State Hospital (005 - Existing)",
  "Dental Centre (006 - Existing)",
  "By Odo Esa Premier Mosque, Near Idiroko, Olisa (007 - New)",
  "Saka Ashiru Junction via Mayomayo (008 - New)",
  "Open Space by Olorungbebe Mosque (009 - New)",
  "Jimileyin Junction, Adjacent Irepodun Mosque (010 - New)",
  "Open Space at Oguntuga Four Junction (011 - New)"
],
"Ward-3": [
  "Moslem School, Etitale I (001 - Existing)",
  "Opp. Oloritun’s House (002 - Existing)",
  "Front of Igboburo Mosque (003 - Existing)",
  "Front of Balogun Kuku’s House (004 - Existing)",
  "Isokun / Itaogbe Junction (005 - Existing)",
  "Moslem School, Etitale II (006 - Existing)",
  "Ahmmadiah Movement B/S, Araromi (007 - New)"
],
"Ward-4": [
  "Old Wasimi School Hall (001 - Existing)",
  "Joke Taiwo Pry. School (002 - Existing)",
  "Balogun Kuku Road (003 - Existing)",
  "Otubu Memorial School (004 - Existing)",
  "Iyanro Mosque (005 - Existing)",
  "Oke Aje, Back of Ajayi’s House (006 - Existing)",
  "Open Space at Moborode / Gbelegbuwa Junction (007 - New)",
  "Open Space at Itapakure / Olode Junction (008 - New)"
],
     /* "Ward-1": ["Beside Co-operative Building-001-Existing", "EMMANUEL SCHOOL I ITALUPE-002 Existing", " MOSLEM SCHOOL, ISOKU-003 Existing", 
                      "FRONT OF TALABI’S HOUSE OLISA STREET I-004 Existing", "IMORU ROAD JUNCTION-005 Existing", 
                      "OKE-OLA ILORIN-6 Existing",  "EMMANUEL SCHOOL II-007 Existing", " FRONT OF TALABI’S HOUSE OLISA STREET II-008 Existing",
                     "ADJACENT A.B SUNMOLA HOUSE, IJAGUN ROAD-009 New", "BESIDE 3A’S HOTEL, IMORU ROAD-010 New", "MOSLEM SCHOOL II ONDO ROAD-011 New" ],
      "Ward-2": ["BAPTIST DAY SCHOOL EREKO-001 Existing", "FRONT OF OUR LADY’S SCHOOL-002 Existing",
                "FRONT OF ALHAJI KUKOYI’S HOUSE-003 Existing", "OPPOSITE ITAJANA MOSQUE-004 Existing",
"STATE HOSPITAL-005 Existing", "DENTAL CENTRE-006 Existing",
"BY ODO ESA PREMIER MOSQUE NEAR IDIROKO, OLISA-007 New",
"SAKA ASHIRU JUNCTION VIA MAYOMAYO-008 New",
"OPEN SPACE BY OLORUNGBEBE MOSQUE-009 New",
"JIMILEYIN JUNCTION, ADJACENT IREPODUN MOSQUE-010 New",
"OPEN SPACE AT OGUNTUGA FOUR JUNCTION-011 New"],
      "Ward-3": ["MOSLEM SCHOOL ETITALE I-001 Existing", "OPP. OLORITUN’S HOUSE-002 Existing",
"FRONT OF IGBOBURO MOSQUE-003 Existing",
"FRONT OF BALOGUN KUKU’S HOUSE-004 Existing",
"ISOKUN / ITAOGBE JUNCTION-005 Existing",
"MOSELM SCHOOL ETITALE 11-006 Existing",
"AHMMADIAH MOVEMENT B/S, ARAROMI-007 New"],
      "Ward-4": ["OLD WASIMI SCHOOL HALL-001 Existing",
"JOKE TAIWO PRY. SCHOOL-002 Existing",
"BALOGUN KUKU ROAD-003 Existing",
"OTUBU MEMORIAL SCHOOL-004 Existing", "IYANRO MOSQUE-005 Existing",
"OKE AJE, BACK OF AJAYI’S HOUSE-006 Existing",
"OPEN SPACE AT MOBORODE / GBELEGBUWA JUNCTION-007 New",
"OPEN SPACE AT ITAPAKURA / OLODE JUNCTION-008 New"],*/
     
      "Ward-5": [
  "Front Of Olisa’s Palace (Existing PU)",
  "Old Ijada Market (Existing PU)",
  "Omoluwabi Pry. School Imepe (Existing PU)",
  "Moslem Pry. Sch. Imepe (Existing PU)",
  "U.N.A. Pry. Sch. Imepe (Existing PU)",
  "Orunse Area (Existing PU)",
  "Idomowo/Imose (Existing PU)",
  "Wasimi Pry School (Existing PU)",
  "Idele (Existing PU)",
  "Ayeru/Ajegunle (Existing PU)",
  "Ipamuren Mosque (Existing PU)",
  "Beside Ramdat Hotel, Oguntuga St I-Ode (Existing PU)",
  "Open Space At Oya Junction By Adelaja Str. (New PU)",
  "Ajegunle / Ijada Street By Iya Adam Food Canteen (New PU)",
  "Open Space By Satina Hotel, Off Ondo Road (New PU)",
  "Open Space By Olorunosun / Satina Junction, Ondo Road (New PU)",
  "Open Space At Orunse – Jaginrin Junction Imepe (New PU)",
  "Open Space At Alhaji Sodiq Street Near Olatoye House By Cele (New PU)",
  "Cele T-Junction By Kowa Hospital Off Ejinrin Road (New PU)",
  "Open Space Front Of Bishop Court Ejinrin Road (New PU)",
  "Carterpillar Junction Adefisan Road, Off Ejinrin Road (New PU)",
  "Akintonde Plaza By Oyingbo Junction (New PU)",
  "Front Of Halidu Mosque, Idele Junction (New PU)"
],
      
    "Ward-6": [
  "Muslem College (Existing PU)",
  "Opposite Apeloko (Existing PU)",
  "Opposite L.G. Works Dept (Existing PU)",
  "Beside Isasa Mosque (Existing PU)",
  "Christ Church School Molode (Existing PU)",
  "Ayegbami Wasimi Junction (Existing PU)",
  "Ojofa / Alapo Junction (Existing PU)",
  "Mobegelu Street (In Front Of Olowu’s House) (Existing PU)",
  "Adeola Odutola College (Existing PU)",
  "Local Government Maternity Centre (Existing PU)",
  "Fidipote Adeola Junction (New PU)",
  "Open Space At Ayegbami Abass Street Junction (New PU)",
  "Open Space At Mukeke Junction By Moslem College Road (New PU)",
  "Open Space At Middle Of Kaka Street, Tanimola Junction (New PU)",
  "Moslem Primary School, Molode (New PU)",
  "Open Space Agbaje Junction, By Transformer (New PU)",
  "Open Space At Alebiosu Street, Dupmos Junction (New PU)"
],
   /*   
    "Ward-7": [
  "Front Of Babalola’s House (Existing PU)",
  "Ijebu-Ode Grammar School (Existing PU)",
  "Christ Church School, Porogun (Existing PU)",
  "A.G.G.S. Obalende (Existing PU)",
  "Abeokuta Road, Front Of Alowolodu (Existing PU)",
  "Ogbagba Street (Middle, Front Of Alowonle) (Existing PU)",
  "Italapo Mosque (Existing PU)",
  "Middle Alapo Street (In Front Of Mosque) (Existing PU)",
  "Abeokuta Road (In Front Of Olufowobi’s House) (Existing PU)",
  "Fisigboye – Ehindin Junction By Ijebu-Ode Local Government Secretariat (New PU)",
  "Open Space At Alatishe Mosque By Total Filling Station (New PU)",
  "Degun Junction, Obalende (New PU)",
  "Open Space Beside Obalende Police Station (New PU)",
  "Open Space By Ogunbule Junction, Olorunsogo (New PU)",
  "Open Space Lewu Junction Beside Seico House (New PU)",
  "Omosanya Olaonipekun Junction, Off Degun (New PU)",
  "Fidipote Junction, Off Fusigboye Road (New PU)",
  "Open Space At Alafia / Jaura Church Junction (New PU)"
]*/
"Ward-7": [
  "Front Of Babalola’s House (Existing PU)",
  "Ijebu-Ode Grammar School (Existing PU)",
  "Christ Church Sch., Porogun (Existing PU)",
  "A.G.G.S. Obalende (Existing PU)",
  "Abeokuta Road Front Of Alowolodu (Existing PU)",
  "Ogbagba Street (Middle Front Of Alowonle) (Existing PU)",
  "Italapo Mosque (Existing PU)",
  "Middle Alapo Street, (Infront Of Mosque) (Existing PU)",
  "Abeokuta Rd (Infront Of Olufowobi’s House) (Existing PU)",
  "Fisigboye – Ehindin Junction By Ijebu-Ode Local Government Secretariat (New PU)",
  "Open Space At Alatishe Mosque By Total Filling Station (New PU)",
  "Degun Junction, Obalende (New PU)",
  "Open Space Beside Obalende Police Station (New PU)",
  "Open Space By Ogunbule Junction, Olorunsogo (New PU)",
  "Open Space Lewu Junction Beside Seico House (New PU)",
  "Omosanya Olaonipekun Junction, Off Degun (New PU)",
  "Fidipote Junction, Off Fusigboye Road (New PU)",
  "Open Space At Alafia / Jaura Church Junction (New PU)"
],

"Ward-8": [
  "Our Saviour’s Pry. School (Existing PU)",
  "Front Of Bata Shop (Existing PU)",
  "Wesley School (Existing PU)",
  "C.A.C. School Degun (Existing PU)",
  "Idepo Junction (Existing PU)",
  "Araromi/Iloro Junction (Existing PU)",
  "Odutola St. (Beside Odupele Street) (Existing PU)",
  "Molipa (Infront Ogo-Oluwa Bakery) (Existing PU)",
  "Molipa High School (Existing PU)",
  "Odupele / Ogunyoku Junction (Existing PU)",
  "Osimore Junction (Existing PU)",
  "Open Space By Kenny Block Industry, Ilamo Area (New PU)",
  "Open Space By Ajiroba House (New PU)",
  "Open Space At Awoyemi Junction (New PU)",
  "Open Space At Alaiyepe Olugbile Junction Molipa (New PU)",
  "Old Epic School / Cele Church Junction Behind Prime Hotel (New PU)",
  "Open Space By Four Number Junction Molipa Road (New PU)",
  "Open Space At Degun Junction By Onalaja Street Off Folagbade Road (New PU)",
  "Open Space By Ogunba-Olasunbo Junction, Off Folagbade Road (New PU)",
  "Open Space By Zipest Filling Station, Opposite Soye Mosque (New PU)",
  "Ayesan Market Gate, Ayesan Area (New PU)",
  "Awoyelu-Jogbo Health Centre (New PU)",
  "Open Space At Lekuti Oke Junction (New PU)",
  "Open Space Opposite Mahdiyat Mosque Idepo Street (New PU)",
  "Open Space Front Of Ogun State Television, Ijebu Ode (New PU)",
  "Open Space At Osifeso/Odutola Street, Ijebu Ode (New PU)",
  "C. A. C. School, Degun (2) (New PU)",
  "C.A.C Church By Post Office / C.M.S Bookshop Folagbade (New PU)"
],
      
"Ward-9": [
  "St. Augustine Catholic School (Existing PU)",
  "A.U.D. Pry. Sch. I, Bonojo (Existing PU)",
  "A.U.D. Pry. Sch. II, Onirugba (Existing PU)",
  "Govt. Technical College (Existing PU)",
  "Ezekiel Awoyelu Junction (Existing PU)",
  "Beside Ijebu-Ode Stadium (Existing PU)",
  "Tai Solarin College Of Education (Existing PU)",
  "Old Odo Egbo Market (Existing PU)",
  "Ahmadiyya Mosque (Existing PU)",
  "K. Mansion (Existing PU)",
  "Igbeba / Elebute Junction (New PU)",
  "Bonjo / Odutola Street (New PU)",
  "GRA Off Awujale Street (Middle) (New PU)",
  "End of Bonojo Eleruku (New PU)",
  "Olufowobi By Bonojo Four Junction (New PU)",
  "Mahdiyat Primary School (New PU)",
  "Adeben Place Hotel Junction, Igbeba (New PU)",
  "V.I.O Centre, Eruwon Road (New PU)",
  "Luba Comprehensive School Off Erunwon Road (New PU)",
  "Open Space Infront of Eid Praying Ground, Idobi (New PU)",
  "Open Space at New Road by Alafia Junction / Akiniganyin (New PU)"
],
   "Ward-10": [
  "Christ Church Pry. School – Isiwo (Existing PU)",
  "Ayeteju Maternity (Existing PU)",
  "Odo/Asoyin Pry. Sch. (Existing PU)",
  "Okelisa (Opposite New Mosque) (Existing PU)",
  "Odo Lofa (Existing PU)",
  "St. Patrick School, Isiwo (Existing PU)",
  "Ansarudeen High Sch, Isiwo (Existing PU)"
],
      
"Ward-11": [
  "St. Alloysius Sch. Iloti (Existing PU)",
  "Odosengolu (Existing PU)",
  "Odo-Arewa Market (Existing PU)",
  "Okenla Tomoba Pry. Sch. (Existing PU)",
  "Local Government School Idale (Existing PU)",
  "St. Joseph Odonoko (Existing PU)",
  "St. Joseph School Odonoko (Existing PU)",
  "Oke-Ako (Existing PU)",
  "St. Anne’s School, Irawo (Existing PU)",
  "Tomoba Village (Existing PU)"
]
      
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
</script>
<script>
  document.getElementById("download-pdf-btn").addEventListener("click", () => {
    const username = prompt("Enter admin username:");
    const password = prompt("Enter admin password:");

    if (username === "admin" && password === "admin123") {
      const members = JSON.parse(localStorage.getItem("members") || "[]");

      const htmlContent = `
        <html>
        <head>
          <title>Member Data</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { text-align: center; color: #333; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; font-size: 14px; }
            th { background-color: #f0f0f0; }
          </style>
        </head>
        <body>
          <h1>Registered Members</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Ward</th>
                <th>Role</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              ${members.map(m => `
                <tr>
                  <td>${m.name}</td>
                  <td>${m.phone}</td>
                  <td>${m.ward}</td>
                  <td>${m.role}</td>
                  <td>${m.timestamp}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </body>
        </html>
      `;

      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "MemberData.html"; // You can change this to MemberData.pdf with PDF conversion
      a.click();

      URL.revokeObjectURL(url);
    } else {
      alert("❌ Incorrect login. Access denied.");
    }
  });
</script>
