import { When } from 'cucumber';

// eslint-disable-next-line no-useless-escape
When(/^user navigates to ([\w-_\/?=:#]+)$/, function (location) {
  return this.driver.get(
    `http://${process.env.WEB_SERVER_HOST_TEST}:${process.env.WEB_SERVER_PORT_TEST}${location}`,
  );
});
