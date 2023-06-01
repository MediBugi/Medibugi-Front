export async function getHosInfo({ sido, sggu, depart, search }) {
  const query = `sido=${sido}&sggu=${sggu}&depart=${depart}&name=${search}`;
  const response = await fetch(
    `http://13.209.244.206:8080/getHospitalListByLocation?${query}`
  );
  const body = await response.json();
  return body;
}

export async function createReview({ formData, memberid, hoscnt }) {
  const query = `memberid=${memberid}&hoscnt=${hoscnt}`;
  const response = await fetch(
    `http://13.209.244.206:8080/review/add?${query}`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getReviews({ code }) {
  const response = await fetch(
    `http://13.209.244.206:8080/review/getReview?code=${code}`
  );
  const body = await response.json();
  return body;
}

export async function deleteReview({ memberid, reviewCnt }) {
  const response = await fetch(
    `http://13.209.244.206:8080/review/delete?memberid=${memberid}&reviewCnt=${reviewCnt}`,
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    throw new Error("리뷰를 삭제하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
