import stopEventPropagation from '@lenster/lib/stopEventPropagation';
import { Card } from '@lenster/ui';
import cn from '@lenster/ui/cn';
import type { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
  dataTestId?: string;
  zeroPadding?: boolean;
}

const Wrapper: FC<WrapperProps> = ({
  children,
  className = '',
  dataTestId = '',
  zeroPadding = false
}) => (
  <Card
    className={cn('mt-3 cursor-auto', className, { 'p-5': !zeroPadding })}
    forceRounded
    dataTestId={dataTestId}
    onClick={stopEventPropagation}
  >
    {children}
  </Card>
);

export default Wrapper;
