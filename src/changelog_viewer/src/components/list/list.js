import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './list.css';

// Component to generate table
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Display the component 
    render() {
        const { data, gitName } = this.props;
        // Construct the table and add all rows data into the table (github)
        if (gitName === 'github'){
            return (
                <div className="root">
                    <Paper className="paper">
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Commit message</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.data.map(function (element, index) {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{element.commit.author.name}</TableCell>
                                            <TableCell>{element.commit.message}</TableCell>
                                            <TableCell>{element.commit.author.date}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            );
            // Construct the table and add all rows data into the table (gitlab by default)
        } else {
            return (
                <div className="root">
                    <Paper className="paper">
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Commit message</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(function (element, index) {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{element.author_name}</TableCell>
                                            <TableCell>{element.message}</TableCell>
                                            <TableCell>{element.created_at}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            );
        }
    }
}
export default List;