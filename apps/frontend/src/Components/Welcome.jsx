// Welcome.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TypewriterPage from "./TypeWrite";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";

const SpinnerWrapper = styled.div`
    .loader {
        width: 50px;
        aspect-ratio: 1;
        display: grid;
    }
    .loader::before,
    .loader::after {
        content: "";
        grid-area: 1/1;
        --c: no-repeat radial-gradient(farthest-side, #25b09b 92    %, #0000);
        background:
            var(--c) 50% 0,
            var(--c) 50% 100%,
            var(--c) 100% 50%,
            var(--c) 0 50%;
        background-size: 12px 12px;
        animation: l12 1s infinite;
    }
    .loader::before {
        margin: 4px;
        filter: hue-rotate(45deg);
        background-size: 8px 8px;
        animation-timing-function: linear;
    }

    @keyframes l12 {
        100% {
            transform: rotate(0.5turn);
        }
    }
`;

const Welcome = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [option, setOption] = useState("flashcard");
    const [loading, setLoading] = useState(false);
    const [regenerate, setRegenerate] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/auth");
        }
    }, [navigate]);

    const submitHandler = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/ai/${option}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ data: search }),
                },
            );
            const result = await res.json();
            setData(result);
            setLoading(false);

            if (result.message === "Server Error") {
                setRegenerate(true);
            } else {
                navigate(`/${option}`, { state: { data: result } });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
            setRegenerate(true);
        }
    };

    const regenerateHandler = () => {
        setRegenerate(false);
        submitHandler();
    };

    return (
        <div className="wrapper z-0 overflow-hidden relative h-screen w-full text-center">
            <div className="p-2 sm:pt-20 pb-10">
                <TypewriterPage text={"Welcome to Learning Page"} />
            </div>
            <div className="flex flex-col items-center">
                <SearchBar
                    setSearch={setSearch}
                    submitHandler={submitHandler}
                />
                {loading ? (
                    <SpinnerWrapper className="pt-5">
                        <div className="loader"></div>
                    </SpinnerWrapper>
                ) : regenerate ? (
                    <button
                        className="mt-4 text-white cursor-pointer hover:underline"
                        onClick={regenerateHandler}
                    >
                        Regenerate
                    </button>
                ) : null}
            </div>
            <Carousel setOption={setOption} />
        </div>
    );
};

export default Welcome;
