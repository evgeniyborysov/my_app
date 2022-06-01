import React from "react";
import { Button } from "./Button";

type FilterType = "ALL" | "DOL" | "RUB";

type BanknotesType = {
    banknotes: string;
    value: number;
    number: string;
};

type MoneyPropsType = {
    money: Array<BanknotesType>;
    callBack: (name: FilterType) => void;
};

export const NewComponent = (props: MoneyPropsType) => {
    // console.log(props.money[0])

    return (
        <div>
            <ul>
                {props.money.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknotes}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    );
                })}
            </ul>
            <Button name={"ALL"} callBack={() => props.callBack("ALL")} />
            <Button name={"DOL"} callBack={() => props.callBack("DOL")} />
            <Button name={"RUB"} callBack={() => props.callBack("RUB")} />
        </div>
    );
};
