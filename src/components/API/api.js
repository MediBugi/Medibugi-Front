export async function getHosInfo() {
  const response = await fetch("./localhost:8080/getHospitalList");
  const body = await response.json();
  return body;
}
