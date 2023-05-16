export async function getHosInfo({ sido, sggu, depart }) {
  const query = `sido=${sido}&sggu=${sggu}&depart=${depart}`;
  const response = await fetch(
    `http://localhost:8080/getHospitalListByLocation?${query}`
  );
  const body = await response.json();
  return body;
}

export async function createReview(formData) {
  const response = await fetch(``, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
