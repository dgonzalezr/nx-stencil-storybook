import { getJestProjects } from '@nx/jest';

export default {
  maxWorkers: 0,
  projects: getJestProjects(),
};
