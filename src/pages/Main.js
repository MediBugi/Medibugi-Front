import "./style.css";

function Main() {
    return (
        <>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Image</h1>
                    <p class="lead fw-normal text-white-50 mb-0">info</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <h2 class="section-title">병과 목록</h2>
            <div class="artists">
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">신경외과</div>
              </button>
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">정형외과</div>
              </button>
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">치과</div>
              </button>
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">안과</div>
              </button>
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">이비인후과</div>
              </button>
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">산부인과</div>
              </button>
              <button class="artist">
                <img class="artist-profile" src="https://www.gwhospital.co.kr/images/sub/clinic/clinic_icon_10.jpg"></img>
                <div class="artist-name">정신과</div>
              </button>
            </div>
        </section>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="병원 이미지" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">평점 최고 병원</h5>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    설명
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">자세히 보기</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="병원 이미지" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">평점 최고 의사</h5>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    설명
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">자세히 보기</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="병원 이미지" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">리뷰 많은 병원</h5>
                                    설명
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">자세히 보기</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="병원 이미지" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">리뷰 많은 의사</h5>
                                    설명
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">자세히 보기</a></div>
                            </div>
                        </div>
                    </div>                                      
                </div>
            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">footer info</p></div>
        </footer>
        </>
    );
}

export default Main;