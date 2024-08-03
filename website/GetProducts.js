export const GetProducts=async ()=>{
  try {
    const response = await fetch("http://localhost:8080/product/", {
      method: "GET",
    });
    if (response.ok) {
      const getproduct = await response.json();

      return getproduct;
    }
  } catch (error) {
    console.log("Error ha ", error);
  }
}