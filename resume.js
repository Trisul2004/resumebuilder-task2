function addNew(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("my-3");

    
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weButton");

    weOb.insertBefore(newNode,weAddButtonOb);

    
}



function addNewAq(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("my-3");

    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqButton");

    aqOb.insertBefore
    (newNode,aqAddButtonOb);

    
}

function generateCV(){
    
    let namefield=document.getElementById("namefield").value;
    letnameT1=document.getElementById("nameT1");
    nameT1.innerHTML=namefield;
    document.getElementById("nameT2").innerHTML=namefield;


    
    
    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedin").value;
    document.getElementById("githubT").innerHTML=document.getElementById("github").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;
    

    let wes=document.getElementsByClassName("wefield");
    let str="";
    for(let e of wes)
    {
        str=str+`<li> ${e.value}`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("aqfield");
    let str2=""
    for(let a of aqs)
    {
        str2=str2+`<li> ${a.value}`;
    }

    document.getElementById("aqT").innerHTML=str2;

    let file=document.getElementById("photofield").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById("photoT").src=reader.result;
    }




    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";


    

}


function printCV(){
    window.print();
}