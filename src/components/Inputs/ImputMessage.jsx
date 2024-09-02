import React from "react";
import styled from "styled-components";

const InputMessage = ({ value, onChange }) => {
    return (
        <StyledWrapper>
            <div className="form-control">
                <textarea
                    value={value}
                    onChange={onChange}
                    required
                />
                <label>
                    <span style={{ transitionDelay: "0ms" }}>M</span>
                    <span style={{ transitionDelay: "50ms" }}>e</span>
                    <span style={{ transitionDelay: "100ms" }}>s</span>
                    <span style={{ transitionDelay: "150ms" }}>s</span>
                    <span style={{ transitionDelay: "200ms" }}>a</span>
                    <span style={{ transitionDelay: "250ms" }}>g</span>
                    <span style={{ transitionDelay: "300ms" }}>e</span>
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

    .form-control textarea {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #2d2d2d solid;
        display: block;
        width: 100%; /* Adjusted width */
        padding: 15px 0;
        font-size: 18px;
        color: #2d2d2d;
        resize: none; /* Prevent resizing */
        height: 225px; /* Adjusted height */
    }

    .form-control textarea:focus,
    .form-control textarea:valid {
        outline: 0;
        border-bottom-color: #4169e1;
    }

    .form-control label {
        position: absolute;
        bottom: 20px; /* Start at the bottom */
        left: 0;
        pointer-events: none;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .form-control label span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        color: #2d2d2d;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .form-control textarea:focus + label,
    .form-control textarea:valid + label {
        bottom: 190px; /* Move to the top */
    }

    .form-control textarea:focus + label span,
    .form-control textarea:valid + label span {
        color: #4169e1;
        transform: translateY(-30px);
    }
`;

export default InputMessage;