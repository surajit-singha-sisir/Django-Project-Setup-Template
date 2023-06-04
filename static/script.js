// Get the file input element
const fileInput = document.getElementById('file-input');

// Get the file text element
const fileText = document.querySelector('.file-text');

// Listen for file selection changes
fileInput.addEventListener('change', function() {
  if (fileInput.files.length > 0) {
    // Display the selected file name
    fileText.textContent = fileInput.files[0].name;
  } else {
    // Reset the file text if no file is selected
    fileText.textContent = 'Choose File';
  }
});