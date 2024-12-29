import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ListBoxItem = styled.div`
  display: inline-block;
  margin-bottom: 30px;
  div {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h3 {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    margin-top: 5px;
    font-size: 16px;
    color: var(--color-gray-500);
    svg {
      font-size: 12px;
      color: var(--secondary-color);
      margin-right: 3px;
    }
  }
`;

const ListBox = ({ cafe }) => {
  const showCafe = useNavigate();
  const viewProduct = cafeId => {
    showCafe(`/order/${cafeId}`); // 동적으로 상품 ID를 사용해 페이지 이동
  };
  if (!cafe) return null; // undefined 방지
  return (
    <ListBoxItem onClick={() => viewProduct(cafe.cafeId)}>
      <div>
        <img src={cafe.cafePic} alt={cafe.cafeName} />
      </div>
      <h3>{cafe.cafeName}</h3>
      <p>
        <FaLocationDot />
        {cafe.distance}m
      </p>
    </ListBoxItem>
  );
};

export default ListBox;
