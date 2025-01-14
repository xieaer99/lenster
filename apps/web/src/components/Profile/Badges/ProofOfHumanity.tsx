import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { STATIC_IMAGES_URL } from '@lenster/data/constants';
import type { Profile } from '@lenster/lens';
import { Tooltip } from '@lenster/ui';
import { Trans } from '@lingui/macro';
import type { FC } from 'react';

interface ProofOfHumanityProps {
  profile: Profile;
}

const ProofOfHumanity: FC<ProofOfHumanityProps> = ({ profile }) => {
  if (!profile?.onChainIdentity?.proofOfHumanity) {
    return null;
  }

  return (
    <Tooltip
      content={
        <span className="flex items-center space-x-1">
          <span>
            <Trans>Proof of Humanity verified</Trans>
          </span>
          <CheckCircleIcon className="h-4 w-4" />
        </span>
      }
      placement="top"
    >
      <img
        className="drop-shadow-xl"
        height={75}
        width={75}
        src={`${STATIC_IMAGES_URL}/badges/poh.png`}
        alt="Proof Of Humanity Badge"
        data-testid="profile-poh-badge"
      />
    </Tooltip>
  );
};

export default ProofOfHumanity;
