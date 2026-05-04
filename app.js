async function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({user, pass})
  });

  const data = await res.json();

  if(data.success){
    window.location = "dashboard.html";
  } else {
    alert("خطأ");
  }
}

async function loadData(){
  const res = await fetch("http://localhost:3000/data");
  const data = await res.json();

  document.getElementById("data").innerText = JSON.stringify(data);
}

if(document.getElementById("data")){
  loadData();
}
