const toggleDropDown = () => {
    var dropDownMenu = document.getElementById("DropDownMenu")
    if (dropDownMenu.style.display === "inline"){
        dropDownMenu.style.display = "none"
    } else {
        dropDownMenu.style.display = "inline"
    }
}