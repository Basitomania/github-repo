/* eslint-disable max-lines-per-function */
import React from 'react';
import { Col, Row } from 'reactstrap';
import './styles.css';
import githubApi from '../../hookServices';
import { Builder, Repository } from '../../types';
import Loader from '../Loader';
import { Star, Forks, Book } from '../svgs';

const Repositories = (): JSX.Element => {
  const { fetchRepositories } = githubApi;
  const { data, error, isLoading } = fetchRepositories();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      {data &&
        data.map((repository: Repository) => (
          <div className="repositories-container" key={`${repository.rank}`}>
            <Row className="repositories-row">
              <Col xs="6" sm="6" lg="6">
                <h5>
                  <Book />
                  <a
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                  >{`${repository.username} / ${repository.repositoryName}`}</a>
                </h5>
              </Col>
              <Col xs="6" sm="6" lg="6">
                <div className="repository-star-section">
                  <div>
                    <button className="star-btn btn-sm" value="Star">
                      <Star />
                      Star
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="repositories-description">
                <p>{repository.description}</p>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="10" lg="10">
                <div className="repositories-footer">
                  <div className="repositories-footer-item">
                    <p>{repository.language}</p>
                  </div>
                  <div className="repositories-footer-item">
                    <Star />
                    {repository.totalStars}
                  </div>
                  <div className="repositories-footer-item">
                    <Forks />
                    {repository.forks}
                  </div>
                  <div className="repositories-footer-item repositories-footer-images">
                    <p>Built by:</p>
                    {repository?.builtBy?.map((builder: Builder, index: number) => (
                      <a href={builder.url} target="_blank" key={`${builder.username} ${index}`} rel="noreferrer">
                        <img
                          src={builder.avatar}
                          alt={builder.username}
                          data-view-component="true"
                          className="footer-images"
                        ></img>
                      </a>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs="12" sm="2" lg="2">
                <div className="repositories-footer-item">
                  <Star />
                  {`${repository.starsSince} since ${repository.since}`}
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </>
  );
};

export default Repositories;
