import styled from 'styled-components';

export const Wrapper = styled.div`

background: ${({ value }) => value < 0 ? 'linear-gradient(90deg,rgb(58, 57, 57) 0%,rgb(197, 197, 197) 100%)' : 'linear-gradient(90deg,rgb(140, 138, 250) 0%,rgb(117, 116, 117) 100%)'};
border-radius: 3px;
padding: 10px;
margin-bottom: 7px;
display: flex;
align-items:center;
justify-content: space-between;
`;

Wrapper.displayName = 'TransactionWrapper'

export const TransactionDate = styled.div`
flex-grow: 1;
`;
TransactionDate.displayName = 'TransactionDate';


export const Value = styled.div`
flex-grow: 1;
`;
Value.displayName = 'Value';


export const Comment = styled.div`
flex-grow: 2;
`;
Comment.displayName = 'Comment';

export const Icon = styled.span`
img{
    max-width: 20px;
    margin-right: 10px;
}
`;
Comment.Icon = 'Icon';