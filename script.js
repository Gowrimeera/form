const form=document.getElementById('form');
const username=document.getElementById('username');
const show=document.getElementById('show');
const cshow=document.getElementById('cshow');
let success=true;

function myFunction(){
    if(show.type=='password'){
        show.type='text';
    }
    else{
        show.type='password';
    }
}

function press(){
    if(cshow.type=='password'){
        cshow.type='text';
    }
    else{
        cshow.type='password';
    }
}
form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
});
function validateInputs(){
    const usernameVal =username.value.trim();
    const showVal =show.value.trim();
    const cshowVal =cshow.value.trim();
    if(usernameVal==''){
        success=false;
        setError(username,'Username is required.')
    }
    else{
        setSuccess(username)
    }
    if(showVal==''){
        success=false;
        setError(show,'Password is required.')
    }
    else if(showVal.length<8){
        success=false;
        setError(show,'password must be atleast 8 characters long.')
    }
    else{
        setSuccess(show)
    }
    if(cshowVal==''){
        success=false;
        setError(cshow,'Confirm password is required.')
    }
    else if(cshowVal!==showVal){
        success=false;
        setError(cshow,'Password does not match.')
    }
    else{
        setSuccess(cshow)
    }
    return success; 
}
function setError(element,message){
    const input_sec = element.parentElement;
    const errorElement =input_sec.querySelector('.error_msg');

    errorElement.innerText= message;
    input_sec.classList.add('error');
    input_sec.classList.remove('success');
}
function setSuccess(element){
    const input_sec = element.parentElement;
    const errorElement =input_sec.querySelector('.error_msg');

    errorElement.innerText='';
    input_sec.classList.add('success');
    input_sec.classList.remove('error');
}