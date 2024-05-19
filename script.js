function myFun(){
    let nm = document.getElementById("name");
    let yr = document.getElementById("year");
    let url = document.getElementById("url");

    if(nm.value.length!=0 && yr.value.length!=0)
        url.textContent = `https://localhost:8080/?name=${nm.value}&year=${yr.value}`;
    else if(nm.value.length!=0)
        url.textContent = `https://localhost:8080/?name=${nm.value}`;
    else if(yr.value.length!=0)
        url.textContent = `https://localhost:8080/?year=${yr.value}`;

    // console.log(typeof nm.value,typeof yr.value);
}