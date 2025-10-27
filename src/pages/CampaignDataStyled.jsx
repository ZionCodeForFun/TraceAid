import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 8%;
  background-color: #ffffff;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-family: Inter, sans-serif;
    font-size: 2.9rem;
    font-weight: 700;
    color: #000000;
  }

  p {
    color: #000000;
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 1.8rem;
  row-gap: 2.5rem;
  justify-items: center;
  padding: 2rem 0;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  border: 2px solid #e0e0e0;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  overflow: hidden;
  width: 350px; 
  height: 500px; 
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .details {
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;

    .top {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: #333333;
      margin-bottom: 0.5rem;
    }
     
    span{
       color: #8d8d8d;
       font-weight: 300;
       font-size: 0.2rem;
    }

    h3 {
      margin-bottom: 0.5rem;
      color: #333333;
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
      color: #333333;
      line-height: 1.5;
      margin-bottom: 1rem;
      flex-grow: 1; 
    }

    .funds {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      background-color: #f9fdf2;

      h4 {
        color: #333333;
        font-size: 0.7rem;
        font-weight: 300;
      }

      p {
        font-weight: 600;
        color: #333333;
      }
    }

    button {
      width: 100%;
      padding: 0.8rem;
      background: #1a1a1a;
      color: #c1e86e;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #c1e86e;
        color: #1a1a1a;
      }
    }
  }
`;

export const ProgressBar = styled.div`
  height: 6px;
  background: #e6e6e6;
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;

  .progress {
    height: 100%;
    background: #ffcd00;
    border-radius: 10px;
    width: ${props => props.percentage}%;
  }
`;




// import styled from "styled-components";

// export const Container = styled.div`
//   padding: 4rem 8%;
//   background-color: #fafafa;
// `;

// export const Header = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;

//   h1 {
//     font-size: 2.2rem;
//     font-weight: 700;
//     color: #222;
//   }

//   p {
//     color: #666;
//     margin-top: 0.5rem;
//   }
// `;

// export const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   gap: 2rem;
// `;

// export const Card = styled.div`
//   background: #fff;
//   border-radius: 1rem;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   }

//   img {
//     width: 100%;
//     height: 220px;
//     object-fit: cover;
//   }

//   .details {
//     padding: 1.5rem;

//     .top {
//       display: flex;
//       justify-content: space-between;
//       font-size: 0.9rem;
//       color: #777;
//       margin-bottom: 1rem;
//     }

//     h3 {
//       margin-bottom: 0.5rem;
//       color: #333;
//       font-size: 1.1rem;
//     }

//     p {
//       font-size: 0.9rem;
//       color: #666;
//       margin-bottom: 1.2rem;
//       line-height: 1.5;
//     }

//     .funds {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 0.8rem;

//       h4 {
//         color: #888;
//         font-weight: 500;
//       }

//       p {
//         font-weight: 600;
//         color: #333;
//       }
//     }

//     button {
//       width: 100%;
//       padding: 0.8rem;
//       background: #253d83;
//       color: #fff;
//       border: none;
//       border-radius: 0.5rem;
//       font-size: 1rem;
//       cursor: pointer;
//       transition: 0.3s;

//       &:hover {
//         background: #1a2e6b;
//       }
//     }
//   }
// `;

// export const ProgressBar = styled.div`
//   height: 6px;
//   background: #e6e6e6;
//   border-radius: 10px;
//   margin-bottom: 1rem;
//   overflow: hidden;

//   .progress {
//     height: 100%;
//     background: #ffcd00;
//     border-radius: 10px;
//   }
// `;
