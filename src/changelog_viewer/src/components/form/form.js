import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '../list/list';

// Component to generate form
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataGit: "" };
        this.getCommitsMessage = this.getCommitsMessage.bind(this);
    }

    authenficatedCommit(url)
    {
      var token = document.getElementById('tokenOath').value
      if(url.indexOf("github") != -1)
      {
        axios.get(url,{ headers: { Authorization: `token `+token } })
        // success : set the state to store commits messages
        .then((data) => {
            this.setState({
                dataGit: data.data
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
      else {
        axios.get(url,{ headers: { PRIVATE-TOKEN: token } })
        .then((data) => {
            this.setState({
                dataGit: data.data
            });
        })
        // catch the error
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {

        });
      }

    }
    // Function to get all commits messages from a git
    getCommitsMessage() {
        // construct the url
        var url = document.getElementById('urlGit').value.replace('https://github.com/', 'https://api.github.com/repos/');
        url = url + "/commits";

        // Get request to get datas
        axios.get(url)
            // success : set the state to store commits messages
            .then((data) => {
                this.setState({
                    dataGit: data.data
                });
            })
            // catch the error
            .catch(function (error) {
              authenficatedCommit(url)
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
                    <TextField id="tokenOath" label="token Oath" variant="filled"/>
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
