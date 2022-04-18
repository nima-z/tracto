import styled from "./PrimaryButton.module.css"
export default function PrimaryButton({children}){
    return <button className={styled.button}>
        {children}
    </button>
}   