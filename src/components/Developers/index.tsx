/* eslint-disable max-lines-per-function */
import React from 'react';
import { Col } from 'reactstrap';
import './styles.css';
import githubApi from '../../hookServices';
import Loader from '../Loader';
import { Developer } from '../../types';
import CustomButton from '../CustomButton';
import { Flame, Book, Heart } from '../svgs';

const Developers = (): JSX.Element => {
  const { fetchDevelopers } = githubApi;
  const { data, error, isLoading } = fetchDevelopers();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      {data?.map((developer: Developer) => (
        <div className="developers-container" key={`${developer.rank}`}>
          <Col xs="6" sm="4" lg="4" className="developers-column first-column">
            <div className="developer-rank">
              <h6>{developer.rank}</h6>
            </div>
            <img
              src={developer.avatar}
              alt={developer.username}
              data-view-component="true"
              className="profile-image"
            ></img>

            <div className="developer-name">
              <h5>
                <a href={developer.url} target="_blank" rel="noreferrer">
                  {developer.name}
                </a>
              </h5>
              <h6>{developer.username}</h6>
            </div>
          </Col>
          <Col xs="6" sm="6" lg="6" className="developers-column second-column">
            <div className="developer-info-column">
              <div className="developer-info-item">
                <Flame />
                POPULAR REPO
              </div>
              <div className="developer-info-item">
                <Book />
                <a href={developer?.popularRepository?.url}>{developer?.popularRepository?.repositoryName}</a>
              </div>
              <div className="developer-info-item">{developer.popularRepository?.description}</div>
            </div>
          </Col>
          <Col xs="12" sm="2" lg="2" className="developers-column third-column">
            <div className="repo-star-section">
              <div className="btn-sponsor">
                <CustomButton value={'Sponsor'} icon={<Heart />} />
              </div>
              <div>
                <CustomButton value={'Follow'} />
              </div>
            </div>
          </Col>
        </div>
      ))}
    </>
  );
};

export default Developers;
