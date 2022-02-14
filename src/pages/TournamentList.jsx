import React from "react";
import Table from 'react-bootstrap/Table'

function TournamentList() {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Tournament</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tournament1</td>
                    <td>UAFS</td>
                    <td>7:00 p.m.</td>
                    <td>November 10th, 2025</td>
                    <td>Description of tournament</td>
                </tr>

                <tr>
                    <td>Tournament2</td>
                    <td>UAFS</td>
                    <td>7:00 p.m.</td>
                    <td>November 10th, 2025</td>
                    <td>Description of tournament</td>
                </tr>

                <tr>
                    <td>Tournament3</td>
                    <td>UAFS</td>
                    <td>7:00 p.m.</td>
                    <td>November 10th, 2025</td>
                    <td>Description of tournament</td>
                </tr>
            </tbody>
        </Table>
    )

};

export default TournamentList;