// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = function (api: any) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
