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

  // EDIT
  let editButtons = document.getElementsByClassName("edit");
  for (let ed of editButtons) {
    ed.onclick = function () {
      let row = ed.closest("tr");
      let cells = row.querySelectorAll("td:not(:last-child)");
      let index = 0;

      for (let cell of cells) {
        let currentText = cell.textContent;
        if (index === 5) {
          cell.innerHTML = `
          <select>
            <option value="Nam" ${
              currentText === "Nam" ? "selected" : ""
            }>Nam</option>
            <option value="Nữ" ${
              currentText === "Nữ" ? "selected" : ""
            }>Nữ</option>
          </select>
        `;
        } else {
          cell.innerHTML = `<input type="text" value="${currentText}">`;
        }
        index++;
      }
      row.querySelector(".edit").style.display = "none";
      row.querySelector(".delete").style.display = "none";
      row.querySelector(".save").style.display = "inline";
      row.querySelector(".cancel").style.display = "inline";
    };
  }

  // SAVE
  let saveButtons = document.getElementsByClassName("save");
  for(let sav of saveButtons ){
    sav.onclick = function(){
      let row = sav.closest("tr")
      let cells = row.querySelectorAll("td:not(:last-child)");
      let index = 0;
      for (let cell of cells) {
        let currentText = cell.textContent;
        let input = cell.querySelector('input, select');
        if (input) {
            cell.textContent = input.value;
        }
        index++;
      }
      row.querySelector(".edit").style.display = "inline";
      row.querySelector(".delete").style.display = "inline";
      row.querySelector(".save").style.display = "none";
      row.querySelector(".cancel").style.display = "none";
    }
  }
};
