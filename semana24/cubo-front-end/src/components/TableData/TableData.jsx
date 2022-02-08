import { useContext } from "react";
import { GlobalContext } from "../../context/global/GlobalContext";
import { SectionTable, TH } from "./styled";

const TableData = () => {
    const { states } = useContext(GlobalContext);

    return (
        <SectionTable>
            <thead>
                <tr>
                    <th></th>
                    <TH>First Name</TH>
                    <TH>Last Name</TH>
                    <TH>Participation</TH>
                </tr>
            </thead>

            {states.users.map((user, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.participation}%</td>
                        </tr>
                    </tbody>
                );
            })}
        </SectionTable>
    );
};

export default TableData;
