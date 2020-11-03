/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, withRouter, RouteProps } from 'react-router-dom';
import { FiArrowLeft, FiPlusCircle } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { bindActionCreators, Dispatch } from 'redux';

import { Button, Input } from 'antd';
import { connect } from 'react-redux';

import './styles.css';
import { Cargo } from '../../store/ducks/cargos/types';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';

import { ApplicationState } from '../../store';

import * as CargosActions from '../../store/ducks/cargos/actions';

interface StateProps {
  cargos: Cargo[];
}

interface DispatchProps {
  loadRequest(): void;
  createCargo(descricao: any): void;
}

type Props = StateProps & DispatchProps;

class CargosList extends Component<Props & RouteProps> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { cargos, createCargo } = this.props;

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
              placeholder="Digite o nome do Cargo"
            />
          </div>
          <Button
            type="primary"
            onClick={() => createCargo({ descricao: 'Cargo Teste' })}
          >
            Cadastrar
            <FiPlusCircle />
          </Button>
          <div className="field">
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {cargos.map((resp: Cargo) => (
                  <tr>
                    <>
                      <td>{resp.cargo}</td>
                    </>
                    <td>
                      <Link
                        to="/"
                        title="Editar Cargo"
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
  cargos: state.cargos.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CargosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CargosList);
