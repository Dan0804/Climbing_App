function search() {
    var value, name, item, i;

    value = document.getElementById("value").value.toLowerCase();
    
    for (i=0;i<item.length;i++) {
        name = item[i].getElementByClassName("name");
        if (name[0].innerHTML.toLowerCase().indexOf(value) > -1){
            item[i].style.display = "flex";
        }
        else {
            item[i].style.display = "none";
        }
    }
}