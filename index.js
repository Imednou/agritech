window.onscroll = () => {
        if (window.scrollY > 80) {
            document.querySelector(".header .header-2").classList.add("active");
        } else {
            document.querySelector(".header .header-2").classList.remove("active");
        }
    };
    document.addEventListener('DOMContentLoaded', () => {
        let loginForm = document.querySelector('.login-form-container');
        let loginBtn = document.querySelector('#login-btn');
        let closeBtn = document.querySelector('#close-login-btn');
    
        loginBtn.onclick = () => {
            loginForm.classList.toggle('active');
        };
    
        closeBtn.onclick = () => {
            loginForm.classList.remove('active');
        };
    });
    document.addEventListener('DOMContentLoaded', () => {
        let productForm = document.querySelector('.product-form');
        let productBtn = document.querySelector('#product-btn');
        let closeProductBtn = document.querySelector('#close-product-btn');
    
        productBtn.onclick = () => {
            productForm.classList.toggle('active');
        };
    
        closeProductBtn.onclick = () => {
            productForm.classList.remove('active');
        };
    });
    document.addEventListener('DOMContentLoaded', () => {
        let productForm1 = document.querySelector('.product-form-1');
        let productBtn1 = document.querySelector('#product-btn-1');
        let closeProductBtn1 = document.querySelector('#close-product-btn-1');
    
        productBtn1.onclick = () => {
            productForm1.classList.toggle('active');
        };
    
        closeProductBtn1.onclick = () => {
            productForm1.classList.remove('active');
        };
    });
   
    
    
    function validation_login() { 
        var email = document.getElementById("email").value;  
        var password = document.getElementById("password").value; 
        if (email === "" && password === "") { 
            showAlert("Veuillez saisir votre adresse e-mail et votre mot de passe."); 
            return false;  
        } else if (email === "") { 
            showAlert("Veuillez saisir votre adresse e-mail."); 
            return false; 
        } else if (password === "") { 
            showAlert("Veuillez saisir votre mot de passe."); 
            return false; 
        } 
        return true;  
    } 
    function showAlert(message) { 
        var alertDiv = document.createElement("div"); 
        alertDiv.style.backgroundColor = "#ffe4e1";  
        alertDiv.style.color = "red";  
        alertDiv.style.border = "2px solid red";  
        alertDiv.style.padding = "10px";  
        alertDiv.style.marginBottom = "10px";  
        alertDiv.textContent = message; 
        document.querySelector(".login-form-container").appendChild(alertDiv); 
        setTimeout(function() { 
            alertDiv.parentNode.removeChild(alertDiv);  
        }, 3000); 
    }
    
    
    