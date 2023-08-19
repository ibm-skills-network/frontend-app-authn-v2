import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';

const LargeLayout = ({ intl }) => (
  <div className="w-50 d-flex">
      <div className="col-md-9 dark-blueish-background-color">
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="min-vh-100 d-flex align-items-center">
          <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
          <h1
            className={classNames(
              'text-white mw-xs',
              { 'ml-6': getConfig().SITE_NAME !== 'edX' },
            )}
          >
            <div className='montserrat-font'>
              <div className="bigger-text">
                {formatMessage(messages['start.learning'])}
              </div>
              <div className="pumpkin-orange-text bigger-text">
                {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
              </div>
            </div>
          </h1>
        </div>
      </div>
      <div className="col-md-3 bg-white p-0">
        <div className='curve-container'>
          <div className='curve-divider'></div>
        </div>
      </div>
    </div>
);

LargeLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LargeLayout);
