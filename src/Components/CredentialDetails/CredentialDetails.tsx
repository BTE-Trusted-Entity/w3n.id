import { IClaimContents } from '@kiltprotocol/sdk-js';

import * as styles from '../CredentialDetails/CredentialDetails.module.css';

import ValidIcon from '../../ImageAssets/ok.svg';

import { stringStartsWithW3 } from '../../Utils/w3n-helpers';

interface Props {
  credential: {
    contents: IClaimContents;
    attester: string;
  };
}
export const CredentialDetails = ({ credential }: Props) => {
  const { contents, attester } = credential;

  return (
    <div className={styles.credentialContainer}>
      {Object.entries(contents).map(([name, value]) => (
        <dl className={styles.container} key={name}>
          <dt className={styles.credentialTitle}>{name}</dt>
          <dd className={styles.credentialDescription}>{String(value)}</dd>
        </dl>
      ))}
      <dl className={styles.container}>
        <dt className={styles.credentialTitle}>
          {stringStartsWithW3(attester) ? 'Attester' : 'Attester DID'}
        </dt>
        <dd className={styles.credentialDescription}>{attester}</dd>
      </dl>
      <dl className={styles.container}>
        <dt className={styles.credentialTitle}>Valid</dt>
        <dd className={styles.valid}>
          <img src={ValidIcon} alt="valid" />
        </dd>
      </dl>
    </div>
  );
};
