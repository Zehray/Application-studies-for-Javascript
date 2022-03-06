const table = document.getElementById("userTable");

function getUserList(){

    fetch("https://reqres.in/api/users")
    .then(response=>response.json())
    .then(data=>{
        //console.log(data);
        for(user of data.data){
            console.log(user);
            table.innerHTML += `<tr>
            <td>
            <input type="text" class="form-control" id="" value="${user.first_name}" />
            </td>
            <td>
            <input type="text" class="form-control" id="" value="${user.last_name}" />
            </td>
            <td>
            <input type="text" class="form-control" id="" value="${user.email}" />
            </td>
            <td>
              <button class="btn btn-warning" onclick="updateUser(${user.id})">Güncelle</button>
              <button class="btn btn-danger" onclick="deleteUser(${user.id})">Sil</button>
            </td>
          </tr>`
        }
    })
}

getUserList();

//Tabloyu Yenile

function refreshData(){
    getUserList();
}

//Kullanıcı oluştur

function createUser(){
    let data = {
        first_name:document.getElementById("first_name").value || "Değer girilmedi",
        last_name:document.getElementById("last_name").value || "Değer girilmedi",
        email:document.getElementById("email").value || "Değer girilmedi",
    };
    fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{
           'Content-Type':'application/json'
},
         body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            table.innerHTML+= `
            <tr>
            <td>
            <input type="text" class="form-control" id="" value="${data.first_name}" />
            </td>
            <td>
            <input type="text" class="form-control" id="" value="${data.last_name}" />
            </td>
            <td>
            <input type="text" class="form-control" id="" value="${data.email}" />
            </td>
            <td>
              <button class="btn btn-warning" onclick="updateUser(${data.id})">Güncelle</button>
              <button class="btn btn-danger" onclick="deleteUser(${data.id})">Sil</button>
            </td>
          </tr>`
        })
}