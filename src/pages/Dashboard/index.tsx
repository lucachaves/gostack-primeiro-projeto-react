import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashborad: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositório no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/205412?s=460&u=6472e12aeadbb1d8d673e9a402ed29632a8d3aaf&v=4"
            alt="Luiz Carlos"
          />
          <div>
            <strong>lucachaves/barn-dashboard</strong>
            <p>
              The Barn Dashboard is a Bioeconomy Project developed at Hamk
              Smart.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/205412?s=460&u=6472e12aeadbb1d8d673e9a402ed29632a8d3aaf&v=4"
            alt="Luiz Carlos"
          />
          <div>
            <strong>lucachaves/barn-dashboard</strong>
            <p>
              The Barn Dashboard is a Bioeconomy Project developed at Hamk
              Smart.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/205412?s=460&u=6472e12aeadbb1d8d673e9a402ed29632a8d3aaf&v=4"
            alt="Luiz Carlos"
          />
          <div>
            <strong>lucachaves/barn-dashboard</strong>
            <p>
              The Barn Dashboard is a Bioeconomy Project developed at Hamk
              Smart.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashborad;
