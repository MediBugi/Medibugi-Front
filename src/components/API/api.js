export async function getHosInfo({
  pageNum = 0,
  pageSize = 10,
  depart = "내과",
}) {
  const query = `pageNum=${pageNum}&pageSize=${pageSize}&depart=${depart}`;
  const response = await fetch(
    `http://localhost:8080/getHospitalList?${query}`
  );
  const body = await response.json();
  return body;
}

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `http://learn.codeit.kr/api/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
