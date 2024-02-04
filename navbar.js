var opened = false;

function useNav() {
    if(!opened)
    {
        document.getElementById("mySidenav").style.width = "500px";
        document.getElementById("header").style.marginLeft = "500px";
        opened = true;
    }
    else
    {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("header").style.marginLeft = "0";
        opened = false;
    }
}