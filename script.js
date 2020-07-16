// TODO: add code here
window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container");
            
            
            
            
            
            container.innerHTML = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[0].firstName + " " + json[0].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[0].hoursInSpace}</li>
                                <li>Active: ${json[0].active}</li>
                                <li>Skills: ${json[0].skills.join(", ")}</li>
                            </ul>
                    </div>
                    <img class="avatar" src=${json[0].picture}>
                </div>
                `;

            for(let i=1; i<json.length; i++){

                container.innerHTML = container.innerHTML + `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(", ")}</li>
                            </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
                `;

            }
            

        });

    });

});