const fetchCategory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/categories/${id}`
  })
}

export default fetchCategory;
