import React from "react";
import { useParams } from "react-router-dom";

function Detail ({ toDos }) {
    const id = useParams();
    console.log(id);
    return <h1>Detail</h1>;
}

function mapStateToProps(state, ownProps) {
    return { toDos: state }
}

export default Detail;