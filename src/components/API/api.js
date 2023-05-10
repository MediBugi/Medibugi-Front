export async function getHosInfo({
  pageNum = 0,
  pageSize = 10,
  sido = "전체",
  sggu = "전체",
  depart = "전체",
}) {
  const query = `pageNum=${pageNum}&pageSize=${pageSize}&sido=${sido}&sggu=${sggu}&depart=${depart}`;
  const response = await fetch(
    `http://localhost:8080/getHospitalListByLocation?${query}`
  );
  const body = await response.json();
  return body;
}
