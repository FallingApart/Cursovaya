import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"primary"}
                className="mt-4 pt-3 pb-3"
                style={{width: 120}}
                onClick={() => setTypeVisible(true)}
            >
                Добавить жанр
            </Button>
            <Button
                variant={"primary"}
                className="mt-4 pt-3 pb-3"
                style={{width: 120}}
                onClick={() => setBrandVisible(true)}
            >
                Добавить автора
            </Button>
            <Button
                variant={"primary"}
                className="mt-4 pt-3 pb-3"
                style={{width: 120}}
                onClick={() => setDeviceVisible(true)}
            >
                Добавить книгу
            </Button>
            <Button
                variant={"danger"}
                className="mt-4 pt-3 pb-3"
                style={{width: 120}}
                onClick={() => setDeviceVisible(false)}
            >
                Удалить книгу
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
