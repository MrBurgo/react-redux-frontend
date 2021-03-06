const TODOS_LISTED = 'TODOS_LISTED'

const listTodos = ({ token }) => {
  const url = `${process.env.REACT_APP_API_URL}/todo`
  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  return (dispatch) => {
    fetch(url, opts)
      .then(result => result.json())
      .then((result) => {
        dispatch({ type: TODOS_LISTED, payload: result })
      })
  }
}

export { TODOS_LISTED, listTodos }
