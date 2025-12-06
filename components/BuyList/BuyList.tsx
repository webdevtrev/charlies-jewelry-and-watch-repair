import React from 'react';

type Props = {
  categories: string[];
  className?: string;
};

const BuyList: React.FC<Props> = ({ categories, className = '' }) => {
  return (
    <ul className={className}>
      {categories.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
};

export default BuyList;
