
export const getPasswordStrength = (password) => {
    let strength = 0;
  
    
    const lengthCriteria = password.length >= 8;
    const upperCaseCriteria = /[A-Z]/.test(password);
    const lowerCaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    
    if (lengthCriteria) strength += 1;
    if (upperCaseCriteria) strength += 1;
    if (lowerCaseCriteria) strength += 1;
    if (numberCriteria) strength += 1;
    if (specialCharCriteria) strength += 1;
  
    
    if (strength <= 2) {
      return 'Good';
    } else if (strength === 3) {
      return 'Very Good';
    } else if (strength === 4) {
      return 'Strong';
    } else if (strength === 5) {
      return 'Excellent';
    }
  
    return 'Weak'; 
  };
  