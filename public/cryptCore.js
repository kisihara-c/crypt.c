var hash = forge.md.md5.create();hash.update("test");
document.write(hash.digest().toHex());