function clearInput() {
  document.getElementById("name").value = ""
  document.getElementById("last-name").value = ""
  document.getElementById("tel").value = ""
  document.getElementById("lineId").value = ""
}

function regis() {
  var name = document.getElementById("name").value
  var lastName = document.getElementById("last-name").value
  var tel = document.getElementById("tel").value
  var lineId = document.getElementById("lineId").value
  console.log(name, lastName, tel, lineId)
  clearInput()
}
