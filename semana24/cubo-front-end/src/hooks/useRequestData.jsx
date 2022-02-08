import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (initialState, url, config = {}) => {
    const [data, setData] = useState(initialState);

    const request = () => {
        axios
            .get(url, config)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert("Ocorreu um erro.");
            });
    };

    useEffect(() => {
        request();
    }, []);

    return [data, request];
};
