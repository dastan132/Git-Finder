class Github {
    constructor() {
        this.client_id = 'f3762356a9eac34fc033';
        this.client_secret = '72416be38f1a7fb6dd9624dac3ed68eeb7e289c8';
        this.respos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&short=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}