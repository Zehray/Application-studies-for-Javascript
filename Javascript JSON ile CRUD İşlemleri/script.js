function getUserList(){
    const table = document.getElementById("userTable");
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