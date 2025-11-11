import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f0f9ff, #e0e7ff);
  font-family: "Poppins", sans-serif;
`;

export const CheckoutCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 36px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 20px;
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f9fafb;
  padding: 14px 20px;
  border-radius: 12px;
  margin-bottom: 24px;

  span {
    color: #6b7280;
  }

  h2 {
    color: #16a34a;
  }
`;

export const MethodBox = styled.div`
  text-align: left;
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #374151;
  }

  select {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 1rem;
  }
`;

export const PixBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

export const QRImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
`;

export const CardInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
  }

  .flex {
    display: flex;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
  width: 100%;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #e5e7eb;
  margin: 12px 0;
`;
