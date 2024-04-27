import styled from 'styled-components';

export const ArticleContainer = styled.article`
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  background-color: #fff;
  padding: 1rem;
  width: 700px;
  margin-top: 20px;
  height: fit-content;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;
  border-radius: 0.5rem;
  background-color: #3b82f6;
  padding: 0.5rem;
  color: #fff;
`;

export const StyledSVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

export const StyledHeading = styled.h3`
  margin-top: 0.125rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #374151;
`;

export const StyledParagraph = styled.p`
  margin-top: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
`;

export const Button = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ArrowSpan = styled.span`
  display: block;
  transition: margin 0.3s ease;
`;