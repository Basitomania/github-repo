import { useQuery } from 'react-query';
import { ReactQueryResponse } from './../types/index';
import constant from '../constants';

const { REPOSITORIES, REPOSITORIES_API, DEVELOPERS, DEVELOPERS_API } = constant;

const fetchRepositories = (): ReactQueryResponse => {
  const { data, error, isLoading } = useQuery(REPOSITORIES, () => fetch(REPOSITORIES_API).then((res) => res.json()));
  return { data, error, isLoading };
};

const fetchDevelopers = (): ReactQueryResponse => {
  const { data, error, isLoading } = useQuery(DEVELOPERS, () => fetch(DEVELOPERS_API).then((res) => res.json()));
  return { data, error, isLoading };
};

const githubApi = {
  fetchRepositories,
  fetchDevelopers,
};

export default githubApi;
