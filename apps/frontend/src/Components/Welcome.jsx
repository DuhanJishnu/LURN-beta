import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypewriterPage from "./TypeWrite.jsx";
import SearchBar from "./SearchBar.jsx";
import Carousel from "./Carousel.jsx";

const LoadingText = styled.a`
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
        <div className="wrapper relative min-h-[100vh] h-fit min-w-[100vw] w-fit text-center ">
            <div className="p-2 sm:pt-20 pb-10" >
                <TypewriterPage text={"Welcome to Learning Page"} />
            </div>
            <div className="flex flex-col items-center">
            <SearchBar className="block" setSearch={setSearch} submitHandler={submitHandler} />
                {
                    (regenerate)?
                        <LoadingText onClick={regenerateHandler}>Regenerate</LoadingText>
                    :
                        <LoadingText>{loading? "Generating....": ""}</LoadingText>
                }                
            </div>
            <Carousel setOption={setOption}/>
        </div>
    );
};

export default Welcome;
