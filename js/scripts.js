window.onload = function () {
  // ANIMATED MENU
  const nav = document.querySelector("nav");
  const hiden_menu = document.querySelector(".hiden_menu");
  const content = document.querySelector(".content");
  hiden_menu.onclick = function () {
    nav.classList.toggle("hide");
    content.classList.toggle("expand");
  };
  // SEARCH
  let input = document.getElementById("search");
  input.onchange = function () {
    let filter = input.value.toUpperCase();
    let table = document.getElementsByClassName("table_data")[0];
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByClassName("hoten")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  // DELETE ROW
  let del = document.getElementsByClassName("delete");
  for (let d of del) {
    d.onclick = function () {
      let row = d.closest("tr");
      if (row) {
        row.parentNode.removeChild(row);
      }
    };
  }
};
