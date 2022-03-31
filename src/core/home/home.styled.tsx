import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background-color:#d2d2d2;
    height:100vh;
    justify-content:flex-start;
    align-items:flex-start;
`
export const SectionTop = styled.div`
    display:flex;
    width:100%;
    background-color:#fff;
    padding:20px;
    border:1px solid #d2d2d2;
    height:10%;
    justify-content:space-between;
    align-items:center;
`

export const BoxInput = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:45px;
    position:relative;
    border-radius:7px;
`
export const Input = styled.input`
    display:flex;
    width:100%;
    height:100%;
    outline:none;
    border:1px solid #d2d2d2;
    padding:0px 5px;
    border-radius:5px;
`
export const DivIconSearch = styled.button`
    width:30px;
    cursor: pointer;
    height:30px;
    border-radius:50%;
    border:none;
    position:absolute;
    right:8px;
    :hover{
        opacity: .8;
    }
`
export const DivSectionsTop = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:33%;
`
