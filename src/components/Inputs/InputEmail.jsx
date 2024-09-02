import React from "react";
import styled from "styled-components";

const InputEmail = ({ value, onChange }) => {
    return (
        <StyledWrapper>
            <div className="form-control">
                <input type="text" value={value} onChange={onChange} required />
                <label>
                    <span style={{ transitionDelay: "0ms" }}>E</span>
                    <span style={{ transitionDelay: "50ms" }}>m</span>
                    <span style={{ transitionDelay: "100ms" }}>a</span>
                    <span style={{ transitionDelay: "150ms" }}>i</span>
                    <span style={{ transitionDelay: "200ms" }}>l</span>
                </label>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .form-control {
        position: relative;
        margin: 20px 0 40px;
        width: 100%; /* Adjusted width */
    }

    .form-control input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #2d2d2d solid;
        display: block;
        width: 100%; /* Adjusted width */
        padding: 15px 0;
        font-size: 18px;
        color: #2d2d2d;
    }

    .form-control input:focus,
    .form-control input:valid {
        outline: 0;
        border-bottom-color: #4169e1;
    }

    .form-control label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
    }

    .form-control label span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        color: #2d2d2d;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .form-control input:focus + label span,
    .form-control input:valid + label span {
        color: #4169e1;
        transform: translateY(-30px);
    }
`;

export default InputEmail;
