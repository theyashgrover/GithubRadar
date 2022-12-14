class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
        <div class = "row">
            <div class="col-md-3">
                <img class = "img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary text-secondary">Public Repos : ${user.public_repos}</span>
                <span class="badge badge-secondary text-secondary">Public Gists : ${user.public_gists}</span>
                <span class="badge badge-success text-secondary">Followers : ${user.followers}</span>
                <span class="badge badge-info text-secondary">Following : ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class = "list-group-item">Bio : ${user.bio}</li>
                    <li class = "list-group-item">Unique Id No. : ${user.id}</li>
                    <li class = "list-group-item">Twitter Username : ${user.twitter_username}</li>
                    <li class = "list-group-item">Member Since : ${user.created_at}</li>
                </ul>
            </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    //Show user repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
                <div class = "card card-body mb-2">
                    <div class="row">
                        <div class = "col md-6"> 
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class = "col md-6"> 
                        <span class="badge badge-secondary text-secondary">Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-success text-secondary">Watchers : ${repo.watchers_count}</span>
                        <span class="badge badge-info text-secondary">Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        //output repos 
        document.getElementById('repos').innerHTML = output;
    
    }

    //show alert message
    showAlert(message , className){
        //Clear Any remaining alerts
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //Add classes  
        div.className = className;

        //Add text 
        div.appendChild(document.createTextNode(message));
        //Get Parent
        const container = document.querySelector('searchContainer');

        //Get Search box
        const search = document.querySelector('.search');
        //Insert alert 
        container.insertBefore(div , search);

        //Timeout after 3 seconds
        setTimeout(()=>{
            this.clearAlert();
        },3000);


    }

    //Clear Alert Message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clear profile 
    clearProfile(){
        this.profile.innerHTML = ``;
    }

}