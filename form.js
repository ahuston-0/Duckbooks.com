var form = document.getElementById("form1");
form.onsubmit = function(e) {
    e.preventDefault();
    var firstname = form.firstname.value;
    var lastname = form.lastname.value;
    var bookname = form.Bookname.value;
    var edition = form.edition.value;
    var author = form.author.value;
    var postSubmit = document.getElementById("postSubmit");
    var info = document.createTextNode("Thank You, " +firstname + " " + lastname+ " for your request of: "+bookname+" in the "+edition+"edition by "+ author);
    if (firstname!="" && lastname != "" && bookname!= "" && edition!="" && author != ""){
        postSubmit.appendChild(info);
        var linebr = document.createElement("br");
        postSubmit.appendChild(linebr);
    } else {
        alert("Please fill form correctly!")
    }
    form.reset();
    if (postSubmit.childNodes.length > 2){
        postSubmit.removeChild(postSubmit.firstChild);
    }
};