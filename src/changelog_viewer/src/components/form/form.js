import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '../list/list';

// Component to generate form
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataGit: "", git: ""};
        this.getCommitsMessage = this.getCommitsMessage.bind(this);
    }

    // Function to get all commits messages from a git
    getCommitsMessage() {
        // construct the url
        var url = document.getElementById('urlGit').value;
        var gitName = "";
        if (url.includes("github.com")){
            url = url.replace('https://github.com/', 'https://api.github.com/repos/');
            url = url + "/commits";
            gitName = "github";
        } else if (url.includes("gitlab.com")){
            url = "https://gitlab.com/api/v4/projects/15874935/repository/commits";
            gitName = "gitlab";
        }

        // Get request to get datas
        axios.get(url)
            // success : set the state to store commits messages
            .then((data) => {
                console.log(data);
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
                //
            });
    }

    // Display the component 
    render() {
        return (
            <div>
                <div>
                    <TextField id="urlGit" label="URL Repository Git" variant="filled" />
                    <Button variant="outlined" type="submit" onClick={this.getCommitsMessage}>Submit</Button>
                </div>
                { this.state.dataGit ?
                    <List data={this.state.dataGit}/>
                    :
                    <div></div>
                }
            </div>
        );
    }
}
export default Form;