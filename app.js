//creating an instance of github class 
const github = new Github;
//creating an instance of ui class
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input Event listener --> listens to every keyup in the searchUser Box
searchUser.addEventListener('keyup', (e)=>{
    //Get Input text
    const userText = e.target.value; 
    if(userText !== ''){
        // console.log(userText);
        
        //Making http call 
        github.getUser(userText) //calling the getUser function from github.js
        .then(data=>{ 
            // console.log(data);
            if(data.profile.message == "Not Found"){
                //Showing Custom Alert Box
                ui.showAlert('User not found','alert alert-danger');
            }else{
                //Showing the Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //Clear Profile 
        ui.clearProfile();
    }
});