import globalConfig from '../../../config/client.global.yml';
import localConfig from '../../../config/client.local.yml';

const config = { ...globalConfig.client, ...localConfig.client };

/**
 * @property {string} apiBaseUrl
 * @property {string} versionNumber
 * @property {string} versionName
 * @property {string} versionSampleId
 * @property {string} repositoryUrl
 *
 * @property {string} contributeUrl
 */
export default config;
