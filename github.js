class Github{
    constructor(){
        this.client_id = 'fcd5b7e40f04ce4c438d';
        this.client_secret = 'c15d8fcc3d23f24cea283d940e42d1f1a4d7ba80';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }


    async getUser(user){
        // 2 response chahiye honge , 1 for profile and 1 for repos , dono ke algg URL's ;/

        const profileResponse = 
        await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 

        const repoResponse = 
        await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
        &sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`); 

        const profile = await profileResponse.json(); 
        const repos = await repoResponse.json(); 

        return{
            profile,
            repos
        } 
    }
}