import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  console.log(params);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/205412?s=460&u=6472e12aeadbb1d8d673e9a402ed29632a8d3aaf&v=4"
            alt="lucachaves"
          />
          <div>
            <strong>lucachaves/barn-dashboard</strong>
            <p>
              The Barn Dashboard is a Bioeconomy Project developed at Hamk
              Smart.
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>10</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="as">
          <div>
            <strong>blablabla</strong>
            <p>blablabla</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
