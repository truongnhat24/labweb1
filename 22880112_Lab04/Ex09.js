function checkAll(checked) {
    var checkboxes = document.getElementsByTagName("input");
    console.log(checkboxes);
    for (i = 0; i< checkboxes.length; i++) {
        checkboxes[i].checked = checked;
    }
}