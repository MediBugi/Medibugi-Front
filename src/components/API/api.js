import axios from "axios";
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

export const getDirections = async (startLat, startLng, endLat, endLng) => {
  const url = `/map-direction/v1/driving?start=${startLng},${startLat}&goal=${endLng},${endLat}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": "uqmidslyyv",
        "X-NCP-APIGW-API-KEY": "QcEMTyfnGmC3y5jyWiFRIxnkBzuzupW7WTa7VxQN",
      },
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching directions:", error);
    throw error;
  }
};
