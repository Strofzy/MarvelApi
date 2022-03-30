import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const CardLogin = styled.div`
    display: flex;
    flex-direction: row;
    border:1px solid #00000024;
    justify-content:center;
    border-radius:40px;
    background-color:#fff;
    width: 950px;
    height: 510px;
    @media only screen and (max-width: 950px) {
        width: 750px;
    }
    @media only screen and (max-width: 768px) {
        width: 650px;
    }
    @media only screen and (max-width: 650px) {
        width:430px;
    }
`
export const Box = styled.div<{gap?:string}>`
    display: flex;
    width: 100%;
    height:100%;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    padding:10px;
    gap:${ ({ gap })=> gap ? gap : '15px' };

`

export const Title = styled.span<{color?: string}>`
    font-size: 18px;
    letter-spacing:2px;
    color: ${ ({ color })=> color ? color : '#000' };
    text-align:center;
    width: 100%;
    @media only screen and (max-width: 768px) {
        font-size:18px;
    }
`
export const DivLeft = styled.form`
    display: flex;
    width: 40%;
    padding: 20px;
    border-radius: 40px 0 0 40px;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    @media only screen and (max-width: 650px) {
        width:100%;
    }
`
export const DivRight = styled.div`
    display: flex;
    width: 60%;
    box-shadow: rgb(44 101 144 / 10%) 0px 0px 20px 0px;
    border-radius: 40px;
    padding: 20px;
    flex-direction:column;
    background-color: #7b1216;
    justify-content: space-between;
    @media only screen and (max-width: 650px) {
        display: none;
    }
`
export const ButtonIn = styled.button`
    display:flex;
    width:100%;
    padding:7px;
    border-radius:6px;
    border:none;
    background-color: ${ ({ theme })=> theme.PColor };
    justify-content:center;
    align-items:center;
    color: #fff;
    transition: .1s;
    font-size: 14px;
    margin-top:10px;
    cursor: pointer;
    :hover{
        background-color: ${ ({ theme })=> theme.BVColor };
    }
`
export const BoxISection = styled.div<{justify?: string}>`
    display:flex;
    flex-direction:column;
    justify-content:${ ({ justify })=> justify ? justify : 'center' };
    align-items:center;
    height:33%;
`
export const TextLink = styled.span<{align?: string, top?: string}>`
    width:100%;
    text-align:${ ({ align })=> align ? align : 'right' };
    font-size:12px;
    color:${ ({ color })=> color ? color : '#000' };
    margin-top:${ ({ top })=> top ? top : '0px' };
    text-decoration:none;
    cursor: pointer;
`