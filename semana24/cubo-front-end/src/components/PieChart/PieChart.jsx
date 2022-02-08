import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { GlobalContext } from "../../context/global/GlobalContext";
import { ChartContainer, ItemsLegend, Legend } from "../TableData/styled";

const colors = [
    "#dedee0",
    "#485696",
    "#fbdce2",
    "#0acdff",
    "#60ab9a",
    "#ff9fb2",
    "#5aa9e6",
    "#736ced",
];

export const options = {
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    colors,
};

const PieChart = () => {
    const { states } = useContext(GlobalContext);

    const usersPercent = states.users.map((user) => {
        return (
            [`${user.firstName}`, user.participation],
            [`${user.lastName}`, user.participation],
            [`${user.participation}`, user.participation]
        );
    });

    const total = states.users.reduce((total, user) => {
        return total + user.participation;
    }, 0);

    return (
        <ChartContainer>
            <Chart
                chartType="PieChart"
                width="100%"
                height="100%"
                data={[
                    ["Name", "Participation"],
                    ...usersPercent,
                    ["Ownerless", 100 - total],
                ]}
                options={options}
            />

            <Legend>
                {states.users.map((user, index) => {
                    const indexColor = index % colors.length;

                    return (
                        <ItemsLegend key={index} color={colors[indexColor]}>
                            <div></div>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                        </ItemsLegend>
                    );
                })}

                <ItemsLegend
                    color={colors[states.users.length % colors.length]}
                >
                    <div></div>
                    <p>Ownerless</p>
                </ItemsLegend>
            </Legend>
        </ChartContainer>
    );
};

export default PieChart;
