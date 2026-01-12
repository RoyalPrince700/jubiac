import SummaryApi from "../common";

const fetchProductStatusWise = async (productStatus) => {
  const response = await fetch(SummaryApi.productStatusWise.url, {
    method: SummaryApi.productStatusWise.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        productStatus: productStatus,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchProductStatusWise;
