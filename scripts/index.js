function validateFields(e) {
  /* Impede que a págine dê reload após submit */
  e.preventDefault();
  /* Obtem todos os fields */
  const FirstName = document.getElementById("first-name");
  const LastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  /* Verificar a validação dos campos */
  IsFName(FirstName) ? setAccept(FirstName, 0) : setError(FirstName, 0);
  IsLName(LastName) ? setAccept(LastName, 1) : setError(LastName, 1);
  IsEmail(email) ? setAccept(email, 2) : setError(email, 2);
  IsPWord(password) ? setAccept(password, 3) : setError(password, 3);
}

/* Valida se o 1° nome tem tamanho maior que 0 */
function IsFName(Fname) {
  return Fname.value.length > 0 ? true : false;
}

/* Valida se o ultimo nome tem tamanho maior que 0 */
function IsLName(Lname) {
  return Lname.value.length > 0 ? true : false;
}

/* Valida o email */
function IsEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = re.test(String(email.value).toLowerCase());
  return result;
}

/* Valida a senha */
function IsPWord(password) {
  return password.value.length > 0 ? true : false;
}

const icons = document.getElementsByClassName("icon");
const contents = document.getElementsByClassName("content");
/* SetError */
function setError(item, index) {
  icons[index].style.display = "block";
  contents[index].style.display = "flex";
  item.style.border = "1px solid hsl(0, 100%, 74%)";
  if (index === 2) {
    item.placeholder = "example@email.com";
    item.classList.add("error-placeholder");
  }
}

function setAccept(item, index) {
  icons[index].style.display = "none";
  contents[index].style.display = "none";
  item.style.border = "1px solid hsl(154, 59%, 51%)";
}
