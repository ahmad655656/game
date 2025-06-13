import { Button } from '@/components/ui/button';
import React from 'react';

interface PaginationProps {
  previous: () => void;
  Next: () => void;
  one: () => void;
  two: () => void;
  three: () => void;
  disableNext: boolean;
  disablePrev: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  previous,
  Next,
  one,
  two,
  three,
  disableNext,
  disablePrev,
}) => {
  return (
    <div className="flex lg:mx-0 mx-auto">
      <Button
        onClick={previous}
        disabled={disablePrev}
        className="flex items-center px-4 py-2 mx-1 text-rose-400 bg-white rounded-md cursor-pointer dark:bg-gray-800 dark:text-gray-600"
      >
        Previous
      </Button>

      <Button
        onClick={one}
        className="items-center px-4 py-2 mx-1 text-rose-400 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
      >
        1
      </Button>

      <Button
        onClick={two}
        className="items-center px-4 py-2 mx-1 text-rose-400 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
      >
        2
      </Button>

      <Button
        onClick={three}
        className="items-center px-4 py-2 mx-1 text-rose-400 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
      >
        3
      </Button>

      <h4 className="text-rose-400">.....</h4>

      <Button
        onClick={Next}
        disabled={disableNext}
        className="flex items-center px-4 py-2 mx-1 text-rose-400 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
