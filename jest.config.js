const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'build/test-results',
        uniqueOutputName: 'true',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
};
