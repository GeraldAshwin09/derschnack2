function login()
{
    name1=document.getElementById("userid").value;
    localStorage.setItem("name",name1);
    window.location="chat.html";
}

function info()
{
    window.location="word.html";
}

function back()
{
    window.location="index.html";
}
