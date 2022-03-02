import React from "react";
import Table from 'react-bootstrap/Table'

function TournamentList() {
    return (
        <Table responsive className="tournamentTable">
            <thead>
                <tr>
                    <th className="col1">Tournament</th>
                    <th className="col2">Location</th>
                    <th className="col3">Time</th>
                    <th className="col4">Date</th>
                    <th className="col5">Description</th>
                    <th className="col6"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tournament1</td>
                    <td>UAFS</td>
                    <td>7:00 p.m.</td>
                    <td>November 10th, 2025</td>
                    <td>Description of tournament</td>
                    <td><button className="editBtn">Register</button></td>
                </tr>

                <tr>
                    <td>Tournament2</td>
                    <td>UAFS</td>
                    <td>7:00 p.m.</td>
                    <td>November 10th, 2025</td>
                    <td>Description of tournament</td>
                    <td><button className="editBtn">Register</button></td>
                </tr>

                <tr>
                    <td>Tournament3</td>
                    <td>UAFS</td>
                    <td>7:00 p.m.</td>
                    <td>November 10th, 2025</td>
                    <td>Description of tournament</td>
                    <td><button className="editBtn">Register</button></td>
                </tr>
            </tbody>
        </Table>
    )

};

export default TournamentList;