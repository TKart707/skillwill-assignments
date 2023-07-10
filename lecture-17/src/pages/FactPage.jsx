import React from 'react'
import { factData } from "../factData.js";
import { useParams } from 'react-router-dom';

const FactPage = () => {
    const { factId } = useParams();
    const filterFact = factData.find((fact) => fact.id == factId)
    if (!filterFact) return <h1>Fact not found</h1>
    return (
        <div>
            <h1>Facts about Nikola Tesla </h1>
            <div>
                <h2>Fact {" "} {filterFact.id}</h2>
                <h3>{filterFact.title}</h3>
                <p>{filterFact.text}</p>
            </div>

        </div>
    )
}

export default FactPage