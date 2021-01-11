//let hash = forge.md.md5.create();hash.update("test");
//document.write(hash.digest().toHex());
//const alertAdd = ()=>{document.write(hash2.digest().toHex());};



function encrypt(){
    const clearText = document.getElementById('clearTextForEncription').value;
    const key = document.getElementById('keyForEncription').value;

    if(clearText === "" || key === ""){
        document.getElementById('codeEncrypted').value = "brankError<3";
    }
    else{
        document.getElementById('codeEncrypted').value = "";

        let encrypted = CryptoJS.AES.encrypt(clearText,key);
        document.getElementById('codeEncrypted').value = encrypted;
    }

}

function decrypt(){
    const code = document.getElementById('codeForDecription').value;
    const key = document.getElementById('keyForDecription').value;

    if(code === "" || key === ""){
        document.getElementById('clearTextDecrypted').value = "brankError<3";
    }
    else{
        document.getElementById('clearTextDecrypted').value = "";

        let decrypted = CryptoJS.AES.decrypt(code,key);
        document.getElementById('clearTextDecrypted').value = decrypted.toString(CryptoJS.enc.Utf8);
    }

}

//後で共通化
function keyToCryptTools(){

}