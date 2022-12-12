import styled from "styled-components";

const StyledSlider = styled.div`
{
    autoPlay: ${(props) => props.autoPlay || "false"};
    autoPlayTime: ${(props) => props.autoPlay || "0"};
    width: ${(props) => props.width || "1rem"};
    height: ${(props) => props.height || "1rem"};
    
    slider {
        overflow: hidden;
        position: relative;
      
        & .slide-list {
          display: flex;
          height: 100%;
          transition: transform 0.5s ease-in-out;
          width: 100%;
      
          & .slide {
            flex: 1 0 100%;
            position: relative;
      
            & .slide-image {
              display: flex;
              margin: 0 auto;
              max-height: 300px;
              width: 100%;
              object-fit: contain;
            }
      
            & .slide-title {
              text-align: center;
              margin-top: 10px;
            }
          }
        }
      }
 }
`;
export default StyledSlider;
