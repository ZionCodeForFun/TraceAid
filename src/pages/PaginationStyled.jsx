import styled from "styled-components";

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem; 
  margin-top: 2.2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
`;

export const PageButton = styled.button`
  padding: 0.55rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #c1e86e;
  background: ${({ $active }) => ($active ? "#c1e86e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#1a1a1a" : "#333")};
  transition: 0.25s ease;

  &:hover {
    background: #c1e86e;
    color: #000;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background: #f0f0f0;
    border-color: #ddd;
    color: #777;
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.85rem;
    font-size: 0.85rem;
  }
`;

export const ArrowButton = styled(PageButton)`
  padding: 0.5rem 0.9rem;
  font-size: 1rem;
`;
