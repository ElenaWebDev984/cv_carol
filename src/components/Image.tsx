import styled from "styled-components";

type PhotoTypes = {
    width?: string
    height?: string
    borderRadius?: string
    objectFit?: string
}


export const Image = styled.img<PhotoTypes>`
    width: ${props => props.width || '430px'};
    height: ${props => props.height || '540px'};
    border-radius: ${props => props.borderRadius || '10%'};
    object-fit: ${props => props.objectFit || 'cover'};
`