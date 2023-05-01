import "./Main.css";

function Best() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="병원 이미지"
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">평점 최고 병원</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  설명
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="병원 이미지"
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">평점 최고 의사</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  설명
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="병원 이미지"
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">리뷰 많은 병원</h5>
                  설명
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="병원 이미지"
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">리뷰 많은 의사</h5>
                  설명
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Best;
