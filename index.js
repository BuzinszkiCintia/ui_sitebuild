function createFields() {
  let fieldsContainer = document.createElement("div");
  fieldsContainer.id = "fields-container";
  let checkboxContainer = document.createElement("div");
  checkboxContainer.id = "checkbox-container";

  let name = document.createElement("input");
  name.id = "name";
  name.value = "Név";
  let password = document.createElement("input");
  password.id = "password";
  password.value = "Email cím";
  let accept = document.createElement("input");
  accept.type = "checkbox";
  accept.id = "checkbox";
  let button = document.createElement("button");
  button.id = "button";
  button.innerHTML = "ELKÜLD";

  let apply = document.createElement("label");
  apply.id = "apply";
  apply.innerText = "JELENTKEZÉS";
  let acceptLabel = document.createElement("label");
  acceptLabel.id = "accept-label";
  acceptLabel.innerText =
    "Elolvastam és elfogadom az Adatkezelési Tájékoztatót";

  checkboxContainer.append(accept, acceptLabel);
  fieldsContainer.append(apply, name, password, checkboxContainer, button);
  root.append(fieldsContainer);
}

function main() {
  createFields();
}

window.addEventListener("load", main);
