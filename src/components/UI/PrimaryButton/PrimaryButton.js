import styled from "./PrimaryButton.module.css"
export default function PrimaryButton({children, onClick}){
    return <button className={styled.button} onClick={onClick}>
        {children}
    </button>
}   