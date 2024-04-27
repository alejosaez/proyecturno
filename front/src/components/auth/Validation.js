const validation = (formData) => {
    const errors = {};
    const regexStringWithSpaces = /^[A-Za-z\s]+$/;
    const regexNumber =/^[0-9]+$/;

    if (
      !formData.name ||
      formData.name.length < 1 ||
      formData.name.length > 50 ||
      !regexStringWithSpaces.test(formData.name) 
    ) {
      errors.name =
        'El nombre debe tener entre 1 y 20 caracteres y solo puede contener letras y espacios.';
    }
    
    const birthdate = new Date(formData.birthdate);
    const maxDate = new Date('2006-01-01');
    const minDate = new Date('1900-01-01');
    if (!formData.birthdate || birthdate < minDate || birthdate > maxDate) {
      errors.birthdate = 'La fecha de nacimiento debe estar entre 1900 y 2006.';
    }
  
    
    if (!formData.dni || formData.dni.length < 6 || formData.dni.length > 14 || !regexNumber.test(formData.dni)) {
      errors.dni = 'El DNI debe tener entre 6 y 14 caracteres y solo puede contener números.';
    }
  
    if (!formData.email || !formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'El email no es válido.';
    }
  
    return errors;
  };
  
  export default validation;
  




