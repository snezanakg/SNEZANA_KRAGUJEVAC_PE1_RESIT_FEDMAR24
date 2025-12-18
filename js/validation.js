// Form validation utilities

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// URL validation
function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Show error message
function showError(inputElement, message) {
  const formGroup = inputElement.closest('.form-group');
  const errorElement = formGroup.querySelector('.form-error');
  
  inputElement.classList.add('error');
  
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  } else {
    const error = document.createElement('p');
    error.className = 'form-error';
    error.textContent = message;
    inputElement.after(error);
  }
}

// Clear error message
function clearError(inputElement) {
  const formGroup = inputElement.closest('.form-group');
  const errorElement = formGroup.querySelector('.form-error');
  
  inputElement.classList.remove('error');
  
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
}

// Clear all errors in form
function clearAllErrors(formElement) {
  const inputs = formElement.querySelectorAll('.form-input, .form-select, .form-textarea');
  inputs.forEach(input => clearError(input));
}

// Show alert message
function showAlert(message, type = 'success') {
  const alertContainer = document.getElementById('alert-container');
  if (!alertContainer) return;
  
  const alertHTML = `
    <div class="alert alert-${type}">
      <svg class="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        ${type === 'success' 
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
          : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
        }
      </svg>
      <p>${message}</p>
    </div>
  `;
  
  alertContainer.innerHTML = alertHTML;
}

// Hide alert message
function hideAlert() {
  const alertContainer = document.getElementById('alert-container');
  if (alertContainer) {
    alertContainer.innerHTML = '';
  }
}
