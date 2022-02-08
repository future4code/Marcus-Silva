import axios from "axios";
import useForm from "../../hooks/useForm";
import {
    Button,
    ButtonContainer,
    Form,
    HeaderContainer,
    Input,
} from "./styled";

const Header = () => {
    const initialValue = {
        firstName: "",
        lastName: "",
        participation: "",
    };

    const [form, onChange, resetForm] = useForm(initialValue);

    const sendData = (e) => {
        e.preventDefault();
        const { firstName, lastName, participation } = form;

        const body = {
            firstName,
            lastName,
            participation: Number(participation),
        };

        axios
            .post("https://cubo-back-end.herokuapp.com/user/create", body)
            .then((res) => {
                resetForm();
                alert(res.data.message);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <HeaderContainer>
            <Form onSubmit={sendData}>
                <Input
                    name="firstName"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={onChange}
                />
                <Input
                    name="lastName"
                    placeholder="Last name"
                    value={form.lasttName}
                    onChange={onChange}
                />
                <Input
                    name="participation"
                    placeholder="Participation"
                    value={form.participation}
                    onChange={onChange}
                />

                <ButtonContainer>
                    <Button type="submit">Send</Button>
                </ButtonContainer>
            </Form>
        </HeaderContainer>
    );
};

export default Header;
