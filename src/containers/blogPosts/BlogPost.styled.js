import { device } from "@/lib/device";
import { styled } from "styled-components";

export const BlogPostGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 16px 32px;
    gap: 16px;

    @media ${device.mobile} {
        padding: 16px;
        grid-template-columns: 1fr;
        row-gap: 36px;
    }
`