import SummaryApi from "../common";

const fetchSubCategoryWiseProduct = async (subCategory) => {
  const response = await fetch(SummaryApi.subCategoryWiseProduct.url, {
    method: SummaryApi.subCategoryWiseProduct.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        subCategory: subCategory,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchSubCategoryWiseProduct;
