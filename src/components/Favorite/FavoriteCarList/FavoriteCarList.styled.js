import styled from "styled-components";

export const CarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(274px, 340px)
  ); /* 4 колонки з однаковою шириною */
  grid-gap: 10px; /* Відступи між елементами */
  /* Додайте інші стилі за потреби */
  justify-content: space-between;
`;
