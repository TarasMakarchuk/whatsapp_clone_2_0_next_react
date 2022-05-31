import React from 'react';
import {SpinnerCircularFixed} from "spinners-react";

function Loading() {
    return (
        <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <img
                src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"
                alt="loading"
                style={{ marginBottom: "10px" }}
                height={200}
            />
            <SpinnerCircularFixed color="#3CBC28" size={60} />
        </div>
    );
}

export default Loading;
