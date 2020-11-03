import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Link, withRouter, RouteProps } from 'react-router-dom';
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { Button, Input, Select } from 'antd';
import moment from 'moment';

import { Funcionario } from '../../store/ducks/funcionarios/types';

import { ApplicationState } from '../../store';

import * as FuncionariosActions from '../../store/ducks/funcionarios/actions';

interface StateProps {
  funcionarios: Funcionario[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class FuncionariosList extends Component<Props & RouteProps> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { funcionarios } = this.props;

    return (
      <div id="page-search-func">
        <header>
          <Link to="/">
            <FiArrowLeft />
            Voltar para Dashboard
          </Link>
        </header>

        <form>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '10px',
            }}
          >
            <Input
              style={{ margin: '10px' }}
              placeholder="Digite o nome do Funcionario"
            />
            <Input
              style={{ margin: '10px' }}
              placeholder="Digite o Sobrenome do Funcionario"
            />
            <select style={{ margin: '10px' }} name="" id="">
              <option value="0">SELECIONE O CARGO</option>
            </select>

            <Input type="date" />

            <Input style={{ margin: '10px' }} placeholder="Digite Salário" />
          </div>
          <Button type="primary">
            Cadastrar
            <FiPlusCircle />
          </Button>
          <div className="field">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>Cargo</th>
                  <th>Data Nascimento</th>
                  <th>Salário</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {funcionarios.map((resp: Funcionario) => (
                  <tr>
                    <>
                      <td>{resp.nome}</td>
                      <td>{resp.sobrenome}</td>
                      <td>{resp.cargo}</td>
                      <td>{moment(resp.nascimento).format('DD/MM/YYYY')}</td>
                      <td>{resp.salario}</td>
                    </>
                    <td>
                      <Link
                        to="/"
                        title="Editar funcionário(a)"
                        style={{
                          marginRight: '2px',
                        }}
                      >
                        <span>
                          <BiEdit />
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  funcionarios: state.funcionarios.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(FuncionariosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FuncionariosList);
