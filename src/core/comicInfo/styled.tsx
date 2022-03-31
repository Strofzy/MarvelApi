import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
    background-color:#24282f;
    padding:20px;
    justify-content:flex-start;
    align-items:flex-start;
`
export const ContainerSection = styled.div`
    display:grid;
    grid-template-columns: 500px 1fr;
    gap: 20px;
    width:100%;
    background-color:#24282f;
    height:auto;
    justify-content:flex-start;
    align-items:flex-start;
`

export const BoxCard = styled.div`
    display:flex;
    width:100%;
    height:auto;
    border-radius: 7px;
    background-color:#3c3e44;
`
export const BoxContainerVariant = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    flex-direction:row;
    flex-wrap: wrap;
    width:100%;
    gap:10px;
    justify-content:flex-start;
    align-items:flex-start;
`

export const BoxVariant = styled.div`
    display:flex;
    width:100%;
    padding:5px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;
    height:110px;
    border-radius: 7px;
    cursor:pointer;
    background-color:#3c3e44;
    transition: transform .2s;
    :hover {
        transform: scale(1.03);
    }
`

export const BoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    gap:10px;
    justify-content:flex-start;
    align-items:flex-start;
`
export const BoxDescription = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
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
export const SpanInfo = styled.span<{justify?:string}>`
    display:flex;
    width:100%;
    justify-content:${ ({ justify }) => justify || 'flex-start' };
    align-items:flex-start;
    height:100%;
    color:#fff;
    font-size:13px;
`
export const SpanTitle = styled.h2`
    display:flex;
    width:100%;
    margin:5px 0px;
    justify-content:flex-start;
    align-items:flex-start;
    height:auto;
    color:#fff;
    font-size:13px;
`

