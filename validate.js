  
export const checkValidate = (email, password) => {  
    const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);  
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);  

    if (!isEmailValid)   
        return <span style={{ color: 'red' }}>Email ID is not valid</span>;  
    
    if (!isPasswordValid)   
        return <span style={{ color: 'red' }}>Password is not valid</span>;  

    return null;  
};  