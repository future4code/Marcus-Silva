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

    const sendData = (e) => {
        e.preventDefault();
    };

    const [form, onChange] = useForm(initialValue);

    return (
        <HeaderContainer onSubmit={sendData}>
            <Form>
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
