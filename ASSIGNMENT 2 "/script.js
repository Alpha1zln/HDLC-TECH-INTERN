// JavaScript code to change the background color of the entire page
function changeBackgroundColor() {
    const colorSelect = document.getElementById('colorSelect');
    
    // Get the selected color from the dropdown menu
    const selectedColor = colorSelect.value;
    
    // Set the background color of the entire page (the <body> element)
    document.body.style.backgroundColor = selectedColor;
}
