import { useState } from "react";

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return [form, onChange];
};

export default useForm;
