let txtheadName = document.getElementsByName('txtHeadName');
let chkMale = document.getElementsByName('chkMale');
let txtMale = document.getElementsByName('txtMale');
let chkFemale = document.getElementsByName('chkFemale');
let txtFemale = document.getElementsByName('txtFemale');
let chkChild = document.getElementsByName('chkChild');
let txtChild = document.getElementsByName('txtChild');
let rdoCountry = document.getElementsByName('rdoCountry');
let selSale = document.getElementsByName('selSale');
let showHeadName = document.getElementById('showHeadName');
let showMale = document.getElementById('showMale');
let showFemale = document.getElementById('showFemale');
let showChild = document.getElementById('showChild');
let showCountry = document.getElementById('showCountry');
let showSale = document.getElementById('showSale');
let showPay = document.getElementById('showPay');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');

let CalAndShoeTour = () =>{
    let payMale = 0; let payFemale = 0; let payChild = 0;


    if(txtheadName[0].value.trim().length == 0){
        alert('ป้อนชื่อด้วย');
    }else{
        showHeadName.innerHTML = txtheadName[0].value;
    }

    if(chkMale[0].checked){
        if(txtMale[0].value.trim().length == 0){
            alert('ป้อนจำนวนผู้ชายด้วย');
        }else{
            showMale.innerHTML = txtMale[0].value;
            payMale = Number(txtMale[0].value) * 500 ; 

        }
    }else{
        showMale.innerHTML = 0;
        payMale = 0;
    }

    if(chkFemale[0].checked){
        if(txtFemale[0].value.trim().length == 0){
            alert('ป้อนจำนวนผู้หญิงด้วย');
        }else{
            showFemale.innerHTML = txtFemale[0].value;
            payFemale = Number(txtFemale[0].value) * 550 ; 
        }
    }else{
        showFemale.innerHTML = 0;
        payFemale = 0;
    }

    if(chkChild[0].checked){
        if(txtChild[0].value.trim().length == 0){
            alert('ป้อนจำนวนเด็กด้วย');
        }else{
            showChild.innerHTML = txtChild[0].value;
            payChild = Number(txtChild[0].value) * 200 ; 
        }
    }else{
        showChild.innerHTML = 0;
        payChild = 0;
    }

    if(rdoCountry[0].checked){
        showCountry.innerHTML = 'ญี่ปุ่น'
    }else if(rdoCountry[1].checked){
        showCountry.innerHTML = 'เกาหลี'
    }else if(rdoCountry[2].checked){
        showCountry.innerHTML = 'จีน'
    }else{
        showCountry.innerHTML = 'ฮ่องกง'
    }

    showSale.innerHTML = (payMale + payFemale + payChild) * selSale[0].value;
    showPay.innerHTML = (payMale + payFemale + payChild) - ((payMale + payFemale + payChild) * selSale[0].value)
}

let disEnMale = () =>{
    if(chkMale[0].checked){
        txtMale[0].disabled = false;
    }else{
        txtMale[0].disabled = true;
        txtMale[0].value ='';
    }
}

let disEnFemale = () =>{
    if(chkFemale[0].checked){
        txtFemale[0].disabled = false;
    }else{
        txtFemale[0].disabled = true;
        txtFemale[0].value ='';
    }
}

let disEnChild = () =>{
    if(chkChild[0].checked){
        txtChild[0].disabled = false;
    }else{
        txtChild[0].disabled = true;
        txtChild[0].value ='';
    }
}

let Cancel = () =>{
    txtheadName[0].value = '';

    chkMale[0].checked = 'false'
    txtMale[0].disabled = 'true'
    txtMale[0].value = ''
    chkMale[0].checked = ''

    chkFemale[0].checked = 'false'
    txtFemale[0].disabled = 'true'
    txtFemale[0].value = ''
    chkFemale[0].checked = ''

    chkChild[0].checked = 'false'
    txtChild[0].disabled = 'true'
    txtChild[0].value = ''
    chkChild[0].checked = ''

    rdoCountry[0].checked = 'true'
    selSale[0].selectedIndex = 0

    showHeadName.innerHTML = 'XXXXXX'
    showMale.innerHTML = 'XXXXXX'
    showFemale.innerHTML = 'XXXXXX'
    showChild.innerHTML = 'XXXXXX'
    showCountry.innerHTML = 'XXXXXX'
    showSale.innerHTML = 'XXXXXX'
    showPay.innerHTML = 'XXXXXX'
}

btnCal.addEventListener('click',CalAndShoeTour);
chkMale[0].addEventListener('click',disEnMale);
chkFemale[0].addEventListener('click',disEnFemale);
chkChild[0].addEventListener('click',disEnChild);
btnCancel.addEventListener('click',Cancel);