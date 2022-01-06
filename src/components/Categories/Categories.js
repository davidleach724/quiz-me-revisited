const Categories = ({ categoryData, handleCategoryChange }) => {
  const categoryList = categoryData.map((category) => {
    return (
      <option value={category.name} key={category.id}>
        {category.name}
      </option>
    );
  });

  return (
    <select onChange={(e) => handleCategoryChange(e.target.value)}>
      {categoryList}
    </select>
  );
};

export default Categories;
