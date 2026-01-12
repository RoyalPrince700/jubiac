// Upload image via backend API
const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URI}/api/upload-image`, {
    method: "POST",
    body: formData,
    credentials: 'include', // Include cookies for authentication
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || "Image upload failed");
  }

  return json.data;
};

export default uploadImage;
