import SummaryApi from "../common";

const fetchHotDealWiseProduct = async (hotDeal) => {
  const response = await fetch(SummaryApi.hotDealWiseProduct.url, {
    method: SummaryApi.hotDealWiseProduct.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hotDeal: hotDeal,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchHotDealWiseProduct;
