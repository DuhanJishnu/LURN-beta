import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypewriterPage from "./TypeWrite.jsx";
import SearchBar from "./SearchBar.jsx";
import Carousel from "./Carousel.jsx";

const Generate = styled.a`
    display: block;
    margin-top: 1rem;
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ReGenerate = styled.a`
    display: block;
    margin-top: 1rem;
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Welcome = () => {
    const navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [option, setOption] = React.useState("flashcard");
    const [loading, setLoading] = React.useState(false);
    const [regenerate, setRegenerate] = React.useState(false);

    React.useEffect(()=>{
        if(localStorage.getItem("token") === null){
            navigate("/auth");
        }
    },[])

    const submitHandler = async () => {
        setLoading(true);
        const res = await fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/ai/${option}`,
            {
                method: "POST",
                body: JSON.stringify({
                    data: search,
                }),
            },
        );
        const data = await res.json();
        setData(data);
        if (data.message === "Server Error") {
            setRegenerate(true);
            return;
        }
        navigate(`/${option}`, { state: {data: data}});

    }

    const regenerateHandler = () => {
        setRegenerate(false);
        submitHandler();
    }

    return (
        <div className="min-h-screen w-full  bg-[#212121] text-center ">
            <div className="p-2 sm:p-20">
                <TypewriterPage text={"Welcome to Learning Page"} />
                <SearchBar setSearch={setSearch} submitHandler={submitHandler} />
                {
                    (regenerate)?
                        <Generate onClick={regenerateHandler}>Regenerate</Generate>
                    :
                        <ReGenerate>{loading? "Generating........": ""}</ReGenerate>
                }
                <Carousel setOption={setOption}/>
            </div>
        </div>
    );
};

export default Welcome;
