import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    width:100%;
    background-color:#24282f;
    padding:20px;
    height:auto;
    justify-content:flex-start;
    align-items:flex-start;
`

export const BoxCard = styled.div`
    display:flex;
    width:100%;
    height:180px;
    border-radius: 7px;
    overflow:hidden;
    position:relative;
    cursor:pointer;
    background-color:#3c3e44;
    transition: transform .2s;
    :hover {
        transform: scale(1.03);
    }
`
export const IconHeart = styled.div`
    display:flex;
    cursor:pointer;
    position:absolute;
    top:10px;
    z-index:99;
    right:15px;
    transition: transform .2s;
    :hover {
        transform: scale(1.03);
    }
`
export const BoxImg = styled.div`
    display:flex;
    width:35%;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    height:100%;
`
export const BoxDescription = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 15px;
    gap:20px;
    width:65%;
    overflow:hidden;
    height:100%;
`
export const DivInfo = styled.div`
    display:flex;
    width:100%;
    gap:3px;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`
export const SpanInfo = styled.span`
    display:flex;
    width:100%;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    color:#fff;
    font-size:13px;
`

