export async function getHosInfo({ sido, sggu, depart, day, hour }) {
  const query = `sido=${sido}&sggu=${sggu}&depart=${depart}&day=${day}&hour=${hour}`;
  const response = await fetch(
    `http://localhost:8080/getHospitalListByLocation?${query}`
  );
  const body = await response.json();
  return body;
}
