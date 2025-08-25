import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardBody, Row, Col } from "reactstrap";

const BannerTableShimmer = () => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
      <Card>
        <CardBody className="p-3 mt-2">
          <Row className="mb-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Col sm={2} key={index}>
                <Skeleton height="40px" width="100%" borderRadius="5px" />
              </Col>
            ))}
          </Row>
          <hr />

          <Row className="mb-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Col sm={2} key={index}>
                <Skeleton height="30px" width="100%" borderRadius="5px" />
              </Col>
            ))}
          </Row>

          {Array.from({ length: 8 }).map((_, index) => (
            <Row key={index} className="mb-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <Col sm={2} key={index}>
                  <Skeleton height="25px" width="100%" borderRadius="5px" />
                </Col>
              ))}
            </Row>
          ))}
          <hr />

          <Row className="mt-5 justify-content-between">
            <Col sm={2} md={4} lg={2} className="mx-1">
              <Skeleton height="20px" width="100%" borderRadius="5px" />
            </Col>

            <Col sm={2} lg={5} className="mx-1 text-end">
              <Skeleton height="20px" width="100%" borderRadius="5px" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </SkeletonTheme>
  );
};

export default BannerTableShimmer;
