import { useState } from "react";

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setForm(initialValue);
    };

    return [form, onChange, resetForm];
};

export default useForm;
