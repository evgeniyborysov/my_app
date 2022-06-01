import React, { useState } from "react";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { Button } from "./components/Button";

function App() {
    type FilterType = "ALL" | "DOL" | "RUB";

    const [money, setMoney] = useState([
        { banknotes: "Dollars", value: 100, number: " a1234567890" },
        { banknotes: "Dollars", value: 50, number: " z1234567890" },
        { banknotes: "RUBLS", value: 100, number: " w1234567890" },
        { banknotes: "Dollars", value: 100, number: " e1234567890" },
        { banknotes: "Dollars", value: 50, number: " c1234567890" },
        { banknotes: "RUBLS", value: 100, number: " r1234567890" },
        { banknotes: "Dollars", value: 50, number: " x1234567890" },
        { banknotes: "RUBLS", value: 50, number: " v1234567890" },
    ]);

    const [filter, setFilter] = useState("ALL");

    let filteredMoney = money;

    switch (filter) {
        case "DOL":
            filteredMoney = filteredMoney.filter((item) => {
                return item.banknotes === "Dollars";
            });
            break;
        case "RUB":
            filteredMoney = filteredMoney.filter((item) => {
                return item.banknotes === "RUBLS";
            });
            break;

        default:
            filteredMoney = money;
            break;
    }

    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name);
    };

    let [count, setCount] = useState(1);

    const foo4 = () => {
        setCount(count + 1);
    };

    const foo5 = () => {
        setCount(0);
    };

    const onClickHandler = (name: string) => {
        console.log(`Hi, I am ${name}!`);
    };

    const foo1 = () => {
        console.log(100200);
    };

    const foo2 = (num: number) => {
        console.log(num);
    };

    const foo3 = () => {
        console.log("I am stupid Button");
    };

    return (
        <div className="App">
            <NewComponent
                money={filteredMoney}
                callBack={onClickFilterHandler}
            />
            <hr />
            <button onClick={() => onClickHandler("Oliver")}>
                MyYouTubeChanel-1
            </button>
            <button onClick={() => onClickHandler("Ben")}>
                MyYouTubeChanel-2
            </button>
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
            <hr />
            <Button name={"Click!"} callBack={() => onClickHandler("Siri")} />
            <Button name={"YO!"} callBack={foo1} />
            <Button name={"Stupid"} callBack={foo3} />
            <hr />
            <div>{count}</div>
            <Button name={"+1"} callBack={foo4} />
            <Button name={"0"} callBack={foo5} />
        </div>
    );
}

export default App;
