import { jest } from '@jest/globals';
import * as nextRouterMock from 'next-router-mock';
import '@testing-library/jest-dom';

// Allow router mocks.
jest.mock('next/router', () => nextRouterMock);
