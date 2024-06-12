
import clsx from 'clsx';
import { CheckIcon, ClockIcon } from 'lucide-react';

export default function ProductState({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-200 text-gray-500': status === '0',
          'bg-green-500 text-white': status === '1',
        },
      )}
    >
      {status === '0' ? (
        <>
          Inactivo
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === '1' ? (
        <>
          Activo
          <CheckIcon className="ml-1 w-4 " />
        </>
      ) : null}
    </span>
  );
}