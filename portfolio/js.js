
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname)
    {
        for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");

        }
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
            
        }
        for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");
            
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemeu=document.getElementsById("sidemenu");
    function openmenu(){
        sidemeu.style.right="0px";
    }
    function closemenu(){
        sidemeu.style.right="-200px";
    }