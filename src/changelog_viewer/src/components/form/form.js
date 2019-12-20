import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '../list/list';


// Component to generate form
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataGit: "", git: "" };
        this.getCommitsMessage = this.getCommitsMessage.bind(this);
    }

    // Function to get all commits messages from a git
    getCommitsMessage() {
        // construct the url
        var url = document.getElementById('urlGit').value.replace('https://github.com/', 'https://api.github.com/repos/');
        url = url + "/commits";
        if(url == "/commits")
        {
          url="https://api.github.com/repos/silverspy/changelog_viewer/commits";
        }
        // Get request to get datas
        axios.get(url)
            // success : set the state to store commits messages
            .then((data) => {
                this.setState({
                    dataGit: data.data
                });
                return data.data;

    // Method to get datas from gitlab about a project
    getIdRepositoryGitLab(urlGetId) {
        var gitId = "";
        var gitName = "gitlab";
        var url = "";
        axios.get(urlGetId)
            // success : recup the id and make the url for gitlab
            .then((data) => {
                gitId = data.data.id;
                url = "https://gitlab.com/api/v4/projects/" + gitId + "/repository/commits";
                return axios.get(url)
                    // success : set the state to store commits messages
                    .then((data) => {
                        this.setState({
                            dataGit: data.data,
                            git: gitName
                        });
                    })
                    // catch the error
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });

            })
            // catch the error
            .catch(function (error) {
                console.log(error);
                return false;
            })
            .finally(function () {
            });

    }

    // Function to get all commits messages from a git
    getCommitsMessage() {
        // construct the url
        var url = document.getElementById('urlGit').value;
        var urlArguments = "";
        var gitName = "";
        // Case 1 : github project
        if (url.includes("github.com")) {
            url = url.replace('https://github.com/', 'https://api.github.com/repos/');
            url = url + "/commits";
            gitName = "github";
            // Get request to get datas of the project
            axios.get(url)
                // success : set the state to store commits messages
                .then((data) => {
                    this.setState({
                        dataGit: data,
                        git: gitName
                    });
                })
                // catch the error
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });

            // Case 2 : gitlab project
        } else if (url.includes("gitlab.com")) {
            urlArguments = url.replace('https://gitlab.com/', '');
            urlArguments = urlArguments.split('/');
            var urlGetId = "https://gitlab.com/api/v4/projects/" + urlArguments[0] + "%2F" + urlArguments[1];
            this.getIdRepositoryGitLab(urlGetId);
        }
    }

    // Display the component
    render() {
        return (
            <div>
                <div>
                    <TextField id="urlGit" label="URL Repository Git" variant="filled" />
                    <Button variant="outlined" type="submit" onClick={this.getCommitsMessage}>Submit</Button>
                </div>
                {this.state.dataGit ?
                    <List data={this.state.dataGit} gitName={this.state.git} />
                    :
                    <div></div>
                }
            </div>
        );
    }
}
export default Form;
