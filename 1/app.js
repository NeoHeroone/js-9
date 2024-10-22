let birthDate = prompt("Tug'ilgan kuningizni YYYY-MM-DD formatida kiriting:");
let userName = prompt("Ismingizni kiriting:");

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let ageYears = today.getFullYear() - birth.getFullYear();
  let ageMonths = today.getMonth() - birth.getMonth();
  let ageDays = today.getDate() - birth.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}

let age = calculateAge(birthDate);
alert("Siz " + 
  age.years + 
  " yil, " + 
  age.months + 
  " oy va " + 
  age.days + 
  " kun yashagansiz. Ismiz " + 
  userName + 
  ".");