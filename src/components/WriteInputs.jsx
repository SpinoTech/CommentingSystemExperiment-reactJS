import React,{useState} from 'react'

export default function WriteInputs({listOfComments , setlistOfComments ,location , placeholder}) {

    const [inputData, setInputData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setlistOfComments([...listOfComments, inputData]);
        setInputData({ name: "", massege: "" });
      };

  return (
    <form action="" onSubmit={handleSubmit} className={location=="cardBody" ? "cardInputs" : "mainInputs"}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputData.name}
          placeholder={placeholder.name}
        />
        <input
          type="text"
          onChange={handleChange}
          value={inputData.massege}
          name="massege"
          placeholder={placeholder.comment}
        />
    <button type="submit">{placeholder.buttonVal}</button>
      </form>
  )
}
