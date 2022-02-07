import { useContext } from "react";
import { GlobalContext } from "../../context/global/GlobalContext";
import { SectionTable } from "./styled";

const TableData = () => {
    const { states, request } = useContext(GlobalContext);
    console.log(states);

    return (
        <SectionTable>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Participation</th>
            </tr>
        </SectionTable>
    );
};

export default TableData;
