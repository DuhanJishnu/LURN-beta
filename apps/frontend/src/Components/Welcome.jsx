import React from "react";
import { useNavigate } from "react-router-dom";
import TypewriterPage from "./TypeWrite.jsx";
import SearchBar from "./SearchBar.jsx";
import Carousel from "./Carousel.jsx";

const Welcome = () => {
    const navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [search, setSearch] = React.useState("");
    // const [option, setOption] = React.useState("");

    React.useEffect(()=>{
        if(localStorage.getItem("token") === null){
            navigate("/auth");
        }
    },[])

    const option = "flashcard";

    const submitHandler = async () => {
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
        navigate(`/${option}`, { state: {data: data}});

    }
    return (
        <div className="min-h-screen w-full  bg-[#212121] text-center ">
            <div className="p-20">
                <TypewriterPage text={"Welcome to Learning Page"} />
                <SearchBar setSearch={setSearch} submitHandler={submitHandler} />
                {/* <Carousel setOption={setOption}/> */}
            </div>
        </div>
    );
};

export default Welcome;
