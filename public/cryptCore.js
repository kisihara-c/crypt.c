//var hash = forge.md.md5.create();hash.update("test");
//document.write(hash.digest().toHex());
//const alertAdd = ()=>{document.write(hash2.digest().toHex());};



function encrypt(){
    const clearText = document.getElementById('clearTextForEncription').value;
    const key = document.getElementById('keyForEncription').value;

    if(clearText === "" || key === ""){
        document.getElementById('codeEncrypted').value = "nullError";
    }
    else{
        document.getElementById('codeEncrypted').value = "";

        var salt = forge.md.sha256.create();
        salt.update(key);

        var iv = forge.pkcs5.pbkdf2(key, salt, 32, 32);
        var seed = forge.pkcs5.pbkdf2(key, salt, 32, 32);

        var cipher = forge.cipher.createCipher('AES-CBC', seed);
        cipher.start({iv: iv});
        cipher.update(forge.util.createBuffer(16));
        cipher.finish();
        var encrypted = cipher.output;
        document.getElementById('codeEncrypted').value = encrypted.toHex();
    }

}

function decrypt(){

}