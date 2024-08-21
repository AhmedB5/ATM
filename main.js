window.addEventListener("load", function () {
  alert(
    "Pin codes are valid for experimental use <<<<||2244||3366||4488||5599||>>>>"
  );
});
let input = document.querySelector(".input");
let buttons = document.querySelectorAll("button");
let enter = document.querySelector(".enter");
let del = document.querySelector(".del");
let bord = document.querySelector(".bord");
let operations = document.createElement("div");
let myStockValue = document.createElement("div");
myStockValue.id = "sValue";
let depPage2 = document.createElement("div");
let myStockValue2 = document.createElement("div");
myStockValue2.id = "sValue2";
let input2 = document.createElement("input");
input2.placeholder = "Enter an amount";
let deposit = document.createElement("div");
deposit.id = "deposit";
deposit.innerHTML = "Deposit";
let withdraw = document.createElement("div");
withdraw.id = "withdraw";
withdraw.innerHTML = "Withdraw";
let inquiry = document.createElement("div");
inquiry.id = "inquiry";
inquiry.innerHTML = "Inquiry";
let back = document.createElement("div");
back.id = "back";
back.innerHTML = "EXit";
let completion = document.createElement("div");

let audio = document.createElement("audio");
audio.src = "audio/crr.wav";
let audio2 = document.createElement("audio");
audio2.src = "audio/click.wav";
completion.id = "completion";
completion.innerHTML = "Completion";
operations.className = "operations";
operations.appendChild(myStockValue);
operations.appendChild(deposit);
operations.appendChild(withdraw);
operations.appendChild(inquiry);
operations.appendChild(back);
operations.appendChild(audio2);

let inqDate = document.createElement("div");

buttons.forEach((element) => {
  element.addEventListener("click", function () {
    input.value += element.value;
    audio2.play();
  });
});

let myPinValue;
function show() {
  myPinValue = input.value;
}

enter.addEventListener("click", function () {
  show();
  check();
  input.value = "";
  if (!operations.contains(back)) {
    operations.appendChild(back);
    back.style.marginTop = "4px";
    back.style.height = "37px";
    back.style.borderRadius = "10px";
  }
});
back.addEventListener("click", function () {
  location.reload();
});

del.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

let Mahmoud = {
  firstName: "Mahmoud",
  lastName: "Ahmed",
  pin: 2244,
  stock: 0,
  city: "Alexandria",
};
let Mohamed = {
  firstName: "Mohamed",
  lastName: "Saeed",
  pin: 3366,
  stock: 0,
  city: "Giza",
};
let Youssef = {
  firstName: "Youssef",
  lastName: "Hassan",
  pin: 4488,
  stock: 0,
  city: "Mansoura",
};
let Mostafa = {
  firstName: "Mostafa",
  lastName: "Hossam",
  pin: 5599,
  stock: 0,
  city: "Aswan",
};
let Amr = {
  firstName: "Amr",
  lastName: "Tamer",
  pin: 6611,
  stock: 0,
  city: "Suez",
};
let Omar = {
  firstName: "Omar",
  lastName: "Galal",
  pin: 7722,
  stock: 0,
  city: "Port Said",
};
let Karim = {
  firstName: "Karim",
  lastName: "Adel",
  pin: 8833,
  stock: 0,
  city: "Zagazig",
};

let DB = [Mahmoud, Mohamed, Youssef, Mostafa, Amr, Omar, Karim];

function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users")) || DB;
}
function updateLocalStorage() {
  saveUsersToLocalStorage(DB);
}

function updateDisplay(i) {
  myStockValue.innerHTML = "Current Balance: " + DB[i].stock || 0;
  myStockValue2.innerHTML = "Current Balance: " + DB[i].stock || 0;
}

DB = loadUsersFromLocalStorage();

let bool;
function check() {
  for (let i = 0; i < DB.length; i++) {
    if (DB[i].pin == myPinValue) {
      console.log(true);
      console.log(DB[i].firstName);
      bord.innerHTML = " ";
      bord.appendChild(operations);
      updateDisplay(i);

      deposit.addEventListener("click", function () {
        console.log("deposit");
        deposit.style.backgroundColor = "rgb(22, 8, 101)";
        bord.innerHTML = " ";
        bord.appendChild(depPage2);
        input2.focus();
        bool = true;

        if (!depPage2.contains(back)) {
          depPage2.appendChild(back);
          back.style.marginTop = "15px";
          back.style.height = "40px";
          back.style.borderRadius = "5px";
        }
      });

      withdraw.addEventListener("click", function () {
        input2.placeholder = "Enter an amount";
        console.log("withdraw");
        withdraw.style.backgroundColor = "rgb(22, 8, 101)";
        bord.innerHTML = "";
        bord.appendChild(depPage2);
        input2.focus();
        bool = false;

        if (!depPage2.contains(back)) {
          depPage2.appendChild(back);
          back.style.marginTop = "15px";
          back.style.height = "40px";
          back.style.borderRadius = "5px";
        }
      });

      inquiry.addEventListener("click", function () {
        inquiry.style.backgroundColor = "rgb(22, 8, 101)";
        updateDisplay(i);
        bord.innerHTML = " ";
        bord.appendChild(inqDate);
        inqDate.appendChild(myStockValue2);
        myStockValue2.style.marginTop = "40px";
        if (!inqDate.contains(back)) {
          inqDate.appendChild(back);
          back.style.marginTop = "15px";
          back.style.height = "40px";
          back.style.borderRadius = "5px";
        }
      });
      completion.addEventListener("click", function () {
        let depositValue = parseInt(input2.value);
        if (bool) {
          DB[i].stock += depositValue;
          myStockValue2.innerHTML = "Current Balance: " + DB[i].stock;
          audio.play();
          input2.innerHTML = "";
          input2.value = "";
        } else {
          if (DB[i].stock >= depositValue) {
            DB[i].stock -= depositValue;
            myStockValue2.innerHTML = "Current Balance: " + DB[i].stock;
            input2.innerHTML = "";
            input2.value = " ";
            audio.play();
            updateLocalStorage();
            updateDisplay(i);
            input2.placeholder = "Enter an amount";
          } else {
            alert("Your balance is insufficient");
            input2.placeholder = "Enter an amount";
            updateLocalStorage();
            updateDisplay(i);
          }
        }
        updateLocalStorage();
        updateDisplay(i);
      });
      break;
    }
  }
  depPage2.appendChild(myStockValue2);
  depPage2.appendChild(input2);
  depPage2.appendChild(completion);
  depPage2.appendChild(back);
  depPage2.appendChild(audio);
}
input2.id = "opFilld";
