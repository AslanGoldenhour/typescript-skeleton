import dotenv from 'dotenv';

// Mocking dotenv
jest.mock('dotenv', () => {
  return {
    config: jest.fn(),
  };
});

describe('index.ts', () => {
  afterEach(() => {
    jest.clearAllMocks();
    // Clear the require cache to ensure the module code runs on every require
    delete require.cache[require.resolve('../src/index.ts')];
  });

  it('should call dotenv.config', () => {
    require('../src/index.ts'); // This will run the file
    expect(dotenv.config).toHaveBeenCalledTimes(1);
  });
});
