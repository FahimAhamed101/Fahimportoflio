'use client';

import React from 'react';
import axios from 'axios';
import { GoTrash } from 'react-icons/go';
import { useRouter } from 'next/navigation';

type Props = {
  productId?: string;
  className?: string;
  iconClassName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const DeleteProduct = ({
  productId,
  className = 'cursor-pointer',
  iconClassName = 'text-red-600',
  onClick,
}: Props) => {
  const router = useRouter();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    try {
      await axios.delete('/api/addproduct', {
        data: {
          productId,
        },
      });
      router.refresh();
    } catch (error) {
      console.log('Error deleting product');
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className={className}
      aria-label="Delete project"
    >
      <GoTrash className={iconClassName} size={18} />
    </button>
  );
};

export default DeleteProduct;
